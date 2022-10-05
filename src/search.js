const buttonSearch = document.getElementById('btn-search');
let queryLocal = localStorage.getItem('query');

const handleSearch = () => {
  let query = document.getElementById('inputUser').value;
  if (query.length === 0) {
    return localStorage.setItem('query', 'a');
  }
  return localStorage.setItem('query', query);
};
buttonSearch.addEventListener('click', () => {
  handleSearch();
});

let movies = [];
const container = document.getElementById('container');

const containerComponent = (movies) => {
  movies.map((movie, i) => {
    return (container.innerHTML += `<div class="card mt-5 bg-dark text-light" style="width: 24rem;">
      <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-row justify-content-between">
        <div>
            <h5 class="card-title">${movie.title}</h5>
            <p class="h6">${movie.release_date}</p>
        </div>
         <p class="h6 text-warning">${movie.vote_average}</p>
      </div>
    </div>`);
  });
};
// judul, tanggal rilis, dan rating
const getMoviesBySearch = async (query) => {
  document.getElementById(
    'user-search'
  ).innerText = `Your Search: ${query}`;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=10badd151dbb806d6e12dd2bf5f10f9d&query=${query}&page=1`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))
    .finally((data) => {
      return data;
    });
  movies = data.results;
  containerComponent(movies);
};
queryLocal != null
  ? getMoviesBySearch(queryLocal)
  : console.log('kosong');
