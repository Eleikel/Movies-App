const apiKey = "445f73284afcd4cc0a960250b4252005";
const baseUrl = `https://api.themoviedb.org/3`;

// const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

// const getPopularMovie = async () => {
//   try {
//     let res = await fetch(
//       `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
//     );
//     res = await res.json();
//     return res.results; // ojo aqui
//   } catch (error) {
//     console.log("Error requesting");
//   }
// };

const getPopularMovies = (page) => {
  return fetch(
    `${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
  )
    .then((res) => res.json())
    .then((res) => res.results)

    .catch((error) => console.error("Error: " + error));
};

// const getPopularMoviesTotalPage = () => {
//   return fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`)
//     .then((res) => res.json())
//     .then((res) => res.total_pages)
//     .catch((error) => console.error("Error: " + error));
// };
// return fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`);

// https://api.themoviedb.org/3/movie/960704?api_key=445f73284afcd4cc0a960250b4252005

const getPopularMovie = (id) => {
  return fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.error("Error: " + error));
};

//Get Characters
const getCast = (id) => {
  return fetch(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  )
    .then((res) => res.json())
    .then((res) => res.cast)
    .catch((error) => console.error("Error: " + error));
};

const getMoviePagination = (id) => {
  return fetch(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  )
    .then((res) => res.json())
    .then((res) => res.cast)
    .catch((error) => console.error("Error: " + error));
};

export default {
  getPopularMovies,
  getPopularMovie,
  getCast,
  getMoviePagination,
  // getPopularMoviesTotalPage,
  // totalPages,
};
