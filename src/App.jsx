import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';  
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';  
import CardDetail from './components/CardDetail';  
import Cards from './components/Cards';
import './styles/Cards.css';

function App() {
  const cardData = [
    { id: 1, image: '/assets/mascara1.jpg', title: 'Máscara 1', description: 'Nuestra máscara más vendida' },
    { id: 2, image: '/assets/mascara2.jpg', title: 'Máscara 2', description: 'nuestra segunda mascara mas vendida' },
    { id: 3, image: '/assets/watch-2354665_1280.jpg', title: 'Reloj', description: 'Elegante y funcional' },
  ];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="mi tienda" />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/card/:id" element={<CardDetail />} />
          </Routes>
          <div className="cards-container">
            {cardData.map(card => (
              <Cards key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
