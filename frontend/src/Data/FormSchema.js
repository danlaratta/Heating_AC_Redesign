import * as yup from 'yup'

const FormSchema = yup.object().shape({
    firstName: yup.string()
        .required('First Name is required'),

    lastName: yup.string()
        .required('Last Name is required'),

    email: yup.string()
        .email()
        .required('Email is required'),

    phone: yup.string()
        .matches(new RegExp('[0-9]{7}'))
        .required('Phone number is required')
})

export default FormSchema
