import carsImage from "../assets/cars.jpeg";
import { usePostAd } from "../context/PostAdContext";

function Hero({ onSearchClick }) {
  const { openPostAd } = usePostAd();
  return (
    <section
      className="min-h-[500px] relative overflow-hidden py-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center z-0"
      style={{
        backgroundImage: `url(${carsImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-pak-dark/85 z-0"></div>

      <div>
        <div className="mx-auto px-2 flex flex-col lg:flex-row gap-8 relative z-0">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start">

              {/* Left Bracket */}
              <div className="w-[12px] h-[290px] shrink-0 mt-1 mr-3 relative">
                <div className="w-[170px] h-[12px] -bottom-52 left-0 bg-pak-green"></div>
                <div className="w-[12px] h-full left-0 top-52 bg-pak-green"></div>
                <div className="w-[170px] h-[12px] -bottom-52 left-0 bg-pak-green"></div>
              </div>

              <div className="p-5 flex flex-col gap-8">
                <h1 className="text-white text-2xl lg:text-4xl font-bold leading-tight m-0 z-10 w-80">
                  Shift Into Gear: Your Destination for Car Excellence
                </h1>

                <p className="text-white text-lg m-0">
                  Drive Your Dream: Find Your Perfect Car Today
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  {/* 🔽 SCROLL TRIGGER BUTTON */}
                  <button
                    onClick={onSearchClick}
                    className="bg-pak-green text-white border-0 px-6 py-3 rounded-md text-sm font-semibold cursor-pointer transition-colors hover:bg-[#16a34a]"
                  >
                    Search A Car
                  </button>

                  <button 
                    onClick={openPostAd}
                    className="bg-gray-800 text-white border-0 px-6 py-3 rounded-md text-sm font-semibold cursor-pointer transition-colors hover:bg-gray-900"
                  >
                    Post Advertisement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
