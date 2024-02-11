import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import ProductStock from './pages/ProductStock.jsx'
import ProductImages from './pages/ProductImages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path='about' element= {<About />} />
          <Route path='products' element= {<Products />} />
          <Route path='products/:id' element= {<ProductDetail />}>
            <Route index element={ <ProductStock/>} />
            <Route path='images' element={ <ProductImages/> } />
          </Route>
        </Route>
      </Routes>    
    </BrowserRouter>
  </React.StrictMode>,
)
