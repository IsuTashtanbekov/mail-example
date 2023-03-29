import React from 'react';
import Partners from "./Partners";
import {compose} from "redux";
import {connect} from "react-redux";


const PartnersHoc = (props) => {
    console.log(props)
    return (
        <>
            <Partners {...props}/>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        partners: state.Partners
    }
}

export default compose(
    connect(mapStateToProps)
)(PartnersHoc);