// Dependencies
import { Field, ErrorMessage } from 'formik'
import React from 'react'

// Components
import { TextError } from './index'

const RadioBtns = ({ label, name, options, ...rest }: any) => {
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option: any) => (
            <React.Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
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

export default RadioBtns
