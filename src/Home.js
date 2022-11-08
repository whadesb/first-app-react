import { useState } from "react";
import BlogList from './BlogList';




const Home = () => {


  const [blogs, setBlog] = useState([
    {
      id: 1,
      title: "Le monde de Lewis",
      body: "bla bla bla bla lazze kfpzf", 
      author: "Thomas Ez", 
      date: "01/01/2022" 
    },
    {
      id: 2,
      title: "Lewis Hamilton - Ses records",
      body: "azij  efkefkz okfpz adl af", 
      author: "WhadS BER", 
      date: "02/02/2022"
    },
    {
      id: 3,
      title: "L'Ocean des Remous",
      body: "azij  efkefkz okfpz adl af", 
      author: "WhadS BER", 
      date: "22/09/2020"
    },
    {
      id: 4,
      title: "Ensemble, chemins & nO",
      body: "azij  efkefkz okfpz adl af", 
      author: "Thomas EZ", 
      date: "04/05/2021"
    }
  ]);

  return (
    <div className="content">
      <div className="bloc-head-home">
        <h1 className="welcome">Welcome Dine's World ! React js</h1>
        <BlogList blogs={blogs} />
 
      
      </div>
    </div>
  );
};

export default Home;
