import React from "react";
import "./App.css";
import Header from "./Header.js";
import Content from "./Content.js";
import Clock from "./Clock";
import Container from "./Container.js";
import "./styles.css";                      //L09


const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg",
    },
    comments: [{ from: "Ari", text: "Me too!" }],
  },
  {
    timestamp: new Date().getTime(),
    text: "Played Golf at Meridian",
    user: {
      id: 2,
      name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg",
    },
    comments: [{ from: "Nate", text: "I wish I was there!" }],
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <Header title="Koty" />
            <Header title="Profile" />
            <Header title="Settings" />
            <Header title="Chat" />
            <Content activities={activities} />
            <Clock />
            <Container />
            <Header title="Orange header" />
          </div>
        </div>
      </div>
    );
  }
}

//<Header title="Orange header" /> -- L09

 //Nieprawidłowy                                 //L08
 //<Clock displayElement={
 //<div>Name</div>
 //<div>Age</div>
 //}></Clock>

// Prawidłowy
//<Clock displayElement={
//  <div>
//    <div>Name</div>
//    <div>Age</div>
//  </div>
//}></Clock>

export default App;