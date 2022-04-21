import './App.css';
import GroupList from './components/group-list';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Header/>
        <div>
          <Sidebar/>
          <Main/> 
       </div>
    </div>
  );
}

export default App;
