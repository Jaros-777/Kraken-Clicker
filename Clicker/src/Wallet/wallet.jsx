import './wallet.css'
import { useState } from 'react';

function wallet(props) {

    return (
      <>
          <div id="wallet">
            <p>Money</p>
            <p>{props.money} $</p>
            <p>{props.moneyPerSecond} $ per second</p>
          </div>
      </>
    );
  }
  
  export default wallet;