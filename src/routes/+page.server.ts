import type { PageServerLoad } from "./$types";
import { checkVersion } from "$lib/converter/version";


export const load = (async ({ locals }) => {
    const [ yay, problem ] = await checkVersion();

    if (!problem) {
        return { problem: false, ffmpeg: yay };
    }

    return { problem: true };

}) satisfies PageServerLoad;