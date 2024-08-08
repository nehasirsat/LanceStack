import axios from "axios";
import { useState } from "react"

export default function Signup(){

    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpass,setconfirmpass]=useState("");
    const handleForm=()=>{
        const userdata={
            username:username,
            password:password,
            email:email,
            phone:phone,
            confirmpass:confirmpass
        }
        axios.post("/storeuser",userdata)
        .then((res)=>{console.log("data added successfully");}
        )
    };

    return(
        <div>
               <form>
                <label>Username:</label><br/>
                <input type="text" id="username" name="username" onChange={(e)=>
               {setusername(e.target.value);
               console.log(username);
               }}/><br/>
               <label>Email:</label><br/>
               <input type="text" id="email" name="email" onChange={(e)=>
               {
                setemail(e.target.value);
                console.log(email);
               }}/><br/>
               <label>Phone Number:</label><br/>
               <input type="text" id="phone" name="phone" onChange={(e)=>
               {
                setphone(e.target.value);
                console.log(phone);
               }}/><br/>
                <label>Password:</label><br/>
                <input type="password" id="password" name="password" onChange={(e)=>
               {setpassword(e.target.value);
               console.log(password);
               }}/><br/>
                <label>Confirm Password:</label><br/>
                <input type="password" id="confirmpassword" name="confirmpassword" onChange={(e)=>
               {setconfirmpass(e.target.value);
               console.log(confirmpass);
               }}></input>
                <br/>
                <button onClick={handleForm}>register</button>
               </form> 
        </div>
    )
}