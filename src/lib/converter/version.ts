import { spawn } from "node:child_process";

type FFMpeg = {
    h264: boolean;
    h265: boolean;
    version: string;
}

export const checkVersion = () => new Promise<Unwrap<FFMpeg>>((resolve, reject) => {
    let stdout = "";
    let stderr = "";

    const sevn = spawn("ffmpeg", [ "-version" ]);
    sevn.stdout.on("data", (data: string) => stdout += data);
    sevn.stderr.on("data", (data: string) => stderr += data);

    sevn.on("close", () => {
        const chunks = stdout.split("\n");
        const versionLine = chunks.find((it) => it.startsWith("ffmpeg version "));
        const configLine = chunks.find(it => it.startsWith("configuration:"));
        if (versionLine && configLine) {
            const version = versionLine.split(" ")[2];
            const h264 = configLine.includes("--enable-libx264");
            const h265 = configLine.includes("--enable-libx265") && configLine.includes("--enable-gpl");
            resolve([{ version, h264, h265 }, null]);
        }
        resolve([null, new Error()]);
    })
    
    sevn.on("error", (e: Error) => {
        resolve([ null, e ]);
    })
});