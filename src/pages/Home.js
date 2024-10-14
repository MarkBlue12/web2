import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

// components
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the products')
        setProducts(null)
      }
      if (data) {
        setProducts(data)
        setFetchError(null)
      }
    }

    fetchProducts()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {products && (
        <div className="products">
          {/* order-by buttons */}
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home