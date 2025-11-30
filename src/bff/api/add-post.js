import { generateDate } from '../utils';


export const addPost = ({ imageUrl, title, content }) =>
	fetch('http://localhost:3000/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title,
			image_url: imageUrl,
			content,
			published_at: generateDate(),
		}),
	}).then((createdPost) => createdPost.json());


