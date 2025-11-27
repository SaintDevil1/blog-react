import { setPostData } from './set-post-data.js';

export const savePostAsync = (requestSever, newPostData) => (dispatch) =>
	requestSever('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostData(updatedPost.res))
	})


