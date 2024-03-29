const THEMOVIEDB_API = {
  key: 'df3c5710c44169cdf3776559c77f511a',
  paths: {
    posterBase: 'http://image.tmdb.org/t/p/w185/',
    details: id => `https://api.themoviedb.org/3/tv/${id}`,
    list: 'https://api.themoviedb.org/3/discover/tv'
  },
  defaultLanguage: 'en',
  defaultTimezone: 'Poland%2FWarsaw',
  sortingOptions: {
    popularity: 'popularity.desc',
    ranking: 'vote_average.desc'
  },
  pageSize: 20
}

THEMOVIEDB_API.defaultSorting = THEMOVIEDB_API.sortingOptions.popularity

export default THEMOVIEDB_API
