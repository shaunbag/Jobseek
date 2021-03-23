import React from 'react';
import DOMPurify from 'dompurify';
import Logo from './Logo.jpg';

const Jobs = (props) => {
    const htmlPart = props.job.description;
 
    return (
        
        <div className="Jobs">
            <h2>{props.job.company}</h2>
            <h3>Job description:</h3>
            <p dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(htmlPart)} } ></p>
            <p>Job Location: {props.job.location.display_name}</p>
            <p>Min Salary £ {props.job.minSalary}</p>
            <a href={props.job.url}>See More</a>
            <p>Jobs by <a href="http://www.adzuna.co.uk"><img src={Logo} alt="img not found" width="119px"></img></a></p>
        </div>
    )
}

export default Jobs;