import React from 'react'
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

	//1. - the hard way
	// renderInput = (formProps) => <input 
	// 	onChange={formProps.input.onChange} 
	// 	value={formProps.input.value}
	// />

	//2. - the easy way
	// renderInput = (formProps) => <input {...formProps.input}/>

	//3. - the smart way (destructuring)
	// renderInput = ({ input }) => <input {...input}/>

	//4. - conditional - passing props to Field component
	renderInput = ({ input, label }) => {
		return(
			<div>
				<label>
					{label}
				</label>
				<input {...input}/>
			</div>
		)
	}

	render() {	
		console.log(this.props)
		return(
			<form className='ui form'>
				<Field name='title' component={this.renderInput} label="Enter Title"/>
				<Field name='description' component={this.renderInput} label="Enter Description"/>
			</form>
		)
	}
}

export default reduxForm({
	form: 'streamCreate'
})(StreamCreate);