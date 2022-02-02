// Dependiencies
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'

// Components
import { TextError } from './index'

const DatePicker = ({ label, name, options, ...rest }: any) => {
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ form, field }: any) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
export default DatePicker
