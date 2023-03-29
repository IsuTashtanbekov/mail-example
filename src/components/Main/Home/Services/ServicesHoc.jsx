import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Services from "./Services";

const ServicesHoc = (props) => {
    return (
        <div>
            <Services {...props}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        services: state.Services.options
    }
}

export default compose(
    connect(mapStateToProps)
)(ServicesHoc);