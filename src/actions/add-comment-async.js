import { setPostData } from './set-post-data.js';

export const addCommentAsync = (requestSever, userId, postId, content) => (dispatch) => {
	requestSever('addPostComment', userId, postId, content)
		.then((postData) => {
			dispatch(setPostData(postData.res));
		});
};


