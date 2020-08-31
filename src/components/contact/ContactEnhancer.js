import {
    withFormik
} from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        name: Yup.string().required('This field is required'),
        mobile: Yup.string().required('This field is required'),
        email: Yup.string().required('This Field is required'),
    }),
    mapPropsToValues: props => ({
        name: props.data ? props.data.name: '',
        mobile: props.data ? props.data.mobile: '',
        email:props.data ? props.data.email: '',
    }),
    handleSubmit: (values) => {},
    displayName: 'contactForm',
    enableReinitialize:true,
});

export default formikEnhancer;