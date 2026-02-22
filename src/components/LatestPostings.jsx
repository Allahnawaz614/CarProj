import jaguar from '../assets/jaguar-f-type074.webp'
import mini from '../assets/mini copper.jfif'
import lexus from '../assets/lexus.jfif'
import mustang from '../assets/mustang-convertible-100960546_l.webp'
const cars = [
  {
    id: 1,
    name: "Jaguar F-Type Convertible",
    img: jaguar,
    desc: "The Jaguar F-Type Convertible is a high-performance sports car that combines stunning design with exhilarating performance. With its powerful engine options and dynamic handling, the F-Type Convertible offers a thrilling driving experience. The sleek convertible top allows you to enjoy the open air and the roar of the engine. Inside, the F-Type features a luxurious cabin with premium materials and advanced technology, providing both comfort and connectivity."
  },
  {
    id: 2,
    name: "Ford Mustang Convertible",
    img: mustang,
    desc: "The Ford Mustang Convertible is a classic American muscle car that offers a blend of power, style, and comfort. With its bold design and powerful engine options, the Mustang Convertible delivers an exhilarating driving experience. The convertible top allows you to enjoy the wind in your hair and the open road. Inside, the Mustang features a modern and comfortable cabin with advanced technology and premium materials."
  },
  {
    id: 3,
    name: "Ford Mustang Convertible",
    img: mini,
    desc: "The Ford Mustang Convertible is a classic American muscle car that offers a blend of power, style, and comfort. With its bold design and powerful engine options, the Mustang Convertible delivers an exhilarating driving experience. The convertible top allows you to enjoy the wind in your hair and the open road. Inside, the Mustang features a modern and comfortable cabin with advanced technology and premium materials."
  },
  {
    id: 4,
    name: "Ford Mustang Convertible",
    img: lexus,
    desc: "The Ford Mustang Convertible is a classic American muscle car that offers a blend of power, style, and comfort. With its bold design and powerful engine options, the Mustang Convertible delivers an exhilarating driving experience. The convertible top allows you to enjoy the wind in your hair and the open road. Inside, the Mustang features a modern and comfortable cabin with advanced technology and premium materials."
  },

];
function LatestPostings() {
  return (
    <>
      <h1 className='text-green-500 font-bold text-3xl py-9 text-center'>
        Latest Postings
      </h1>
      <section className="flex justify-center mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-6 max-w-7xl">

          {cars.map((car) => (
            <div
              key={car.id}
              className="w-full md:w-[48%] bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {car.desc}
                </p>

                <button className="bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition">
                  More Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    </>
  )
}

export default LatestPostings;