import React from 'react';


const Jobs = (props) => {
    return (
        <div className="Jobs">
            <h2>Job Title: {props.keyword}</h2>
            <p>Job Description: {props.description}</p>
            <p>£{props.salary} Starting salary</p>
            <p>Job Location: {props.location}</p>
        </div>
    )
}

export default Jobs;