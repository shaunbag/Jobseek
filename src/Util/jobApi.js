const apiKey = process.env.REACT_APP_ADZUNA_API_KEY;
const apiId = process.env.REACT_APP_ADZUNA_APP_ID;

const JobApi = {
    async search(keyword, location, salary) {   
        if (!apiKey || !apiId) {
            throw new Error('Adzuna API credentials are missing. Set REACT_APP_ADZUNA_APP_ID and REACT_APP_ADZUNA_API_KEY in your environment.');
        }

        const url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${apiId}&app_key=${apiKey}`
        const response = await fetch(url + `&results_per_page=20&what=${keyword}&where=${location}&salary_min=${salary}&content-type=application/json`)
            const jsonResponse = await response.json(); 
            //console.log(jsonResponse)
            if(jsonResponse.results){
                console.log(jsonResponse.results)
                return jsonResponse.results.map(job => {
                    return {
                        id: job.id,
                        company: job.company.display_name,
                        keyword: job.title,
                        location: job.location,
                        minSalary: job.salary_min,
                        description: job.description,
                        url: job.redirect_url
                };
                
            });
        }          
    }
};

 
// Working URL https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=8d293d1c&app_key=c7439ed253913b961024c8be582682f8&results_per_page=20&what=$programmer&where=Norwich&salary_min=30000&content-type=application/json

export default JobApi;
