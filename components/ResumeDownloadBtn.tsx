import React from 'react'

const ResumeDownloadBtn = () => {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <a href="/resume.pdf" download>
        Download Resume
      </a>
    </button>
  )
}

export default ResumeDownloadBtn