import './App.css';
import GroupList from './components/group-list';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
          <div className='general-content'>
            <Sidebar/>
            <Main/> 
         </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
