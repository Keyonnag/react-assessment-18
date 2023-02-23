import React from 'react';
import { useState, useEffect } from 'react';

const Comments = () => {
	// Insturction:
	// Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments.
	// display the comment body on the screen
	// add event listeners to each comment body that when clicked will simply console.log the comment id.

	// you will need to use the useEffect hook. Do this in async / await syntax.
	const [comments, setComments] = useState([]);

	useEffect(() => {
		async function fetchComments() {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/comments'
			);
			const data = await response.json();
			setComments(data);
		}
		fetchComments();
	}, []);

	const handleClick = (id) => {
		console.log(`You have clicked on comment ID: ${id}`);
	};

	return (
		// Replace this with your code.
		<div>
			<h1>Comments component</h1>
			{comments.map((comment) => (
				<p
					key={comment.id}
					onClick={() => handleClick(comment.id)}
					style={{ marginBottom: '1rem' }} // added a margin to bottom just because it was hard to see which comment i was clicking on.
				>
					{comment.body}
				</p>
			))}
		</div>
	);
};

export default Comments;
