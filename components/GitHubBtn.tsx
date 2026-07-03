const GitHubBtn = () => {
  return (
    <button className="bg-white hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-full mt-6 min-w-[130px]">
        <a href="https://github.com/kenizhere" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
    </button>
  )
}
// target="_blank" rel="noopener noreferrer" is added to the anchor tag 
// to ensure that the link opens in a new tab and follows security best practices.
export default GitHubBtn