
const API_KEY = 'process.env.REACT_APP_API_KEY'; // Replace with your actual API key
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // Genre ID 28 for Action
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Genre ID 35 for Comedy
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // Genre ID 27 for Horror
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // Genre ID 10749 for Romance
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Genre ID 99 for Documentaries
    fetchTvShows: `/discover/tv?api_key=${API_KEY}&language=en-US`
};


export default requests

