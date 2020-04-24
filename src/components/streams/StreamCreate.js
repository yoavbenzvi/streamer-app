import React from 'react'
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

	renderError = ({ error, touched }) => {
		if (touched && error) {
			return(
				<div className='ui error message'> 
					<div className='header'>
						{error}
					</div>
				</div>
			)
		}
	}

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
	renderInput = ({ input, label, meta }) => {
		return(
			<div className={`field ${meta.error && meta.touched ? 'error' : null}`}>
				<label>
					{label}
				</label>
				<input {...input} autoComplete='off'/>
				{this.renderError(meta)}
			</div>
		)
	}

	onSubmit = (formValues) => {
		console.log(formValues)
	}

	render() {	
		return(
			<form 
				onSubmit={this.props.handleSubmit(this.onSubmit)} 
				className='ui error form'>
				<Field 
					name='title' 
					component={this.renderInput} 
					label="Enter Title"/>
				<Field 
					name='description' 
					component={this.renderInput} 
					label="Enter Description"/>
				<button 
					className='ui button primary'>
					Submit
				</button>
			</form>
		)
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'Please enter a title'
	}

	if (!formValues.description) {
		errors.description = 'Please enter a description'
	}

	return errors;
}

export default reduxForm({
	form: 'streamCreate',
	validate
})(StreamCreate);