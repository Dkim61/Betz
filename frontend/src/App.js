import './App.css';
import GroupList from './components/group-list';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/hooks/AuthProvider'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
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
