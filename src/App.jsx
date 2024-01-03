import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import SearchBar from "./component/SearchBar/SearchBar";
import JobCard from "./component/JobCard/JobCard";
import JobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query , getDocs, orderBy , where } from "firebase/firestore";
import { db } from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);
  const [customeSearch , setCustomSearch] = useState(false)

  const fetchJobs = async() =>{
    setCustomSearch(false)
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn" ,"desc"))
    const req = await getDocs(q);
    req.forEach((job) =>{
      //doc.data() is never undefined for query docs snapshots
      //console.log(doc.id, "=>" , doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    })
    setJobs(tempJobs)
  }

  const fetchJobsCustom = async(jobCriteria) =>{
    setCustomSearch(true)
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where ("type" , "==" , jobCriteria.type) , where ("title" , "==" , jobCriteria.title) , where ("location" , "==" , jobCriteria.location) , where ("experience" , "==" , jobCriteria.experience) , orderBy("postedOn" ,"desc"))
    const req = await getDocs(q);
    req.forEach((job) =>{
      //doc.data() is never undefined for query docs snapshots
      //console.log(doc.id, "=>" , doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
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
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customeSearch && 
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear</p>
        </button>
      }
      {jobs.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </>
  )
}

export default App
