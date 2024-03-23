import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        const timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
    return(
        <div>
        <h2>Profile</h2>
        <h3>Name : {props.name}</h3>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount(1)}>Count</button>
        </div>
    )
}

export default Profile;