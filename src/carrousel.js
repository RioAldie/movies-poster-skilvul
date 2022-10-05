let movies = [];
const carousel = document.getElementById('carousel');

const carouselComponent = () => {
  movies.map((movie, i) => {
    if (i < 10) {
      return (carousel.innerHTML += `<div class="carousel-item ">
      <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}" class="d-block w-100" alt="...">
    </div>`);
    }
  });
};
const getCarouselDatas = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=10badd151dbb806d6e12dd2bf5f10f9d&sort_by=popularity.desc&page=3'
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))
    .finally((data) => {
      return data;
    });
  movies = data.results;
  carouselComponent();
};
getCarouselDatas();
