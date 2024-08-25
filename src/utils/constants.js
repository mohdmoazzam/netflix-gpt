export const NETFLIX_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg";

export const PROFILE_PIC =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp";

export const TMDB_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const DEFAULT_POSTER_URL =
  "https://media.comicbook.com/files/img/default-movie.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};

export const TMDB_SEARCH_MOVIE_URI =
  "https://api.themoviedb.org/3/search/movie?query=movie_title";
