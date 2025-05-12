const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key

function getMovie() {
  const movie = document.getElementById('movie').value;
  if (!movie) return alert('Please enter a movie title.');

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movie}`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        const movieData = data.results[0];
        document.getElementById('result').innerHTML = `
          <div class="movie-card">
            <h2>${movieData.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${movieData.poster_path}" alt="${movieData.title} Poster">
            <p><strong>Release Date:</strong> ${movieData.release_date}</p>
            <p><strong>Rating:</strong> ${movieData.vote_average}/10</p>
            <p>${movieData.overview}</p>
          </div>
        `;
      } else {
        document.getElementById('result').innerHTML = 'Movie not found.';
      }
    })
    .catch(() => {
      document.getElementById('result').innerHTML = 'Error fetching data.';
    });
}
