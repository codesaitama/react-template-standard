import React from "react";

const EmployeeEducationForm = props => {
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

  console.log({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    submitCount
  });

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
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="modal-body">
          <div className="form-group row">
            <div className="col-md-12">
              <label className="control-label">School</label>
              <input
                type="text"
                id="school"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label className="control-label">Start Date</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
            <div className="col-md-6">
              <label className="control-label">End Date</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label className="control-label">Qualification</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
            <div className="col-md-6">
              <label className="control-label">Core Area</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label className="control-label">Professional Title</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
            <div className="col-md-6">
              <label className="control-label">Grade</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={""}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <label className="control-label">Note</label>
              <textarea className="form-control" rows="2"></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeEducationForm;
