// Dependencies
import { Formik, Form } from 'formik'
import * as yup from 'yup'

// Components
import {
  FormikControl,
  dropDownOptions,
  radioOptions,
  checkBoxOptions,
} from './index'

// Constants
import { controls } from '../../Constants'
const { input, textarea, select, radio, checkbox, date } = controls

const initialValues = {
  email: '',
  description: '',
  selectOptions: '',
  redioOptions: '',
  checkBoxOption: [],
  initDate: null,
}
const valitationSchema = yup.object({
  email: yup.string().required('Please enter your email'),
  description: yup.string().required('Required'),
  selectOptions: yup.string().required('Required'),
  redioOptions: yup.string().required('Required'),
  checkBoxOption: yup.array().min(1, 'Required'),
  initDate: yup.date().required('Required').nullable(),
})

const onSubmit = (values: any) => {
  console.log('Form Data', values)
}

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={valitationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control={input}
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control={textarea}
              label="Select a topic"
              name="description"
            />
            <FormikControl
              control={select}
              label="Description"
              name="selectOptions"
              options={dropDownOptions}
            />
            <FormikControl
              control={radio}
              label="Radio Topic"
              name="redioOptions"
              options={radioOptions}
            />
            <FormikControl
              control={checkbox}
              label="Check Box Topics"
              name="checkBoxOption"
              options={checkBoxOptions}
            />
            <FormikControl
              control={date}
              label="Pick a date."
              name="initDate"
            />
            <button type="submit">Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikContainer
