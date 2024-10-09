import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductsProvider } from './context/productContext.jsx'
import { FilterProvider } from './context/filterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProductsProvider>
   <FilterProvider>
    <CartProvider>
    <App />
    </CartProvider>
   </FilterProvider>
   </ProductsProvider>
  </StrictMode>,
)
