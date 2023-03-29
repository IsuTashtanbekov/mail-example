import React from 'react';
import Marks from "./Marks";
import {compose} from "redux";
import {connect} from "react-redux";
import Header from "../Header/Header";

const MarksHoc = (props) => {
    console.log(props)
    return (
        <div>
            <Header/>
            <Marks {...props}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        marks: state.Marks.marks
    }
}

export default compose(
    connect(mapStateToProps)
)(MarksHoc);