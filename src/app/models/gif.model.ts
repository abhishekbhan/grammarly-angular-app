export class Gif {
    type: string;
    id: string;
    url: string;
    images: Images;
}

export class Images {
    original: Image
}

export class Image {
    url: string;
}