import {useState} from 'react';
import './App.css';
import Jobs from './Components/Jobs';
import JobSearch from './Components/SearchBar';

function App() {

  const [jobState, setJobState] = useState({
    keyword: '',
    salary:  0 ,
    location: '',
    description: ''
  });

  const handleKeyword = (e) => {    
    setJobState({
      keyword: e.target.value
      
    })
  };
  
  const handleSalary = (e) => {    
    setJobState({
      salary: e.target.value      
    })
  }; 

  const handleLocation = (e) => {    
    setJobState({
      location: e.target.value
    })
  }; 


  return (
    <div className="App">
      <h1>Laser Guided Job Seeker</h1>
      <JobSearch keyword={handleKeyword} salary={handleSalary} location={handleLocation}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      <Jobs  keyword={jobState.keyword} salary={jobState.salary} location={jobState.location} description={jobState.description}/>
      
           
    </div>
  );
}

export default App;
