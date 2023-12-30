import React from "react"

const SearchBar = () => {
  return (
    <div className="flex gap-5 my-10 justify-center px-10">
      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>Job Role</option>
        <option value="full stack developer">Full Stack Developer</option>
        <option value="frontend developer">Frontend  Developer</option>
        <option value="backend developer">Backend Developer</option>
        <option value="ux designer">UX Designer</option>
        <option value="data science">Data science</option>
        <option value="hr manager">HR Manager</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>Job Type</option>
        <option value="full time">Full Time</option>
        <option value="part time">Part Time</option>
        <option value="contract">Contract</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>Location</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
        <option value="hybrid">Hybrid</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>Experience</option>
        <option value="intern">Intern</option>
        <option value="entry level">Entry Level</option>
        <option value="mid level">Mid Level</option>
        <option value="senior level">Senior Level</option>
      </select>

      <button className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md">Search</button>
    </div>
  )
}

export default SearchBar
