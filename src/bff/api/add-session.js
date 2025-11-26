export const addSession = (hash, user) =>
	fetch('http://localhost:3000/sessions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			hash: hash,
			user: user,
		}),
	});
