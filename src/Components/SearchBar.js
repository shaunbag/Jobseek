import React from 'react';

const JobSearch = (props) => {


    
    return (
        <div className="Search">
           <form className="form">
                <input className="input" onChange={props.keyword} type="text" placeholder="Enter Job Keyword Here.." ></input>
                <input className="input" onChange={props.location} type="text" placeholder="Enter Job Location here...."></input>
                <div className="salaryRange">
                    <label  for="salary">Choose a Minimum Salary:</label>
                    <input className="input" onChange={props.salary} type="range" id="salary" name="salary" min="18,000" max="70000"></input>
                </div>
                
            </form>    
            
        </div>
    )
};

export default JobSearch;