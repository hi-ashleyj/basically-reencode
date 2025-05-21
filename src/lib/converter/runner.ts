import { FFMpegProgress, type IFFMpegProgressData, type IFFMpegFileDetails } from 'ffmpeg-progress-wrapper';

class Runner {

    private db: App.Locals["db"];
    
    private task: FFMpegProgress | null = null;
    private lastProgress: IFFMpegProgressData | null = null;
    private details: IFFMpegFileDetails | null = null;

    constructor(db: App.Locals["db"]) {
        this.db = db;
    }

    private register(item: FFMpegProgress) {
        item.on("progress", (data) => {
            this.lastProgress = data;
        });

        item.once("details", (data) => {
            this.details = data;
        });

        item.once("end", () => {
            this.task = null;
            this.lastProgress = null;
            this.details = null;
        });

        this.task = item;
    }


}