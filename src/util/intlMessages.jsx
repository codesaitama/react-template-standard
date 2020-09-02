import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

//const InjectMassage = props => <FormattedMessage {...props} />;

const InjectMassage = props => {

    return ( <FormattedMessage {...props} /> )
}

export default injectIntl(InjectMassage, {
    withRef: false
});
