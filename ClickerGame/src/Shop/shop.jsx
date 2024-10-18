import "./Shop.css";
import { useState } from "react";
import { useEffect } from "react";
import upgrade from "../Pictures/upgrade-logo.png";
import iconList from "./icon-list.png";

function shop(props) {
  const [earthClickerPrice, setEarthClickerPrice] = useState(10);
  const [campFirePrice, setCampFirePrice] = useState(10);
  const [attackPrice, setAttackPrice] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      props.setMoney((prevMoney) => prevMoney + props.moneyPerSecond);
    }, 1000); // Update color every 1000 milliseconds (1 second)
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [props.money, props.moneyPerSecond]);

  function UpgradeByClickPrice() {
    if (props.money >= earthClickerPrice) {
      props.setMoney(props.money - earthClickerPrice);
      setEarthClickerPrice(
        Math.round(earthClickerPrice + earthClickerPrice * 1.5)
      );
      props.setMoneyByClick(props.moneyByClick * 2);
    }
  }

  function UpgradePerSecondPrice() {
    if (props.money >= campFirePrice) {
      setCampFirePrice(campFirePrice * 3);
      props.setMoney(props.money - campFirePrice);
      if (props.moneyPerSecond == 0) {
        props.setMoneyPerSecond(props.moneyPerSecond + 1);
      } else props.setMoneyPerSecond(props.moneyPerSecond * 2);
      props.setForceUpdate?.();
    }
  }

  function UpgradeAttackPrice() {
    if (props.money >= attackPrice) {
      props.setAttackDamage(props.attackDamage * 2);
      props.setMoney(props.money - attackPrice);
      setAttackPrice(attackPrice * 2);
    }
  }

  function showShop(){
    var shop = document.getElementById("shop");
    if (shop.style.display === "none" || shop.style.display === "") {
      shop.style.display = "block";
    } else {
      shop.style.display = "none";
    }
  }
  

  return (
    <>
      <div onClick={showShop} id="shop-drop-menu">
        <img src={iconList} alt="icon-list" />
      </div>
      <div id="shop">
        <p style={{ fontSize: "6vh" }}>SHOP</p>
        <ul>
          <li onClick={UpgradeByClickPrice}>
            <div className="shop-left">
              <p style={{ fontSize: "2.5vh" }}>More Money!</p>
              <p>Makes your clicks 2 times as powerful</p>
            </div>
            <div className="shop-right">
              <img src={upgrade} alt="Rakieta" />
              <p>{earthClickerPrice} $</p>
            </div>
          </li>
          <li onClick={UpgradePerSecondPrice}>
            <div className="shop-left">
              <p style={{ fontSize: "2.5vh" }}>Farming Money</p>
              <p>Produces {props.moneyPerSecond}$ per second</p>
            </div>
            <div className="shop-right">
              <img src={upgrade} alt="Rakieta" />
              <p>{campFirePrice} $</p>
            </div>
          </li>
          <li onClick={UpgradeAttackPrice}>
            <div className="shop-left">
              <p style={{ fontSize: "2.5vh" }}>More Attack</p>
              <p>Current attack: {props.attackDamage} HP </p>
              <p>Makes your attack 2 times as powerful</p>
            </div>
            <div className="shop-right">
              <img src={upgrade} alt="Rakieta" />
              <p>{attackPrice} $</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default shop;
