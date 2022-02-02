// Components
import {
  Input,
  Textarea,
  Select,
  RadioBtns,
  CheckBoxGroup,
  DatePicker,
} from './index'

// Constants
import { controls } from '../../Constants'
const { input, textarea, select, radio, checkbox, date } = controls

const FormikControl = ({ control, ...rest }: any) => {
  switch (control) {
    case input:
      return <Input {...rest} />
    case textarea:
      return <Textarea {...rest} />
    case select:
      return <Select {...rest} />
    case radio:
      return <RadioBtns {...rest} />
    case checkbox:
      return <CheckBoxGroup {...rest} />
    case date:
      return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl
