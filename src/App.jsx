import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import SearchBar from "./component/SearchBar/SearchBar";
import JobCard from "./component/JobCard/JobCard";
import JobData from "./JobDummyData";

function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <SearchBar />
      {JobData.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </>
  )
}

export default App
