import React from 'react'
// Dependencies
import { Field, ErrorMessage } from 'formik'

// Components
import { TextError } from './index'

const CheckBoxGroup = ({ label, name, options, ...rest }: any) => {
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option: any) => (
            <React.Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ))
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CheckBoxGroup
