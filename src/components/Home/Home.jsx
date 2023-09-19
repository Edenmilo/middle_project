
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import { UserContext } from "../../context/userContext";
import { useContext } from 'react';

function Home() {

  const { users } = useContext(UserContext);
  const { loggedUser } = useContext(UserContext);



  return (<div className='home-container'>
   
      <h1>Home</h1> 
      <div className="buttons-container">
        <Link to="/login">
          <button className='logbtn'>Login</button>
        </Link>
        <Link to="/register">
          <button className='registerbtn'>Register</button>
        </Link>
      </div>
      <h1>{loggedUser.username && "hello "+ loggedUser.username }</h1>
{      console.log(loggedUser)
}
    </div>
  );
}

export default Home;
