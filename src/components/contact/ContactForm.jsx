import React from "react";
import enhancer from "components/contact/ContactEnhancer";
import { compose } from "redux";
import Button from "components/button/Button";

const ContactForm = props => {
    const handleSubmit = e => {
        e.preventDefault();
        let { values, isValid, handleSubmit } = props;

        if (isValid) {
            props.handleFormSubmit(values);
        }
        handleSubmit();
    };

    const {
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
        submitCount
    } = props;

    const Error = props => {
        const field1 = props.field;
        if ((errors[field1] && touched[field1]) || submitCount > 0) {
            return (
                <span className={props.class ? props.class : "error-msg"}>
                    {errors[field1]}
                </span>
            );
        } else {
            return <span />;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Name"
                    />
                    <Error field="name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control react-form-input"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                    />
                    <Error field="email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        className="form-control react-form-input"
                        id="mobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                        placeholder="Phone Number"
                    />
                    <Error field="mobile" />
                </div>

                <div className="text-center">
                    <Button type="submit" className="c-btn c-dark">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default compose(enhancer)(ContactForm);
