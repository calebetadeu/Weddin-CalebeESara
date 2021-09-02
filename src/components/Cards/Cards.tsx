import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { ProgressBar } from '../ProgressBar';

function Cards() {
  return (
    <div className='cards' id="features" >
      <h1>Lista de Presentes</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <div>
            <CardItem
              src='images/present.jpg'
              text='Veja nossa Lista de Presente'
              value="Clique aqui para acessar"
              label='Para Casa'
              link="https://www.querodecasamento.com.br/lista-de-casamento/calebeesara"
              
            />   </div>
            
            <div>
            <CardItem
              src='images/campos.jpg'
              text='Nos Ajude com a Lua de mel'
              label='Lua de mel'
              link="https://nubank.com.br/pagar/5nbfl/GUZLEPo5jA"
              value={ `R$ ${2000} ` }
            />  <ProgressBar max_value={2000} value={0} />
            </div>
          </ul>
          <ul className='cards__items'>
           
            
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
