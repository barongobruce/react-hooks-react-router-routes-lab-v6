import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import fallbackData from "../../db.json";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then(setDirectors)
      .catch(() => setDirectors(fallbackData.directors || []));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <div key={director.id}>
            <h2>{director.name}</h2>
            <p>Number of Movies: {director.movies.length}</p>
            <ul>
              {director.movies.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export default Directors;
