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
      author: "Tim BER", 
      date: "02/02/2022"
    },
    {
      id: 3,
      title: "titre 3",
      body: "azij  efkefkz okfpz adl af", 
      author: "Tim BER", 
      date: "02/02/2022"
    },
    {
      id: 4,
      title: "titre 4",
      body: "azij  efkefkz okfpz adl af", 
      author: "Tim BER", 
      date: "02/02/2022"
    }
  ]);

  return (
    <div className="content">
      <div className="bloc-head-home">
        <h1 className="welcome">Welcome in my World!</h1>
        <BlogList blogs={blogs} />
        
      </div>
    </div>
  );
};

export default Home;
