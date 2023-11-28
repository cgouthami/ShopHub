import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import './login.css'

const SignUp = () => {
  const [EmailID, setEmailID] = useState('');

  const [state, setState] = useState({          
    password: "",
    cPassword: ""
  });

  const [passMatch, setPassMatch] = useState();
        
        const handleChange = (e) => {
          const { id, value } = e.target;
          setState((prevState) => ({
            ...prevState,
            [id]: value
          }));
        };

        useEffect(() => {
            validatePassword();
          }, [state]);
          
        const validatePassword = () => {
          state.password === state.cPassword
            ? setPassMatch(true)
            : setPassMatch(false);
        };
        
        const validatePwd=(e)=>{
            e.preventDefault();
            if(EmailID.length === 0)
            {
              alert("Invalid Email")
              return
            }
            if(state.password.length <=8)
            {
              alert("Password must 8 chars")
              return 
            }
          
                   
            let countUpperCase = 0
            for(let i=0;i<state.password.length;i++){
                
                if(state.password[i] == state.password[i].toUpperCase()){
                    
                    countUpperCase++
                  }
            }
            if(countUpperCase == 0){
                alert('Invalid Form, 0 upper case in password')
                return 
              }
              
            
        }

  return (
    <>
    <Form><br/><br/>
    <h1 className="text-dark d-flex justify-content-center">Sign Up</h1>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="text-dark">Email ID</Form.Label>
    <Form.Control type="email" placeholder="abc@example.com" onChange={(e)=>setEmailID(e.target.value)}  />
    </Form.Group>
    
    </Form>
    <div class="login-page text-dark">
            
              <input
                
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                
              />
      <br/>
              <input
                
                type="password"
                className={`form-control ${passMatch ? "" : "input-error-border"}`}
                id="cPassword"
                placeholder="Confirm Password"
                value={state.cPassword}
                onChange={handleChange}
                
                aria-invalid={passMatch ? true : false}
              />
      
              <div className="input-error">
                {state.password !== state.cPassword ? "" : ""}
              </div>
              <div className="input-error">
                {passMatch ? "" : "Error: Passwords do not match"}
              </div>
      <br/>
              <button onClick={validatePwd}>Signup</button>
            </div>
        
        
    </>
      
  )
}

export default SignUp