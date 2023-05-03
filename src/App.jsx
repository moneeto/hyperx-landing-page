import './App.css'
import { Nav } from './components/nav/Nav.jsx'
import { Welcome } from './components/welcome/Welcome.jsx'
import { NewProducts } from './components/new-products/NewProducts.jsx'
import { Categories } from './components/categories/Categories.jsx'
import { Models } from './components/models/Models.jsx'
import { Product } from './components/product/Product.jsx'
import { DayOffer } from './components/day-offer/DayOffer.jsx'

import mousePulsefire from './media/pulsefire.png'
import ramMemory from './media/memoriaram.png'

function App() {

  return (
    <div className="App">
      <Nav />
      <Welcome />
      <NewProducts />
      <Categories />
      <Models />
      <Product />
      <DayOffer 
      title="HyperX Pulsefire"
      paragraph="Gaming mouse designed to garantize you the softly experience of the DPI"
      img={mousePulsefire}
      id="dayOffer1-section"
      fontColor={{color: 'black'}}
      number="1"
      price="$299"
      />
      
      <DayOffer 
      title="HyperX Fury"
      paragraph="RAM Memory ready to optimizate your experience"
      img={ramMemory}
      id="dayOffer2-section"
      fontColor={{color: 'white'}}
      number="2"
      price="$59"
      />
    </div>
  )
}

export default App;
