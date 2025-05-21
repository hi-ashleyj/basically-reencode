import { JSONFilePreset } from "lowdb/node";
import { homedir } from "node:os"
import { join } from "node:path"

const location = join(homedir(), "");

export type DatabaseShape = {
 
};

const defaultData = ({

}) satisfies DatabaseShape;

export const db = await JSONFilePreset<DatabaseShape>(location, defaultData);
await db.read();

declare global {
    namespace App {
        interface Locals {
            db: typeof db;
        }
    }
}