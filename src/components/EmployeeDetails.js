import {useState,useEffect} from 'react'
import axios from 'axios'

export default function EmployeeDetails(){
    const [employee,setEmployee]=useState({name:"",salary:""})
    const addemployee=(event)=>{
        event.preventDefault();
        var p={name:(employee.name),salary:parseInt(employee.salary)};
        const header={"contents-type":"appliocation/json"}
        axios.post("http://localhost:3001"+"/employee",p)
        .then((result)=>{
            console.log(result);
        })
        }
        const handleEmployee=(e)=>{
            setEmployee({...employee,[e.target.name]:e.target.value})
            }
            return (
                <div>
                    <h1>Employee Details</h1>
                    <form>
                        <label>Name</label>
                        <input type="text" name="name" value={employee.name} onChange={handleEmployee}
                        />
                        <br/>
                        <label>Salary</label>
                        <input type="number" name="salary" value={employee.salary} onChange={handleEmployee}
                        />
                        <br />
                        <button type='submit' onClick={addemployee}>Show Details</button>
                    </form>
                </div>
            )
}

