import React, {useState, useEffect} from 'react'
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      let response = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
      );
      setProducts(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-[100rem] lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-1">
          {products.map((product) => (
            <div key={product.id} className="group relative border p-5 hover:bg-slate-100">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={product.images}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
