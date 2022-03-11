import  React  from "react";
import Form from 'react-bootstrap/Form'
import  Button  from "react-bootstrap/Button"

let email = ""
let password = ""
function changeEmail(e){
    email = e.target.value
}
function changePassword(e){
    password = e.target.value
}
function click(){
    if (!password) {
       return alert("Please enter your password")
    }
    if(!email){
        return alert("Please enter your email")
    }
    alert(`Your email: ${email} has logged in successfully`)
}

const FormPassword = ()=>{
    return (

    <Form>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={changeEmail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={changePassword}/>
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={click}>
    Submit
  </Button>
</Form>
    )
}

export default FormPassword;