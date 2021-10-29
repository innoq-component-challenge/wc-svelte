<!--
	import classNames from 'classnames';

export let Simple = ({type, id, label, name, value, error}) => {
	return <div class="field-group">
		<label for={id} class="form-label">{label}</label>
		<input type={type} id={id} name={name} value={value} class={classNames('form-control', error ? 'is-invalid' : '')} />
		{error ? <p class="invalid-feedback">{error}</p> : ''}
	</div>
}

export let Model = ({type, object, objectName, errors, name, field, id, I18n, ErrorI18n}) => {
	let error = errors[field];
	if (error && ErrorI18n) {
		error = ErrorI18n(field, error, {context: {object, objectName}}) || error;
	}
	return Simple({
		type, 
		id: id || field,
		name: name || field,
		label: I18n ? I18n(field, {context: {object, objectName}}) : field,
		value: object[field],
		error
	})
}

export default {Simple, Model}
-->