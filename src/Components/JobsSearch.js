import React from 'react';

class JobSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            location: '',
            salary: 0
        };

        this.handleKeyword = this.handleKeyword.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleSalary = this.handleSalary.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
    }
     
    

    handleKeyword(event) {    
        this.setState({ keyword: event.target.value });
      }
      
    handleSalary(event) {    
        this.setState({ salary: event.target.value });
      }
    
    handleLocation(event) {    
        this.setState({ location: event.target.value });
      }

    handleSearch(event) {
        this.props.searchJobs(this.state.keyword, this.state.location, this.state.salary)
        console.log(this.state.keyword, this.state.location, this.state.salary)
        event.preventDefault();
    }

      render() { 
    return (
        <div className="Search">
            <div className="containerSearch">
                <input className="input" onChange={this.handleKeyword} placeholder="Enter Job Keyword Here.." ></input>
                <input className="input" onChange={this.handleLocation} placeholder="Enter Job Location here...."></input>
                <div className="salaryRange">
                    <label  for="salary">Choose a Minimum Salary:</label>
                    <input className="input" onChange={this.handleSalary} type="range" id="salary" name="salary" min="18,000" max="70000"></input>
                </div>
                <button onClick={this.handleSearch}>SUBMIT</button>              
            </div>
        </div>
    )
}};

export default JobSearch;