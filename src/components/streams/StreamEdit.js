import React from 'react'
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import { Spinner } from '../Spinner';

class StreamEdit extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id)
	}

	render() {		
		if(!this.props.stream) {
			return <Spinner />
		}

		return(
			<div>
				{this.props.stream.title}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToProps = {
	fetchStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);