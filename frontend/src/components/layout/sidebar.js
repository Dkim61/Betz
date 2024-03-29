import React,{useState} from "react";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { auth } from '../services/user-services';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import User from '../user/user';

function Sidebar() {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const { authData, setAuthData } = useAuth();
  const navigate = useNavigate();
// ^ using the custom hook to authenticate

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await auth({username, password})
    setAuthData(data);
  }

  const logout = () => {
    setAuthData(null);
  }

  const account = () => {
    navigate('/account')
  }


  return (
    <div className="sidebar">
      {!authData ?
      <form onSubmit={handleSubmit}>
        < h1>Sign In Here!</h1>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="username" label="Username" variant="standard"
            onChange={ e => setUsername(e.target.value)}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="password" label="Password" variant="standard" type="password" 
            onChange={ e => setPassword(e.target.value)}
          />
        </Box>
          <Button color="secondary" variant="contained" type="submit">
            Login
          </Button>
          <br/>
          <Link to={'/register'}Sign>Sign up here if you don't have an account!
          </Link>
      </form>
    :
      <div>
        <User user={authData.user} />
        <br />
        <Button color="secondary" variant="contained" onClick={() => logout()}>
          Logout
        </Button>
        <br />
        <br />
        <Button color="secondary" variant="contained" onClick={() => account()}>
          My Account
        </Button>
      </div>
    }
      </div>
  );
}

export default Sidebar;
