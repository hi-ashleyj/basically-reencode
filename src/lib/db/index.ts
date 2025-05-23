import { JSONFilePreset } from "lowdb/node";
import { homedir } from "node:os"
import { join } from "node:path"
import { type Default as DefaultDB, defaults as defaultDefaults } from "./defaults";
import { type History as HistoryDB, defaults as historyDefaults } from "./history";
import { type Job as JobDB, defaults as jobDefaults } from "./job";
import { type Options as OptionsDB, defaults as optionDefaults } from "./options";
import { type Schedule as ScheduleDB, defaults as scheduleDefaults } from "./schedule";
import { type Queue as QueueDB, defaults as queueDefaults } from "./queue";

const location = join(homedir(), "");

export type DatabaseShape = {
    options: OptionsDB;
};

const defaultData = ({
    options: optionDefaults,
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