function Categories() {
  const categories = [
    { name: 'Cars', icon: '🚗' },
    { name: 'Motorcycles', icon: '🏍️' },
    { name: 'Auto Parts', icon: '⚙️' },
    { name: 'Trucks', icon: '🚚' },
    { name: 'Buses', icon: '🚌' },
    { name: 'Vans', icon: '🚐' },
  ]

  return (
    <section className="bg-pak-light-green py-16">
      <div className="max-w-[1200px] mx-auto px-12">
        <h2 className="text-pak-green text-4xl font-bold mb-12 text-center">
          Explore By Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 text-center cursor-pointer transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-gray-800 text-xl font-semibold m-0">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
