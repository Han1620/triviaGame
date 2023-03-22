import React from "react";
import "./Menu.css";

function Menu({ onMenuSelect }) {
  const menuItems = [
    { label: "History", value: "https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple" },
    { label: "Music", value: "https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple" },
    { label: "Science & Nature", value: "https://opentdb.com/api.php?amount=50&category=17&difficulty=easy&type=multiple" },
    { label: "General Knowledge", value: "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple" },
    { label: "Geography", value: "https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple" },
  ];

  return (
    <div>
      <label> Choose a quiz topic</label>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <button onClick={() => onMenuSelect(item.value)}>{item.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

// broken code from trying to create a burger menu
// import React, { useState } from "react";

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//      onClick={() => setIsMenuOpen(!isMenuOpen)}>

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
