import dayjs from "dayjs";
import React from "react"

const JobCard = () => {
    const skills = ["JavaScript" , "ReactJS" , "NodeJS"];
    const date1 = dayjs(Date.now())
    const diffInDays = date1.diff("2023-12-29" , "day")
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3 ">
            <h1 className="text-lg font-semibold">Frontend Developer - Wolters kluwer</h1>
            <p>Full Time &#x2022; Entry Level &#x2022; Onsite</p>
            <div className="flex items-center gap-2">
                {skills.map((skill) => (
                    <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
                ))}
            </div>
        </div>
        <div className="flex items-center gap-5">
            <p className="text-gray-500">Posted {diffInDays} ago</p>
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard