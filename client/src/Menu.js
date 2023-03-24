import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slide as Slide } from "react-burger-menu";
import "./Menu.css";
import Home from "./Home";

function Menu({ onSelectTopic }) {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleTopicSelect(topic) {
    setSelectedTopic(topic);
    onSelectTopic(topic);
  }
  return (
    <div>
      <Slide className="Menu">
        <Link id="label" to="/">
          Select a Quiz Topic
        </Link>
        <Link to="/history" className="menuItem" onClick={() => handleTopicSelect("History")}>
          History
        </Link>
        <Link to="/music" className="menuItem" onClick={() => handleTopicSelect("Music")}>
          Music
        </Link>
        <Link to="/scienceandnature" className="menuItem" onClick={() => handleTopicSelect("Science &amp; Nature")}>
          Science &amp; Nature
        </Link>
        <Link to="/generalknowledge" className="menuItem" onClick={() => handleTopicSelect("General Knowledge")}>
          General Knowledge
        </Link>
        <Link to="/geography" className="menuItem" onClick={() => handleTopicSelect("Geography")}>
          Geography
        </Link>
      </Slide>
    </div>
  );
}

export default Menu;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//  return (
//   <div>
//   <label> Choose a quiz topic</label>
//   <Link to="/game">test</Link>
//   <ul>
//     {menuItems.map((item, index) => (
//       <li key={index}>
//         <button onClick={() => onMenuSelect(item.value)}>{item.label}</button>
//       </li>
//     ))}
//   </ul>
// </div>
// );
// }
//
//
//
//
//
//
//
// broken code from trying to create a burger menu
// import React, { useState } from "react";

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//      onClick={() => setIsMenuOpen(!isMenuOpen)}>

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import React from "react";
// import "./Menu.css";

// function Menu({ onMenuSelect }) {
//   const menuItems = [
//array of objects, containing label to be displayed and API value//
//     { label: "History", value: "https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple" },
//     { label: "Music", value: "https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple" },
//     { label: "Science & Nature", value: "https://opentdb.com/api.php?amount=50&category=17&difficulty=easy&type=multiple" },
//     { label: "General Knowledge", value: "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple" },
//     { label: "Geography", value: "https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple" },
//   ];

//   return (
//     <div>
//menu header//
//       <label> Choose a quiz topic</label>
//       <ul>
//         {menuItems.map((item, index) => (
//           <li key={index}>
//calls the function 'onMenuSelect' when one of the items are clicked//
//             <button onClick={() => onMenuSelect(item.value)}>{item.label}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
