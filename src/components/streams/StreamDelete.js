import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {

	const actions = (
		<div>
			<button className='ui center negative button'>Delete</button>
			<button className='ui button'>Cancel</button>
		</div>
	);

	return(
		<div>
			StreamDelete
			<Modal 
				title="Delete Stream"
				content="Are you sure?"
				actions={actions}
				onDismiss={() => history.push('/')}
			/>
		</div>
	)
}

export default StreamDelete;