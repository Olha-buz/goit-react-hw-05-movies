import { fetchReviews } from 'api/api';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReviews(movieId)
            .then(results => setReviews(results))
            .catch(error => {
                console.log(error.message);
                setReviews([]);
            })
    }, [movieId]);

    return (
        <div>
            {reviews.length > 0 && (
                <ul>
                    {reviews.map(review => 
                        <li key={review.id}>
                            <h3>Author: {review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    )}
                </ul>
            )}
            {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
        </div>
    )
};

export default Reviews