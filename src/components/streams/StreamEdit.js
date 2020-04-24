import React from 'react'
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import Spinner from '../Spinner';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues)
	}

	render() {		
		if(!this.props.stream) {
			return <Spinner />
		}

		return(
			<div>
				<div>
					<h3>Edit Stream</h3>
					<StreamForm 
						initialValues={{ title: this.props.stream.title, description: this.props.stream.description}}
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
	fetchStream,
	editStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);