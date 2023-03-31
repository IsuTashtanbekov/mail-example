import React from 'react';
import {useParams} from "react-router-dom";

const StampsComponent = () => {
    const params = useParams()
    return (
        <div>
            Работает
        </div>
    );
};

export default StampsComponent;