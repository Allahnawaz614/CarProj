import suv from '../assets/suv.avif'
import sedan from '../assets/sedan.jfif'
import crossover from '../assets/crossover.jfif'
import Hatchback from '../assets/Hatchback.jfif'
import wegon from '../assets/wegon.jpg'
import sports from '../assets/sportsCar.jfif'
import hybride from '../assets/hybride.jfif'
import convertible from '../assets/covertible.webp'
import { useNavigation } from '../context/NavigationContext'

function Catogaries(){
  const { navigateToCategory } = useNavigation();
    return(
        <>

        <section class=" py-10 flex flex-col items-center">
            <div>
                <h1 className='text-green-500 font-bold text-3xl py-9'>
                    Explore by Catogaries
                </h1>
            </div>
  <div class="flex flex-wrap justify-evenly gap-6">

   
    <div 
      onClick={() => navigateToCategory("SUV")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={suv}
        alt="SUV"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">SUV</h3>
        <p class="text-sm text-green-600">11 Cars</p>
      </div>
    </div>

    <div 
      onClick={() => navigateToCategory("Sedan")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={sedan}
        alt="Sedan"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Sedan</h3>
        <p class="text-sm text-green-600">14 Cars</p>
      </div>
    </div>

    
    <div 
      onClick={() => navigateToCategory("Crossover")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={crossover}
        alt="Crossover"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Crossover</h3>
        <p class="text-sm text-green-600">14 Cars</p>
      </div>
    </div>

    <div 
      onClick={() => navigateToCategory("Hatchback")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={Hatchback}
        alt="Hatchback"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Hatchback</h3>
        <p class="text-sm text-green-600">10 Cars</p>
      </div>
    </div>
<div 
      onClick={() => navigateToCategory("Wegon")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={wegon}
        alt="SUV"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Wegon</h3>
        <p class="text-sm text-green-600">11 Cars</p>
      </div>
    </div>

    <div 
      onClick={() => navigateToCategory("Sports")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={sports}
        alt="Sedan"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Sports</h3>
        <p class="text-sm text-green-600">14 Cars</p>
      </div>
    </div>

    
    <div 
      onClick={() => navigateToCategory("Hybride")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={hybride}
        alt="Crossover"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Hybride</h3>
        <p class="text-sm text-green-600">14 Cars</p>
      </div>
    </div>

    <div 
      onClick={() => navigateToCategory("Convertible")}
      class="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={convertible}
        alt="Hatchback"
        class="w-full h-40 object-cover rounded-t-xl"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">Convertible</h3>
        <p class="text-sm text-green-600">10 Cars</p>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Catogaries