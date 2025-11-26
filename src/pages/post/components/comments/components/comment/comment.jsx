import styled from 'styled-components';
import { Icon } from '../../../../../../components/index.js';

const CommentContainer = ({ className, id, author, content, publishedAt }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className='information-panel'>
					<div className='author'>
						<Icon id='fa-user-circle-o'
									margin='0 10px 0 0'
									size='18px'
									onClick={() => {
									}} />
						{author}
					</div>
					<div className='published-at'>
						<Icon id='fa-calendar-o'
									margin='0 10px 0 0'
									size='18px'
									onClick={() => {
									}} />
						{publishedAt}
					</div>
				</div>
				<div className='comment-text'>{content}</div>
			</div>
			<Icon id='fa-trash-o'
						margin='0 0 0 10px'
						size='18px'
						onClick={() => {
						}} />

		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	& .comment {
		border: 1px solid #000;
		width: 550px;
		padding: 5px 10px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
