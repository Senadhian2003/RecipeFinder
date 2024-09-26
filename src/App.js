import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import RecipeList from './components/RecipeList/RecipeList';
import  Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <div style={{display: 'flex', flexWrap : 'nowrap'}}>
    
    <Sidebar/>
    <div style={{width:'100%'}}>
    <RecipeDetail/>
    <RecipeList/>
      
    </div>
     
      </div>  
     
    </div>
  );
}

export default App;
