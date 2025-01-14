import Dice1 from "./images/Dice-1.png";
import Dice2 from "./images/Dice-2.png";
import Dice3 from "./images/Dice-3.png";
import Dice4 from "./images/Dice-4.png";
import Dice5 from "./images/Dice-5.png";
import Dice6 from "./images/Dice-6.png";
import Dice7 from "./images/Dice-7.png";
import Dice8 from "./images/Dice-8.png";

export default function Status() {
  // const [useColor, setUseColor] = useState();

  function changeNFT(color) {
    const rows = ["row1", "row2", "row3", "row4"];

    for (var i = 0; i < 4; i++) {
      var list = document
        .getElementById(rows[i])
        .getElementsByClassName("element");
      var listLength = list.length;
      for (var j = 0; j < listLength; j++) {
        list[j].classList.add(color);
      }
    }
  }

  return (
    <div className="board-screen-child" id="status">
      <div className="element">
        <h2>My Assets </h2>
        <div className="userNFT">
          <img onClick={() => changeNFT("platinum")} src={Dice1} />
          <img onClick={() => changeNFT("sapphire")} src={Dice2} />
          <img onClick={() => changeNFT("ruby")} src={Dice3} />
          <img onClick={() => changeNFT("emerald")} src={Dice4} />
          <img onClick={() => changeNFT("amethyst")} src={Dice5} />
          <img onClick={() => changeNFT("obsidian")} src={Dice6} />
          <img onClick={() => changeNFT("citrine")} src={Dice7} />
          <img onClick={() => changeNFT("diamond")} src={Dice8} />
        </div>
      </div>
    </div>
  );
}
