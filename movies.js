async function searchMovies() {
  const query = document.getElementById("searchInput").value.trim();
  const apiKey = "6ba9a821";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;
  
  const spinner = document.getElementById("loadingSpinner");
  spinner.style.display = "block";

  try {
    const response = await fetch(url);
    const data = await response.json();
    const posters = document.querySelectorAll(".poster");

    posters.forEach(img => {
      img.style.display = "none";
    });

    if (data.Response === "True") {
      document.getElementById("searchLabel").textContent = `Search for: "${query}"`;

      const movies = data.Search.filter(movie => movie.Poster !== "N/A").slice(0, 9);

      movies.forEach((movie, index) => {
        if (posters[index]) {
          posters[index].src = movie.Poster;
          posters[index].alt = movie.Title;
          posters[index].style.display = "inline-block";
        }
      });
    } else {
      alert(`No results found for "${query}".`);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    spinner.style.display = "none";
  }
}