import { useState } from 'react'
import './App.css';
import TabHeader from './components/TabHeader';

function App() {
  const [tab, setTab] = useState([
    {
      index: 0,
      title: "Tab One",
      content: "This is the content of tab one.",
      selected: true
    },
    {
      index: 1,
      title: "Tab Two",
      content: "This is the content of tab Two.",
      selected: false
    },
    {
      index: 2,
      title: "Tab Three",
      content: "This is the content of tab Three.",
      selected: false
    }
  ]) 
  const clickedHandler = item => {
    const myTabs = [...tab]
    myTabs.forEach((t,i) => t.selected = false);
    setTab(myTabs);
    const editTab = tab[item];
    editTab.selected = true;
    setTab([...tab.slice(0,item), editTab, ...tab.slice(item+1)]);
  }
  return (
    <div className="App">
      {
        tab.map((item, i) => {
          return <>
           <TabHeader tabItem={item} key={i} isClicked={ clickedHandler }/>
           </>
        })
      }
           {
             tab.map((t,i) => {
               return t.selected ? <h3>{t.content}</h3> : ""

             })
        }
    </div>
  );
}



export default App;
