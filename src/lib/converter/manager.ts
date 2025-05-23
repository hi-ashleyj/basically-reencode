import { FFMpegProgress, type IFFMpegProgressData, type IFFMpegFileDetails } from 'ffmpeg-progress-wrapper';

class Manager {

    private db: App.Locals["db"];
    
    private task: FFMpegProgress | null = null;
    private lastProgress: IFFMpegProgressData | null = null;
    private lastDetails: IFFMpegFileDetails | null = null;

    constructor(db: App.Locals["db"]) {
        this.db = db;
    }

    private register(item: FFMpegProgress) {
        item.on("progress", (data) => {
            this.lastProgress = data;
        });

        item.once("details", (data) => {
            this.lastDetails = data;
        });

        item.once("end", () => {
            this.task = null;
            this.finalise();
        });

        this.task = item;
    }

    private finalise() {
        this.lastProgress = null;
        this.lastDetails = null;
        setImmediate(this.runNextTask.bind(this));
    }

    stats() {
        if (!this.task || !this.lastProgress || !this.lastDetails) {
            return null;
        }
        return {
            details: this.lastDetails,
            progress: this.lastProgress,
        };
    }

    runNextTask() {
        if (this.task) return;
    }


}