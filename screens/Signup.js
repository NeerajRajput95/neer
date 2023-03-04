
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {Link} from 'react-router-dom'
function Signup() {
   const[data,setData]=useState({name:"",location:"",email:"",password:""})
    const handleSubmit=async(e)=>{
      e.preventDefault();
      

      const response= await fetch('http://localhost:5000/api/createuser',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name:data.name,location:data.location,email:data.email,password:data.password})
      })
      console.log("yyyyyyy");
      const json=await response.json();
      console.log("hhhhhhhhhhh",json);
      if(!json.success){
        alert("enter valid details");
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
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" name="name" value={data.name} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="Location" placeholder="Enter Location" name="location" value={data.location} onChange={onChange} />
      </Form.Group>
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
      <Link to='/Login' style={{width:200}} className='m-3 btn btn-danger'>already user</Link>
    </Form>
    </div>
    </>
  );
}

export default Signup;
