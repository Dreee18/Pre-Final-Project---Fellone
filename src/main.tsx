import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App.tsx'

import Card from './components/Card.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Card products={
      {
        name: "product1",
        price: 150,
        stock: 10,
        category: "category1"
      }
    } 
      />
  </StrictMode>,
)
