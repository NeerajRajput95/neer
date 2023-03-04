
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {Link,useNavigate} from 'react-router-dom'
function Login() {
   const[data,setData]=useState({email:"",password:""});
    let Navigate=useNavigate();
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const response= await fetch('http://localhost:5000/api/login',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({email:data.email,password:data.password})
      })
      console.log("yyyyyyy");
      console.log(response);
      const json=await response.json();
      console.log("hhhhhhhhhhh",json);
      if(!json.success){
        alert("enter valid details");
      }
      if(json.success){
        localStorage.setItem("authorization",json.token);
        console.log(json.token);
        Navigate('/');
      }
    }
    const onChange=(event)=>{
        const {name, value} = event.target

        setData({...data,[name]:value})
        
        setData(() => {
            return {
                ...data,
                [name]: value
            }
        })

        console.log("data is ", data)
    }
  return (
    <>
    <div className='container'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="Email" placeholder="Enter email" name="email" value={data.email} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to='/createuser' style={{width:200}} className='m-3 btn btn-danger'>create new user</Link>
    </Form>
    </div>
    </>
  );
}

export default Login;

