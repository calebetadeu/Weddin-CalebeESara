import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards' id="features" >
      <h1>Lista de Presentes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/present.jpg'
              text='Veja nossa Lista de Presente'
              label='Para Casa'
              link="https://www.querodecasamento.com.br/lista-de-casamento/calebeesara"
            />
            <CardItem
              src='images/nubank.png'
              text='Nos Ajude Ofertando'
              label='Pix'
              link="https://nubank.com.br/pagar/5nbfl/GUZLEPo5jA"
            />
          </ul>
          <ul className='cards__items'>
           
            
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
