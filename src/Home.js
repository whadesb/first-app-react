import { useState } from "react";


const Home = () => {
    const sayHello = () => {
        console.log("ok");    
    }

  return (
    <div className="content">
      <div className="bloc-head-home">
        <h1 className="welcome">Welcome in my World!</h1>
        <button className="click" onClick={sayHello

        }>Click here</button>
      </div>
    </div>
  );
};

export default Home;
