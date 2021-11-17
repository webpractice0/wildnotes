import React, {useState} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container, Grid, Box, TextField} from "@mui/material";
import axios from "axios";

const Login = () => {
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()
   const [accessToken, setAccessToken] = useState()
   const handleSubmit = (e)=>{
      e.preventDefault();
      const raw_email = document.getElementById('emailid').value
      const raw_password = document.getElementById('password').value

      axios.post('http://127.0.0.1:8000/api/auth/jwt/create/', {'email':raw_email, 'password':raw_password}).then(res=>{
         console.log('Access Token: ', res.data.access)
      }).catch(error=>{
         console.log('Error: ', error)
      })
      setEmail(document.getElementById('emailid').value)
      setPassword(document.getElementById('password').value)
   }


  return (
    <form onSubmit={handleSubmit}>
       <Container maxWidth="sm" sx={{paddingRight: '0px'}}>
      <Grid container sx={{marginTop:'20px'}}>
        <Grid item xs={12} sx={{ height: "200px", paddingLeft:'0px !important'}}>
          <Box sx={{textAlign:'center'}}>
            <h1>
              <AccountCircleIcon sx={{fontSize:'100px'}}/>
            </h1>
            <h1>Login Page</h1>
            <hr style={{height:'10px', width:'50%', margin:'auto', marginTop:'20px'}}/>
          </Box>
          <Box sx={{textAlign:'center',marginTop:'50px'}}>
             <TextField id="emailid" label="Email address" variant="standard" sx={{width:'60%'}} type="email" required/>             
          </Box>
          <Box sx={{textAlign:'center',marginTop:'20px'}}>
          <TextField id="password" variant="standard" type="password" label="Password" sx={{width:'60%'}} required/>
          </Box>
          
          <Box sx={{textAlign:'center',marginTop:'20px'}}>
          <input id="submit_button" type="submit" value="Submit"/>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </form>
  );
};

export default Login;
