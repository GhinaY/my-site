import React from "react";
import './Section.scss';

export default ({ id, content }) => (
    <div className='section' id={id}>
        {content}
    </div>
);