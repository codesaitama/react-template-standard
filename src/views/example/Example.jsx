import React from "react";
import { roelogo2 } from 'helper/constant'

const Example = () => { 
    return (
        <div className="text-center" style={{ height: '100%',marginTop: '10%' }}>
            <div>
                <img src={roelogo2} alt="logo"/>
            </div>
            <div className="display-info-class mt-10">
                Menu Examples
            </div>
        </div>
    )
}

export default Example