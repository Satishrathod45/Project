//import {BACKEND_URL} from "../Config/config";

export const userRegister=async(name,phone_no,company_name,company_email,employee_size)=>{
    try {
       const response = await fetch('http://localhost:5000/rest/api/register',{
           method: "POST",
           headers:{
               Accept: "application/json",
               "Content-Type":"application/json",
           },
           body: JSON.stringify({
               name,
               phone_no,
               company_name,
               company_email,
               employee_size
           })
       })
       const result = await response.json();
       return result;
    } catch (error) {
       console.error(error)    
    }     
}

