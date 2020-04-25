import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	renderActions = () => {
		const { id } = this.props.match.params;

		return(
			<div>
				<button 
					onClick={() => this.props.deleteStream(id)} 
					className='ui center negative button'
				>
					Delete
				</button>
				<Link className='ui button' to='/'>
					Cancel
				</Link>
			</div>
		)
	}

	renderContent = () => {
		return this.props.stream ? `Are you sure you want to delete the following stream: ${this.props.stream.title}?` : 'Are you sure you want to delete this stream?';
	}

	render() {	
		return(
			<Modal 
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		)
	}
}

const mapStateToprops = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
	fetchStream, deleteStream
}

export default connect(mapStateToprops, mapDispatchToProps)(StreamDelete);