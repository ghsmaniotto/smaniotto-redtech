import { ContentItem } from "../models/ContentItem";

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

            return this.sortContentByName(
                images.map((image) => this.buildContentItemFromImage(image))
            );
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
            
            return this.sortContentByName(
                videos.map((video) => this.buildContentItemFromVideo(video))
            );
        } catch(e) {
            return Error("Not possible to fetch videos");
        }
    }

    buildContentItemFromVideo(video) {
        const smallVideo = video["videos"]["small"];
        const fileName = this.getFileNameFromUrl(smallVideo["url"]);
        
        return new ContentItem(
            this.formatVideoFileName(fileName),
            "video",
            this.getResolutionFromVideo(smallVideo),
            smallVideo["url"],
            this.getCreatedAtFromUrl(video["userImageURL"])
        )
    }

    buildContentItemFromImage(image) {
        const fileName = this.getFileNameFromUrl(image["previewURL"]);
        return new ContentItem(
            this.removeIdFromImageName(fileName),
            "image",
            this.getResolutionFromImage(image),
            image["previewURL"],
            this.getCreatedAtFromUrl(image["userImageURL"])
        )
    }

    sortContentByName(array=[]) {
        return array.sort((a, b) => {
            return a.fileName.toLowerCase() < b.fileName.toLowerCase() ? -1 : 1;
        });
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

        const fileName = url.match(fileNameRegex);

        if (fileName === null) return "File name not provided";

        return fileName[0].toString();
    }

    removeIdFromImageName(fileName=""){
        return fileName.replace(/-\d*_\d*/, '');
    }

    formatVideoFileName(fileName=""){
        const fileNameWithSpaces = fileName.replaceAll(/%20/g, ' ');
        return fileNameWithSpaces.replace(/ - [\d]*/, '');
    }
}
