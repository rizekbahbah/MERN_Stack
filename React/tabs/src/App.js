import './App.css';
import Tabs from './components/Tabs';
import Details from './components/Details';
import { useState } from 'react';

function App() {
  const arr=[{label:"Yazan",content:"Yazan Kayed"},{label:"Kareem", content:"Kareem Omar Taha"}, {label:"Awad", content:"Awad AlWera3"}, {label:"Mohammed Habeeb Azeez Issa", content:"Abo Habeeb"}];
  const [tab, setTab] = useState({});
  const assignTab = tab => setTab(tab); 
  return (
    <div className="App">
      <Tabs array={arr} assignTab={ assignTab }/>
      <Details tab= {tab}/>
    </div>
  );
}

export default App;