import './App.css';
import GroupList from './components/group-list';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/hooks/useAuth';

const user = JSON.parse(localStorage.getItem('betz-user'));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider user={user}>
        <div className="App">
          <Router>
            <Header/>
              <div className='general-content'>
                <Sidebar/>
                <Main/> 
              </div>
            </Router>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
