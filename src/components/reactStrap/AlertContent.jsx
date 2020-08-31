import React from 'react';
import { Alert } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Alert className="c-outline-success">
        <div className="alert-heading">Well done!</div>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>
    </div>
  );
};

export default Example;
