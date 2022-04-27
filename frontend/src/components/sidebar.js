import React,{useState} from "react";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { auth } from './services/user-services';

function Sidebar() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    const authData = await auth({username, password})
    console.log(authData)
  }

  return (
    <div className="sidebar">
      <form onSubmit={handleSubmit}>
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
        < h1>Sidebar</h1>
          <Button color="secondary" variant="contained" type="submit">
            Login
          </Button>
      </form>
    </div>
  );
}

export default Sidebar;
