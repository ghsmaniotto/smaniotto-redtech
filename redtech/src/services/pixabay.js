export class Pixabay {
    SERVICE_URL = "https://pixabay.com/api/";
    SERVICE_KEY = `?key=&`;
    ITEMS_PER_PAGE = 50;

    async getImages(imageContent) {
        const url = `${this.SERVICE_URL}${this.SERVICE_KEY}q=${imageContent}&per_page=${this.ITEMS_PER_PAGE}`;
        
        try {
            const images = await fetch(url)
                                    .then((response) => response.json())
                                    .then((data) => data["hits"]);

            return images.map((image) => this.buildContentItemFromImage(image));
        } catch(e) {
            return Error("Not possible to fetch images");
        }
    }

    async getVideos(imageContent) {
        const url = `${this.SERVICE_URL}videos/${this.SERVICE_KEY}q=${imageContent}&per_page=${this.ITEMS_PER_PAGE}`;
        try {
            const videos = await fetch(url)
                                    .then((response) => response.json())
                                    .then((data) => data["hits"]);
            
            return videos.map((video) => this.buildContentItemFromVideo(video));
        } catch(e) {
            return Error("Not possible to fetch videos");
        }
    }

    buildContentItemFromVideo(video) {
        const smallVideo = video["videos"]["small"];
        
        return new ContentItem(
            this.getFileNameFromUrl(smallVideo["url"]),
            ContentItem.VIDEO_TYPE,
            this.getResolutionFromVideo(smallVideo),
            smallVideo["url"],
            this.getCreatedAtFromUrl(video["userImageURL"])
        )
    }

    buildContentItemFromImage(image) {
        return new ContentItem(
            this.getFileNameFromUrl(image["previewURL"]),
            ContentItem.IMAGE_TYPE,
            this.getResolutionFromImage(image),
            image["previewURL"],
            this.getCreatedAtFromUrl(image["userImageURL"])
        )
    }

    getResolutionFromVideo(video) {
        return `${video["height"]} x ${video["width"]}`;
    }
    
    getResolutionFromImage(image) {
        return `${image["imageHeight"]} x ${image["imageWidth"]}`;
    }
    
    getCreatedAtFromUrl(url=""){
        const dateInUrlRegex = /\d{4}\/\d{2}\/\d{2}/;
        const date = RegExp(dateInUrlRegex).exec(url);
        
        if (date) {
            let dateSplitted = date.toString().split('/');
            
            return dateSplitted.reverse().join('/');
        } else {
            return "Create date not provided";
        }
    }

    getFileNameFromUrl(url=""){
        const fileNameRegex = /[^/]+(?:.\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|mp4|mp3|MP4|MP3))/;

        const fileName = RegExp(fileNameRegex).exec(url);

        if (fileName === null) return "File name not provided";

        return fileName.length === 0 ? fileName.toString() : fileName[0].toString();
    }
}

export class ContentItem {
    IMAGE_TYPE = "image";
    VIDEO_TYPE = "video" 

    constructor(fileName, type, resolution, previewURL, createdAt) {
        this.fileName = fileName;
        this.type = type;
        this.resolution = resolution;
        this.createdAt = createdAt;
        this.previewURL = previewURL;
    }

    isImage() {
        return this.type === this.IMAGE_TYPE;
    }

    fileName() {
        return this.fileName;
    }
    type() {
        return this.type;
    }
    resolution() {
        return this.resolution;
    }
    createdAt() {
        return this.createdAt;
    }
    previewURL() {
        return this.previewURL;
    }
}