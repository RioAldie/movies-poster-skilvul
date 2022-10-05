let movies = [];
const container = document.getElementById('container');

const containerComponent = () => {
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
const getDatasMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=10badd151dbb806d6e12dd2bf5f10f9d&sort_by=popularity.desc&page=1'
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))
    .finally((data) => {
      return data;
    });
  console.log(data.results);
  movies = data.results;
  containerComponent();
};
getDatasMovies();
