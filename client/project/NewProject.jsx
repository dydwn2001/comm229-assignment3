import React,{ useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Project() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstname = (e) => {
    setFirstname(e.target.value);

  }
  const handleLastname = (e) => {
    setLastname(e.target.value);

  }
  const handleEmail = (e) => {
    setEmail(e.target.value);

  }
  const handleSubmit = (e) => {
    
    e.preventDefault();
    let id = uuidv4();
     let object = {"id": id,"firstname": firstname, "lastname": lastname, "email" : email};
     
     localStorage.setItem(id,JSON.stringify(object));
     
     console.log(localStorage);
    
  //   try {
  //     const response = await fetch("http://localhost:3000/api/contacts",{
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(object),
  //     });
  //   const result = await response.json();
  //   console.log(result);  
  // }
  // catch(error){
  //   console.error("Error: ", error);
  // }
}
  return (
    <div>
      <p>🚧 Projects under construction. Grab a hard hat and check back soon! </p>
      <h1>{firstname}</h1>
      <h1>{lastname}</h1>
      <h1>{email}</h1>
      <form>
        
        <label>firstname: <input type= "text" value={firstname} onChange={(e)=> handleFirstname(e)}>
        </input></label>
        <label>lastname: <input type= "text" value={lastname} onChange={(e)=> handleLastname(e)}>
        </input></label>
        <label>email: <input type= "email" value={email} onChange={(e)=> handleEmail(e)}>
        </input></label><br/>
        <button onClick= {(e)=> handleSubmit(e)}>submit</button>
      </form>
      
    </div>
  )
}
