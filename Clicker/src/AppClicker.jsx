import "./AppClicker.css";
import Shop from './Shop/shop.jsx';
import Wallet from './Wallet/wallet.jsx';
import CenterGame from './MainGame/centerGame.jsx';
import { useState } from "react";

function App() {
  const [money , setMoney] = useState(0)
  const [moneyPerSecond , setMoneyPerSecond] = useState(0)
  const [moneyByClick , setMoneyByClick] = useState(1)
  const [attackDamage, setAttackDamage] = useState(10);

  return (
    <>
      <div id="game">
        <Shop setAttackDamage={setAttackDamage} attackDamage={attackDamage} money = {money} setMoney = {setMoney} setMoneyByClick = {setMoneyByClick} moneyByClick={moneyByClick} moneyPerSecond = {moneyPerSecond} setMoneyPerSecond = {setMoneyPerSecond}></Shop>
        <CenterGame attackDamage={attackDamage} money = {money} moneyByClick = {moneyByClick} setMoney={setMoney}></CenterGame>
        <Wallet money = {money} moneyPerSecond = {moneyPerSecond}></Wallet>
      </div>
    </>
  );
}

export default App;
