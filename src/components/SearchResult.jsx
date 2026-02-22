import jaguar from '../assets/jaguar-f-type074.webp'
const cars = [
  {
    id: 1,
    name: "Jaguar F-Type Convertible",
    img: jaguar,
    desc: "The Jaguar F-Type Convertible is a high-performance sports car that combines stunning design with exhilarating performance. With its powerful engine options and dynamic handling, the F-Type Convertible offers a thrilling driving experience. The sleek convertible top allows you to enjoy the open air and the roar of the engine. Inside, the F-Type features a luxurious cabin with premium materials and advanced technology, providing both comfort and connectivity."
  }
]
function SearchResult(){
    return(
        <>
        <h1 className='text-green-500 font-bold text-3xl py-9 text-center'>
        Search Result
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
export default SearchResult