export class ContentItem {
    IMAGE_TYPE = "image";
    VIDEO_TYPE = "video";

    constructor(fileName, type, resolution, previewURL, createdAt) {
        this.fileName = fileName;
        this.type = type;
        this.resolution = resolution;
        this.createdAt = createdAt;
        this.previewURL = previewURL;
        this.isImage = type === this.IMAGE_TYPE;
    }
}