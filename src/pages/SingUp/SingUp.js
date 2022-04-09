import React from "react";
import '../Login/Login.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

export default function () {
    return (
        <>
        <Navbar />
            <Box className='sign-up'>
                <div className='sign-up-form'>
                    <h1>Sign-UP</h1>

                    <form className='sing-up-input-form'>
                        <div className='sing-up-input'>
                            <TextField autoFocus='true' type={'string'} label="User" variant="standard" autoComplete="off" required size='small' />
                        </div>
                        <div className='sing-up-input'>
                            <TextField autoFocus='true' type={'email'} label="Email" variant="standard" autoComplete="off" required size='small' />
                        </div>
                        <div className='sing-up-input'>
                            <TextField type={'password'} label="Password" variant="standard" autoComplete="off" required size='small' />
                        </div>
                        <div className='sing-up-input'>
                            <TextField type={'password'} label="Password" variant="standard" autoComplete="off" required size='small' />
                        </div>
                        <div className='button-div'>
                            <Button className='button' variant="contained" size='small' endIcon={<SaveIcon />}>
                                Send <Link to='/login'/>
                            </Button>
                            <div className='sing-up-input-form'>
                                <Link to='/login' className='signUpLink'>LOGIN</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </Box>
        </>
    );
}