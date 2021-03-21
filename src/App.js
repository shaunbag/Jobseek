import React from 'react';
import './App.css';
import Jobs from './Components/Jobs';
import JobSearch from './Components/JobsSearch';
import JobApi from './Util/jobApi';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    };
    this.searchJobs = this.searchJobs.bind(this);
  }

  searchJobs(keyword, location, salary) {
    JobApi.search(keyword, location, salary).then(jobs => {
      this.setState({
        jobs: jobs
      })
    });
  }

  render() { 
    return (
        <div className="App">
          <h1>Laser Guided Job Seeker</h1>
          <JobSearch searchJobs={this.searchJobs}/>
          <Jobs jobs={this.state.jobs} />         
              
        </div>
  );
}
};

export default App;
