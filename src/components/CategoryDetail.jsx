import { useEffect } from "react";
import { useNavigation } from "../context/NavigationContext";
import suv from '../assets/suv.avif';
import sedan from '../assets/sedan.jfif';
import crossover from '../assets/crossover.jfif';
import Hatchback from '../assets/Hatchback.jfif';
import wegon from '../assets/wegon.jpg';
import sports from '../assets/sportsCar.jfif';
import hybride from '../assets/hybride.jfif';
import convertible from '../assets/covertible.webp';
import jaguar from '../assets/jaguar-f-type074.webp';
import mini from '../assets/mini copper.jfif';
import lexus from '../assets/lexus.jfif';
import mustang from '../assets/mustang-convertible-100960546_l.webp';
import carsImage from '../assets/cars.jpeg';

// Category images mapping
const categoryImages = {
  SUV: suv,
  Sedan: sedan,
  Crossover: crossover,
  Hatchback: Hatchback,
  Wegon: wegon,
  Sports: sports,
  Hybride: hybride,
  Convertible: convertible,
};

// Sample car data for each category
const categoryCars = {
  SUV: [
    {
      id: 1,
      name: "Toyota RAV4",
      img: suv,
      desc: "The Toyota RAV4 is a compact SUV that offers a perfect combination of style, performance, and advanced technology. With its sleek and modern design, the RAV4 stands out on the road while providing exceptional comfort and reliability."
    },
    {
      id: 2,
      name: "Honda CR-V",
      img: suv,
      desc: "The Honda CR-V is a versatile SUV that combines practicality with style. With its spacious interior and advanced safety features, the CR-V is perfect for families and adventure seekers alike."
    },
    {
      id: 3,
      name: "Ford Explorer",
      img: suv,
      desc: "The Ford Explorer is a full-size SUV that offers powerful performance and impressive towing capacity. With its three-row seating and advanced technology, the Explorer is ideal for large families."
    },
    {
      id: 4,
      name: "Jeep Grand Cherokee",
      img: suv,
      desc: "The Jeep Grand Cherokee is a luxury SUV that combines off-road capability with premium comfort. With its powerful engine options and advanced 4x4 systems, the Grand Cherokee can handle any terrain."
    }
  ],
  Sedan: [
    {
      id: 1,
      name: "Toyota Camry",
      img: sedan,
      desc: "The Toyota Camry is a midsize sedan that offers exceptional reliability and fuel efficiency. With its comfortable interior and advanced safety features, the Camry is perfect for daily commuting and long trips."
    },
    {
      id: 2,
      name: "Honda Accord",
      img: sedan,
      desc: "The Honda Accord is a stylish sedan that combines performance with efficiency. With its spacious cabin and advanced technology, the Accord provides a premium driving experience."
    },
    {
      id: 3,
      name: "Ford Focus",
      img: sedan,
      desc: "The Ford Focus is a compact sedan that offers excellent fuel economy and agile handling. With its modern design and advanced features, the Focus is perfect for city driving."
    },
    {
      id: 4,
      name: "Hyundai Elantra",
      img: sedan,
      desc: "The Hyundai Elantra is a compact sedan that offers great value and modern styling. With its comfortable ride and comprehensive warranty, the Elantra is an excellent choice for budget-conscious buyers."
    }
  ],
  Hatchback: [
    {
      id: 1,
      name: "Ford Focus",
      img: Hatchback,
      desc: "The Ford Focus is a compact hatchback that offers a perfect combination of style, performance, and advanced technology. With its sleek and modern design, the Focus stands out on the road while providing exceptional comfort and reliability."
    },
    {
      id: 2,
      name: "Kia Forte",
      img: Hatchback,
      desc: "The Kia Forte is a stylish hatchback that combines practicality with modern design. With its spacious interior and advanced features, the Forte is perfect for urban driving."
    },
    {
      id: 3,
      name: "Hyundai Elantra",
      img: sedan,
      desc: "The Hyundai Elantra is a compact hatchback that offers great value and fuel efficiency. With its comfortable ride and modern technology, the Elantra is an excellent choice for daily commuting."
    },
    {
      id: 4,
      name: "Toyota Corolla",
      img: Hatchback,
      desc: "The Toyota Corolla is a reliable hatchback that offers exceptional fuel economy and advanced safety features. With its spacious interior and modern design, the Corolla is perfect for families."
    }
  ],
  Crossover: [
    {
      id: 1,
      name: "Mazda CX-5",
      img: crossover,
      desc: "The Mazda CX-5 is a compact crossover that offers sporty handling and premium styling. With its upscale interior and advanced technology, the CX-5 provides a refined driving experience."
    },
    {
      id: 2,
      name: "Subaru Outback",
      img: crossover,
      desc: "The Subaru Outback is a versatile crossover that combines car-like handling with SUV capability. With its standard all-wheel drive and spacious interior, the Outback is perfect for adventure."
    },
    {
      id: 3,
      name: "Nissan Rogue",
      img: crossover,
      desc: "The Nissan Rogue is a compact crossover that offers excellent fuel economy and a comfortable ride. With its advanced safety features and spacious cabin, the Rogue is ideal for families."
    },
    {
      id: 4,
      name: "Chevrolet Equinox",
      img: crossover,
      desc: "The Chevrolet Equinox is a compact crossover that offers a smooth ride and efficient engines. With its user-friendly technology and comfortable interior, the Equinox is perfect for daily driving."
    }
  ],
  Wegon: [
    {
      id: 1,
      name: "Mercedes-Benz G-Class",
      img: wegon,
      desc: "The Mercedes-Benz G-Class is a luxury wagon that combines rugged capability with premium comfort. With its iconic design and powerful performance, the G-Class is perfect for those who want both style and substance."
    },
    {
      id: 2,
      name: "BMW 3 Series Wagon",
      img: wegon,
      desc: "The BMW 3 Series Wagon offers sporty performance with practical cargo space. With its premium interior and advanced technology, this wagon provides a perfect balance of luxury and utility."
    },
    {
      id: 3,
      name: "Audi A4 Allroad",
      img: wegon,
      desc: "The Audi A4 Allroad is a versatile wagon that combines luxury with all-weather capability. With its raised suspension and advanced quattro system, the Allroad can handle any road condition."
    },
    {
      id: 4,
      name: "Volvo V90",
      img: wegon,
      desc: "The Volvo V90 is a premium wagon that offers exceptional safety and Scandinavian design. With its spacious interior and advanced driver assistance features, the V90 is perfect for long journeys."
    }
  ],
  Sports: [
    {
      id: 1,
      name: "Honda Civic Type R",
      img: sports,
      desc: "The Honda Civic Type R is a high-performance sports car that delivers exhilarating acceleration and precise handling. With its track-tuned suspension and powerful turbocharged engine, the Type R offers an unmatched driving experience."
    },
    {
      id: 2,
      name: "Toyota Supra",
      img: sports,
      desc: "The Toyota Supra is a legendary sports car that combines classic styling with modern performance. With its powerful inline-six engine and rear-wheel drive, the Supra delivers pure driving excitement."
    },
    {
      id: 3,
      name: "Nissan 370Z",
      img: sports,
      desc: "The Nissan 370Z is a pure sports car that focuses on performance and driver engagement. With its V6 engine and precise handling, the 370Z offers an authentic sports car experience."
    },
    {
      id: 4,
      name: "Mazda MX-5 Miata",
      img: sports,
      desc: "The Mazda MX-5 Miata is a lightweight roadster that emphasizes fun and agility. With its perfect balance and responsive handling, the Miata provides pure driving joy on any road."
    }
  ],
  Hybride: [
    {
      id: 1,
      name: "Toyota Prius",
      img: hybride,
      desc: "The Toyota Prius is a hybrid vehicle that offers exceptional fuel economy and eco-friendly performance. With its advanced hybrid system and spacious interior, the Prius is perfect for environmentally conscious drivers."
    },
    {
      id: 2,
      name: "Honda Insight",
      img: hybride,
      desc: "The Honda Insight is a stylish hybrid sedan that combines efficiency with modern design. With its advanced hybrid technology and comfortable ride, the Insight offers excellent value."
    },
    {
      id: 3,
      name: "Ford Fusion Hybrid",
      img: hybride,
      desc: "The Ford Fusion Hybrid is a midsize sedan that offers impressive fuel economy without sacrificing performance. With its comfortable interior and advanced features, the Fusion Hybrid is perfect for daily commuting."
    },
    {
      id: 4,
      name: "Hyundai Ioniq Hybrid",
      img: hybride,
      desc: "The Hyundai Ioniq Hybrid is a compact hybrid that offers excellent fuel efficiency and modern styling. With its comprehensive warranty and advanced safety features, the Ioniq is an excellent choice."
    }
  ],
  Convertible: [
    {
      id: 1,
      name: "Jaguar F-Type Convertible",
      img: jaguar,
      desc: "The Jaguar F-Type Convertible is a high-performance sports car that combines stunning design with exhilarating performance. With its powerful engine options and dynamic handling, the F-Type Convertible offers a thrilling driving experience."
    },
    {
      id: 2,
      name: "Ford Mustang Convertible",
      img: mustang,
      desc: "The Ford Mustang Convertible is a classic American muscle car that offers a blend of power, style, and comfort. With its bold design and powerful engine options, the Mustang Convertible delivers an exhilarating driving experience."
    },
    {
      id: 3,
      name: "BMW 4 Series Convertible",
      img: convertible,
      desc: "The BMW 4 Series Convertible is a luxury sports car that combines premium comfort with dynamic performance. With its retractable hardtop and powerful engines, the 4 Series offers the perfect open-air driving experience."
    },
    {
      id: 4,
      name: "Mercedes-Benz SL-Class",
      img: convertible,
      desc: "The Mercedes-Benz SL-Class is a luxury convertible that offers exceptional comfort and performance. With its retractable hardtop and advanced technology, the SL-Class provides a premium driving experience."
    }
  ]
};

function CategoryDetail({ category, onBack }) {
  const { navigateToCarDetails } = useNavigation();
  const cars = categoryCars[category] || [];
  const heroImage = categoryImages[category] || carsImage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-[400px] relative overflow-hidden py-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-pak-dark/85"></div>

        <div className="relative z-10 mx-auto px-4 text-center">
          <div className="flex items-start justify-center">
            {/* Left Bracket */}
            <div className="w-[12px] h-[200px] shrink-0 mt-1 mr-3 relative">
              <div className="w-[200px] h-[12px] -bottom-40 left-0 bg-pak-green"></div>
              <div className="w-[12px] h-full left-0 top-40 bg-pak-green"></div>
              <div className="w-[200px] h-[12px] -bottom-40 left-0 bg-pak-green"></div>
            </div>

            <div className="p-5 flex flex-col gap-4">
              <h1 className="text-white text-3xl lg:text-5xl font-bold leading-tight m-0">
                Advertisement Categories
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Category Heading */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-pak-green text-4xl font-bold text-center">
            {category}
          </h2>
        </div>
      </div>

      {/* Car Listings */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-6 flex-col">
            {cars.map((car) => (
              <div
                key={car.id}
                className="w-full md:w-[full] bg-white rounded-lg shadow-md hover:shadow-lg transition border border-pak-green/20 overflow-hidden flex "
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {car.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1 font-semibold">
                    Conquer Every Terrain, {category}: Your Path to Adventure!
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {car.desc}
                  </p>

                  <button 
                    onClick={() => navigateToCarDetails(car.id, category)}
                    className="bg-pak-green text-white text-sm px-6 py-2 rounded-md hover:bg-[#16a34a] transition-colors font-medium"
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryDetail;

