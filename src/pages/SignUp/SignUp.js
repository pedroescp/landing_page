import React from 'react';
import './SignUp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';


import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';

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

  const signUpFormik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      alert(`login: ${values.login}; password: ${values.password}`)
    }
  });

  return (
    <>
      <Box className='sign-up'>
        <div className='sign-up-form'>
          <h1>Sign Up</h1>

          <form className='sing-up-input-form' onSubmit={signUpFormik.handleSubmit}>
            <div className='sing-up-input'>
            <TextField name='login' 
                       autoFocus='true' 
                       type={'string'} 
                       label="Login" 
                       variant="standard" 
                       required 
                       size='medium'
                       onChange={signUpFormik.handleChange}
                       values={signUpFormik.values.login}
            />

            <TextField name='password' 
                       type={'password'} 
                       label="Password" 
                       variant="standard" 
                       required 
                       size='medium' 
                       onChange={signUpFormik.handleChange}
                       values={signUpFormik.values.password}
            />

            </div>
            <div className='button-div'>
              <Button type='submit' className='button' variant="contained" size='medium' endIcon={<SaveIcon />}>
                Send
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </>
  )
}