import { setPostData } from './set-post-data.js';

export const loadPostAsync = (requestSever, postId) => (dispatch) => {
	requestSever('fetchPost', postId)
		.then((postData) => {
			dispatch(setPostData(postData.res));
		});
};
