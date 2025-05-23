import path from "node:path";
import videoExtensions from 'video-extensions';

const from = new Set(videoExtensions);

export default function isVideo(filePath: string) {
	return from.has(path.extname(filePath).slice(1).toLowerCase());
}