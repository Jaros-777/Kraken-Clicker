import "./opponent.css";
import Healt100 from "../Healt/Healt100.png";
import Healt75 from "../Healt/Healt75.png";
import Healt50 from "../Healt/Healt50.png";
import Healt25 from "../Healt/Healt25.png";
import Healt0 from "../Healt/Healt0.png";
import Planeta from "../Opponents/OpponentsImage/Ziemia.png";
import { useEffect } from "react";
import { useState } from "react";

function opponent(props) {
  var wariors = [
    ["Earth", Planeta, 200],
    ["Wenus", Planeta, 400],
    ["Nowa", Planeta, 1000],
  ];
  var wariorPicture = wariors[0][1];

  //cale zdrowie
  const [wariorHealt, setWariorHealt] = useState(wariors[0][2]);
  //obecne zdrowie
  const [healtNumber, setHealtNumber] = useState(wariorHealt);
  const [currentHealtImg, setCurrentHealtImg] = useState(Healt100);
  const [wariorName, setWariorName] = useState(wariors[0][0]);
  const [warriorNameCounter, setWarrioNameCounter] = useState(1);

  useEffect(() => {
    if (healtNumber <= wariorHealt * 0.75) {
      setCurrentHealtImg(Healt75);
    }
    if (healtNumber <= wariorHealt * 0.5) {
      setCurrentHealtImg(Healt50);
    }
    if (healtNumber <= wariorHealt * 0.25) {
      setCurrentHealtImg(Healt25);
    }
    if (healtNumber == 0) {
      setCurrentHealtImg(Healt0);
    }
    if (healtNumber < 0) {
      console.log(warriorNameCounter);
      console.log(wariors.length + 1);
      console.log(warriorNameCounter < wariors.length + 1);
      //console.log(1 < 3);
      if (warriorNameCounter < wariors.length + 1) {
        changeOponent();
      }
    }
  }, [healtNumber]);

  function changeOponent() {
    const newIndex = wariorName + 1;
    setWariorName(wariors[newIndex][0]);
    setWariorHealt(wariors[warriorNameCounter][2]);
    setHealtNumber(wariorHealt);
    setWarrioNameCounter(warriorNameCounter + 1);
  }

  function attack() {
    props.setMoney(props.money + props.moneyByClick);
    setHealtNumber(healtNumber - props.attackDamage);
  }

  return (
    <>
        <img id="opponent" onClick={attack} src={wariorPicture} alt="Planeta" />
      <p>{wariorName} </p>

      <div id="healt-field">
        <p>{healtNumber} HP </p>
        <img id="healt-belt" src={currentHealtImg} alt="Healt" />
      </div>
    </>
  );
}

export default opponent;
