import { Link, UNSAFE_createClientRoutes } from "react-router-dom";

export default function Home() {
  console.log("Hello World");
  let object1 = {"Name": "Yongju lee", "age": 3};
  let string = JSON.stringify(object1);
  console.log(string);

  return (
    
      <div className="home-content">
  <p className="welcome">Welcome Welcome Welcome </p>
  <p className="subtext">Please have a sit 🪑</p>

  <h3 className="mission-title">Mission Statement</h3>
  <p className="mission-text">
    I aim to continuously learn and grow as a developer, driven by the joy of learning and a desire to
    create applications that genuinely help people in real life. My mission is to use technology as a
    tool to contribute positively to society.
  </p>
      

    
    </div>
  )
}