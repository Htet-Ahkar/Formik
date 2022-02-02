// Dependencies
import { Field, ErrorMessage } from 'formik'

// Components
import { TextError } from './index'

const Textarea = ({ label, name, ...rest }: any) => {
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
