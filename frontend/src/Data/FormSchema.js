import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const FormSchema = yup.object().shape({
    firstName: yup.string()
        .required('First Name is required'),

    lastName: yup.string()
        .required('Last Name is required'),

    email: yup.string()
        .email('Email is not valid')
        .required('A valid email is required'),

    phone: yup.string()
        .required('A valid phone number is required')
        .matches(phoneRegExp, 'Phone number is not valid'),

    message: yup.string()
        .required('Your message is required')
        .min(10, 'Not enough characters')
        .max(250, 'Too many characters'),
})

export default FormSchema
