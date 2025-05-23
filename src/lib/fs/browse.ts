import { readdir } from "node:fs/promises";
import { join } from "node:path";
import isVideo from './is-video';

export type Filer = {
    name: string;
    type: "video" | "folder" | "other",
};

const sorter = new Intl.Collator("en-NZ", { sensitivity: "base", numeric: true });

export const browse = async (root: string, browse: string[]): Promise<Unwrap<Filer[]>> => {
    const final = join(root, ...browse);

    try {
        const results = await readdir(final, { withFileTypes: true });
    
        const files = results.map(it => {
            return {
                name: it.name,
                type: it.isDirectory() ? "folder" : isVideo(join(final, it.name)) ? "video" : "other",
            } as Filer;
        });
    
        const folders = files.filter(it => it.type === "folder").sort((a, b) => sorter.compare(a.name, b.name));
        const nolders = files.filter(it => it.type !== "folder").sort((a, b) => sorter.compare(a.name, b.name));
    
        return [ [ ...folders, ...nolders ], null ];
    } catch (e) {
        return [ null, e as Error ];
    }
};