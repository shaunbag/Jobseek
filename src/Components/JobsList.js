import React from 'react';
import Jobs from './Jobs'


const JobsList = (props) => {
    return (
        <div>
            {
            props.jobs.map(job => {
                return <Jobs key={job.id} job={job} />
            })
            }
        </div>
    )
}

export default JobsList;