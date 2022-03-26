import { useState } from 'react'

export const useFormFields = initialState => {
    const [fields, setValues] = useState(initialState)

    return [
      fields,
      event => {
        const value = event._isAMomentObject ? event : event.target.value
        const fieldName = event.target.id ? event.target.id : 'gender'
        setValues({
          ...fields,
          [fieldName]: value
        })
      },
      setValues
    ]
  }
