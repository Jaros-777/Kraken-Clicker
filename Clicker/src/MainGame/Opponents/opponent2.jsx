import React, { useEffect, useState } from "react";
import "./opponent.css";
import Healt100 from "../Healt/Healt100.png";
import Healt75 from "../Healt/Healt75.png";
import Healt50 from "../Healt/Healt50.png";
import Healt25 from "../Healt/Healt25.png";
import Healt0 from "../Healt/Healt0.png";
import Turtle from "../Opponents/OpponentsImage/warior-turtle.png";
import Wolf from "../Opponents/OpponentsImage/warior-wolf.png";
import Octopus from "../Opponents/OpponentsImage/warior-octopus.png";
import Clear from "../Opponents/OpponentsImage/clear.png";
import backGroundOpponent from "../BackGround/new-island.png";

function Opponent(props) {
  const wariors = [
    ["Turtle", Turtle, 100],
    ["Wolf", Wolf, 300],
    ["Octopus", Octopus, 1000],
  ];

  // Initial states
  const [warriorIndex, setWarriorIndex] = useState(0);
  const [wariorHealt, setWariorHealt] = useState(wariors[0][2]);
  const [healtNumber, setHealtNumber] = useState(wariors[0][2]);
  const [currentHealtImg, setCurrentHealtImg] = useState(Healt100);

  const [opponentName, setOpponentName] = useState(wariors[warriorIndex][0]);
  const [opponentImg, setOpponentImg] = useState(wariors[warriorIndex][1]);

  useEffect(() => {
    if (healtNumber <= 0) {
      if (warriorIndex < wariors.length - 1) {
        changeOpponent();
      } else {
        // Handle end of opponents, e.g., show a victory message or reset
        setOpponentName("All opponents defeated!");
        setHealtNumber(0);
        setCurrentHealtImg(Healt0);
        setOpponentImg(Clear);
      }
    } else if (healtNumber <= wariorHealt * 0.25) {
      setCurrentHealtImg(Healt25);
    } else if (healtNumber <= wariorHealt * 0.5) {
      setCurrentHealtImg(Healt50);
    } else if (healtNumber <= wariorHealt * 0.75) {
      setCurrentHealtImg(Healt75);
    } else {
      setCurrentHealtImg(Healt100);
    }
  }, [healtNumber, wariorHealt, warriorIndex]);

  function changeOpponent() {
    const newIndex = warriorIndex + 1;
    setWarriorIndex(newIndex);
    setWariorHealt(wariors[newIndex][2]);
    setHealtNumber(wariors[newIndex][2]);
    setOpponentName(wariors[warriorIndex+1][0]);
    setOpponentImg(wariors[warriorIndex+1][1]);
  }

  function attack() {
    if(opponentImg != Clear)
    {
      props.setMoney(props.money + props.moneyByClick);
      setHealtNumber((prev) => prev - props.attackDamage);
    }
  }


  return (
    <>
      <div id="background-container">
        <img id="background-image" src={backGroundOpponent} alt="" />
        <img
          id="opponent"
          onClick={attack}
          src={opponentImg}
          alt={wariors[warriorIndex][0]}
        />
      </div>
      <div id="healt-field">
      <p>{opponentName}</p>
        <p>{healtNumber} HP</p>
        <img id="healt-belt" src={currentHealtImg} alt="Health" />
      </div>
    </>
  );
}

export default Opponent;
