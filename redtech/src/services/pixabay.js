export class Pixabay {
    SERVICE_URL = "https://pixabay.com/api/";

    getImages(imageContent) {
        return [
            new ContentItem("file1.png", "image", "172x12", "12/12/2010"),
            new ContentItem("file2.png", "image", "12x112", "16/1/2011"),
            new ContentItem("asdf.png", "image", "162x112", "12/6/1990"),
            new ContentItem("picture.png", "image", "12x212", "12/12/2010"),
            new ContentItem("fiasdf1.png", "image", "122x12", "12/12/2010"),
            new ContentItem("image.pasg", "image", "1642x1281", "2/1/2015"),
            new ContentItem("other.png", "image", "152x1522", "3/12/2010")
        ]
    }

    getVideos(imageContent) {
        return [
            new ContentItem("file1.png", "video", "122x122", "12/12/2010"),
            new ContentItem("file1.png", "video", "155x155", "2/2/2000"),
            new ContentItem("asdf.png", "video", "1112x1022", "1/6/1990"),
            new ContentItem("file1.png", "video", "1162x2120", "12/12/2010"),
            new ContentItem("fiasdf1.png", "video", "1742x1422", "12/12/2010"),
            new ContentItem("file1.pasg", "video", "122x122", "2/1/2015"),
            new ContentItem("filsadf.png", "video", "1242x1232", "3/12/2010")
        ]
    }
}

class ContentItem {
    constructor(file_name, type, resolution, created_at) {
        this.file_name = file_name;
        this.type = type;
        this.resolution = resolution;
        this.created_at = created_at;
    }

    file_name() {
        return this.file_name;
    }
    type() {
        return this.type;
    }
    resolution() {
        return this.resolution
    }
    created_at() {
        return this.created_at
    }
}