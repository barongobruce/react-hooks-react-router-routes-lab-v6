import {Link} from 'react-router-dom';

function MovieCard({id, title}) {
  return (
    <article>
      <h2>{title}</h2>
      {/* Link to the movie route used in the tests */}
      <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  );
}

export default MovieCard;