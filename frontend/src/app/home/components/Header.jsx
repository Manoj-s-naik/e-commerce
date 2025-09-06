import Profile from "./Profile";
function Header() {
  return (
    <div className="w-full flex justify-between items-center pt-6 px-6">
      <img src="/logo.png" alt="Logo" className="h-[5rem]" />

      <input
        type="text"
        placeholder="Search your product"
        className="w-[60%] max-w-[900px] h-[3rem] text-center rounded-xl 
        focus:outline-none border shadow-sm"
      />

      <div className="flex gap-4 h-[3rem]">
        <button className="w-[4rem] border hover:shadow-md rounded-md">
          Search
        </button>
        <button className="w-[4rem] border hover:shadow-md rounded-md flex items-center gap-2">
          <img src="/filter.svg" alt="Filter" className="h-8" />
          <p>Filter</p>
        </button>
      </div>

      <Profile />
    </div>
  );
}

export default Header;
