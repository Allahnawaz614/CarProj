import { forwardRef } from "react";

const SearchBar = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="bg-pak-green py-6 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          <input 
            type="text" 
            className="px-4 py-4 border-0 rounded-md text-base bg-white text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Keyword"
          />

          <select
            className="px-4 py-4 border-0 rounded-md text-base bg-white text-gray-500 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
            }}
          >
            <option value="" className="text-gray-400">Select Category</option>
            <option>Cars</option>
            <option>Motorcycles</option>
            <option>Trucks</option>
          </select>

          <select
            className="px-4 py-4 border-0 rounded-md text-base bg-white text-gray-500 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-white/50 pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
            }}
          >
            <option value="" className="text-gray-400">Select City Area</option>
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>

          <button className="bg-gray-800 text-white border-0 px-8 py-4 rounded-md text-base font-semibold cursor-pointer flex items-center gap-2 transition-colors hover:bg-gray-900 whitespace-nowrap">
            <span className="text-xl">🔍</span>
            Search
          </button>

        </div>
      </div>
    </section>
  );
});

export default SearchBar;
