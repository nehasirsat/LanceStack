import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const [userName,setusername]=useState("");
    const [email,setemail]=useState("");
    const [mobileNumber,setphone]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpass,setconfirmpass]=useState("");
    const navigate =useNavigate();
    const handleForm=async()=>{
        const userdata={
            userName:userName,
            password:password,
            email:email,
            mobileNumber:mobileNumber,
            confirmpass:confirmpass
        }
        console.log("in function");
        axios.post("http://localhost:8080/users",userdata)
        .then((res) => {
            console.log("Data added successfully");
        })
        .catch((error) => {
            console.error("There was an error adding the data!", error);
        });
        navigate("/login");
    };

    return(
        <div>
               <form>
                <label>Username:</label><br/>
                <input type="text" id="username" name="userName" onChange={(e)=>
               {setusername(e.target.value);
               console.log(userName);
               }}/><br/>
               <label>Email:</label><br/>
               <input type="text" id="email" name="email" onChange={(e)=>
               {
                setemail(e.target.value);
                console.log(email);
               }}/><br/>
               <label>Phone Number:</label><br/>
               <input type="text" id="phone" name="mobileNumber" onChange={(e)=>
               {
                setphone(e.target.value);
                console.log(mobileNumber);
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
                <button onClick={(e) => { e.preventDefault(); handleForm(); }}>register</button>
               </form> 
        </div>
    )
}