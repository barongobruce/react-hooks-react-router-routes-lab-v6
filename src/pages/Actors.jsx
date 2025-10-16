import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";     
import fallbackData from "../../db.json";                             
function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then(setActors)
      .catch(() => setActors(fallbackData.actors || []));
  }, []);                                 
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actors Page</h1>      
      </header>
      <main>
        {/* Actor info here! */}
        {actors.map((actor) => (
          <div key={actor.id}>
            <h2>{actor.name}</h2>
            <p>Age: {actor.age}</p>
            <p>Number of Movies: {actor.movies.length}</p>
            <ul>
              {actor.movies.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        ))}         
      </main>
    </>
  );
};

export default Actors;
