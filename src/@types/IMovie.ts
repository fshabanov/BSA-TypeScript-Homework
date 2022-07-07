enum Category {
    Popular = 'popular',
    TopRated = 'top_rated',
    Upcoming = 'upcoming',
}

interface IMovieOriginal {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IMovieMapped {
    title: string;
    imageUrl: string;
    body: string;
    id: number;
    date: string;
    horizontalImageUrl: string;
}

interface IResponseData {
    results: IMovieOriginal[];
    page: number;
    total_pages: number;
    total_results: number;
}

interface IResponseError {
    status_code: number;
    status_message: string;
    success: boolean;
}

export {
    Category,
    IMovieMapped,
    IMovieOriginal,
    IResponseData,
    IResponseError,
};
