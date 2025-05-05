import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GoStarFill } from 'react-icons/go';
import 'react-toastify/dist/ReactToastify.css';

const TechGadgetBoxPage = ({subscription}) => {
    const {thumbnail, name, techCategory, price, frequency, description, features, ratings, reviews} = subscription;

    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [submittedReviews, setSubmittedReviews] = useState([]);

    const handleSubmit = () => {
        if (!review.trim() || !rating || rating < 1 || rating > 5) {
        toast.error('Please enter a review and a valid rating between 1 and 5.');
        return;
        }

        const newReview = {
        text: review,
        rating: Number(rating),
        };

        setSubmittedReviews([newReview, ...submittedReviews]);
        setReview('');
        setRating('');
        toast.success('Your review was added successfully!');
    };

    const renderStars = (count) => {
        return Array.from({ length: count }, (_, i) => (
        <GoStarFill key={i} className="inline text-yellow-500" />
        ));
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
        <ToastContainer />

        <h1 className='font-bold lg:text-4xl md:text-3xl text-2xl text-center mb-5'>Subscription Details</h1>

        <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden mb-6">
            <img src={thumbnail} alt="" className="w-full h-60 object-cover" />
            <div className="p-5">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-600 mb-1 font-semibold">
                Category : <span className="font-normal">{techCategory}</span>
            </p>
            <p className="text-lg font-semibold text-green-500">
                {price} <span className="text-sm font-normal text-gray-500">/ {frequency}</span>
            </p>
            <p className="text-gray-700 my-2">{description}</p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
                <span className="font-semibold">Features:</span>
                {Array.isArray(features) &&
                features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
            <div className="text-yellow-500 font-medium flex items-center gap-2">
            <span>Rating:</span>
            <span>{ratings}</span>
            <span className="flex items-center">{renderStars(ratings)}</span>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          </div>
            </div>
        </div>

        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Add a Review</h3>
            <input
            type="number"
            placeholder="Rating (1-5)"
            className="border border-gray-400 rounded-xl p-3 mb-2 w-full"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            />
            <textarea
            placeholder="Your review"
            className="border border-gray-400 rounded-xl p-3 mb-2 w-full"
            rows={3}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />
            <button
            onClick={handleSubmit}
            className="bg-gray-200 border border-gray-400 text-black hover:text-white px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            >
            Submit Review
            </button>
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-3">User Reviews</h3>
            {submittedReviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
            ) : (
            submittedReviews.map((r, i) => (
                <div key={i} className="border border-gray-300 rounded-xl p-3 mb-2 bg-gray-50">
                <p className="text-gray-800 mb-1">{r.text}</p>
                <p className="text-yellow-600 font-medium flex items-center gap-1">
                    Rating: {renderStars(r.rating)}
                </p>
                </div>
            ))
            )}
        </div>
        </div>
  );
};

export default TechGadgetBoxPage;
