export interface AccountList {
    id: number;
    name: string;
    description: string;
    favorite_count: number;
    item_count: number;
    iso_639_1: string;
    list_type: string;
    poster_path: string | null;
}

export interface AccountListsResponse {
    page: number;
    results: AccountList[];
    total_pages: number;
    total_results: number;
}
