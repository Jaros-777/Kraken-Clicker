import Healt100 from "../Healt/Healt100.png";
import Healt75 from "../Healt/Healt75.png";
import Healt50 from "../Healt/Healt50.png";
import Healt25 from "../Healt/Healt25.png";
import Healt0 from "../Healt/Healt0.png";
import "../Healt/Healt.css";
import { useEffect } from "react";

function healt(props) {
  var currentHealt = Healt100

  useEffect(()=>{
    console.log("Change Healt")
  },[props.healtNumber])
  
  return (
    <>
      <div id="healt-field">
        <p>{props.healtNumber} HP </p>
        <img id="healt-belt" src={currentHealt} alt="Healt" />
      </div>
    </>
  );
}

export default healt;
