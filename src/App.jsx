import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import SearchBar from "./component/SearchBar/SearchBar";
import JobCard from "./component/JobCard/JobCard";
import JobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query , where , getDocs } from "firebase/firestore";
import { db } from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() =>{
    const tempJobs = []
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) =>{
      //doc.data() is never undefined for query docs snapshots
      //console.log(doc.id, "=>" , doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id
      })
    })
    setJobs(tempJobs)
  }

  useEffect(() =>{
    fetchJobs()
  },[])
  

  return (
    <>
      <Navbar />
      <Header />
      <SearchBar />
      {jobs.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </>
  )
}

export default App
