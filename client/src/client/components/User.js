import { useEffect, useState } from "react";
import io from 'socket.io-client';
 



const socket = io.connect('http://localhost:4000')



//function to console log 


const Userid = ()=>{
 
  
  //for storing the single message while being type 
  const [message,Setmessage] = useState('');
  //for storing the list of all the message being typed
  const [updatemessage,Setupdatemessage] = useState([]);
//useEffect to set up the listener once 
//listen from the server on the recieve_message 
//listener
useEffect(()=>{
  socket.on("receive_message",(newMessage)=>{
    Setupdatemessage(prev=>[...prev,newMessage]);
  });
  //cleanup
  return()=>{
    socket.off("receive_message");
  };

},[]);



//rendering when the button is clicked 
const action = () =>{
  //sending the message to the server 
  socket.emit("send_message",message);
  
  
  
  Setmessage('');


  
}



 

  //for animation 
  const transition = {
    duration:0.8,
    delay:0.5,
    ease: [0,0.71,0.2,1.01]
  }
  //for message sync

    
    
    const [user,setUser] = useState(null);
    useEffect(()=>{
        
        fetch('https://randomuser.me/api/?results=1')
         .then(response=>response.json())
         .then(data => setUser(data.results[0]));
       
       
    },[]);
    
    if(!user) return<p>Loading....</p> 
   
 

    
    

   
    
    return(
      <>
      
    
     
    
    
 


      <div className="user-box">
     
        <div className="user-gui">
        <img className="account" src={user.picture.large} alt="pic">
         </img> 
        <p className="text-1">{user.name.last}</p>
        
        <div className="text-box">
          <input type="text" className="message"  placeholder="text here" value={message} onChange={(event)=>Setmessage(event.target.value)} >
          </input>
        </div>
       
       
        

        </div>
        
       
        
         
        <div className="button-1">
          <button type="submit" className="btn" onClick={action}  >
            send
          </button>
        </div>
       
       
       
      </div>
      <div className="chat-container">
        <ul className="message-container">
        
         {updatemessage?.map((msg,index)=>(
          msg.length>10?(
            <li className="chat-msg" key={index}>{msg}</li>

          ):
          <li className="chat-msg1" key={index}>{msg}</li>
         
         ))}
      
          
        </ul>
      </div>
      <div>
        <h3>Note: the message will be auto invisible as you type</h3>
        <h3>Note: Also you will not know the username</h3>
      </div>
     
     
      </>
   
        
    )
    //lets write here the code to store the message in vairable 


}
export default Userid;