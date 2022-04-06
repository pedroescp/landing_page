import React from 'react';
import './Login.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <>
      <Box className='sign-up'>
        <div className='sign-up-form'>
          <h1>Login</h1>

          <form className='sing-up-input-form'>
            <div className='sing-up-input'>
              <TextField autoFocus='true' type={'string'} label="Login" variant="outlined" autoComplete="off" required size='small' />
            </div>
            <div className='sing-up-input'>
              <TextField type={'password'} label="Password" variant="outlined" autoComplete="off" required size='small' />
            </div>
            <div className='button-div'>
              <Button className='button' variant="contained" size='small' endIcon={<SaveIcon />}>
                Send
              </Button>
              <div className='sing-up-input-form'>
                <Link to='/sign-up' className='signUpLink'>SIGN-UP</Link>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </>
  )
}