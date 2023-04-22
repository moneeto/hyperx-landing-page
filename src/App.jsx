import './App.css'
import { Nav } from './components/nav/Nav.jsx'
import { Welcome } from './components/welcome/Welcome.jsx'
import { NewProducts } from './components/new-products/NewProducts.jsx'
import { Categories } from './components/categories/Categories.jsx'
import { Models } from './components/models/Models.jsx'
import { Product } from './components/product/Product.jsx'

function App() {

  return (
    <div className="App">
      <Nav />
      <Welcome />
      <NewProducts />
      <Categories />
      <Models />
      <Product />
    </div>
  )
}

export default App;
