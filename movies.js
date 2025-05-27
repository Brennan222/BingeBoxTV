  async function searchMovies() {
    const query = document.getElementById("searchInput").value.trim();
    const apiKey = "6ba9a821";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    const posters = document.querySelectorAll(".poster");

    if (data.Response === "True") {
      const movies = data.Search.slice(0, 9); // get first 9 results

      posters.forEach((img, index) => {
        if (movies[index]) {
          const movie = movies[index];
          img.src = movie.Poster !== "N/A" ? movie.Poster : "fallback.jpg"; // optional fallback
          img.alt = movie.Title;
        } else {
          // If fewer than 9 results, hide extra posters
          img.style.display = "none";
        }
      });
    } else {
      posters.forEach(img => {
        img.style.display = "none";
      });
      alert(`No results found for "${query}".`);
    }
  }

