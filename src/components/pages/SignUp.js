import React from 'react';
import './SingUp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';


import TextField from '@mui/material/TextField';

export default function SignUp() {
  const styles = theme => ({
    textField: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500
    },
    input: {
      color: 'white'
    }
  });


  return (
    <>
      <Box className='sign-up'>
        <div className='sign-up-form'>
          <h1>Sign Up</h1>

          <form className='sing-up-input-form'>
            <div className='sing-up-input'>
            <TextField autoFocus='true' type={'string'} label="Login" variant="standard" required size='medium' />
            <TextField type={'password'} label="Password" variant="standard" required size='medium' />
            </div>
            <div className='button-div'>
              <Button className='button' variant="contained" size='medium' endIcon={<SaveIcon />}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </>
  )
}