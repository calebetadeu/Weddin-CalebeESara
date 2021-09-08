import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { ProgressBar } from '../ProgressBar';


function Cards() {
  return (
    <div className='cards' id="features" >
           <div className="container">
         <div className="section-title">
            <div className="row">
              <div className="col-xs-8 col-md-2">  
            <div className="ListPos" >
            <h2>  Presentes</h2></div>
           </div>
           </div>
          </div>
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
              value={ `R$ ${3000} ` }
            />  <ProgressBar max_value={3000} value={0} />
            </div>
          </ul>
          <ul className='cards__items'>
           
            
          
          </ul>
        </div>
      </div>
      </div>
      
      </div>
    
  );
}

export default Cards;
