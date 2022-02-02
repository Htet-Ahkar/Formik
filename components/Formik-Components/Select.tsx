// Dependencies
import { Field, ErrorMessage } from 'formik'

// Components
import { TextError } from './index'

const Select = ({ label, name, options, ...rest }: any) => {
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
