export interface ListMovie {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

export interface ListDetailsResponse {
    created_by: string;
    description: string;
    favorite_count: number;
    id: string;
    items: ListMovie[];
    item_count: number;
    iso_639_1: string;
    name: string;
    poster_path: string | null;
}
