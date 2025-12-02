export class RemoveMovieFromListDto {
    media_id: number;

    constructor(media_id: number) {
        this.media_id = media_id;
    }
}
