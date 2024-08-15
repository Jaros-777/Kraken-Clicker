
import Opponent from './Opponents/staryopponet.jsx'
import Opponent from './Opponents/opponent.jsx'
import Healt from './Healt/healt.jsx'
import "./centerGame.css";

function centerGame(props) {
  

  return (
    <>
      <div id="mainGame">
        <Opponent attackDamage={props.attackDamage} money = {props.money} moneyByClick = {props.moneyByClick} setMoney={props.setMoney} ></Opponent>
      </div>
      
    </>
  );
}

export default centerGame;
