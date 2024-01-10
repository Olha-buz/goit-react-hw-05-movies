import { fetchCast } from "api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchCast(movieId)
            .then(credits => setCast(credits.cast))
            .catch(error => console.log(error.message))
    }, [movieId]);

    return (
        <ul>
            {cast.map(({ id, profile_path, actor, character }) => (
                <li key={id}>
                    <img src={`{https://image.tmdb.org/t/p/w300${profile_path}`} alt={actor} width='120' />
                    <div>
                        <p>Actor: {actor}</p>
                        <p>Character: {character}</p>
                    </div>
                </li>
            ))};

        </ul>
    )
};

