import { setPostData } from './set-post-data.js';

export const loadPostAsync = (requestSever, postId) => (dispatch) => {
	return requestSever('fetchPost', postId)
		.then((postData) => {
			if (postData.res) {
				dispatch(setPostData(postData.res));
			}

			return postData;
		});
};
