
import Opponent from './Opponents/staryopponet.jsx'
import Opponent2 from './Opponents/opponent2.jsx'
import Healt from './Healt/healt.jsx'
import "./centerGame.css";

function centerGame(props) {
  

  return (
    <>
      <div id="mainGame">
        <Opponent2 attackDamage={props.attackDamage} money = {props.money} moneyByClick = {props.moneyByClick} setMoney={props.setMoney} ></Opponent2>
        {/* <Healt healtNumber = {props.healtNumber}></Healt> */}
      </div>
      
    </>
  );
}

export default centerGame;
