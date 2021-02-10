
import {useState, createContext} from 'react';
import Level1Component from "./components/Leve1Component";
import './App.css';

/* Create a context object */
export const stateListContext = createContext(null);

function App() {

  /* Create multiple state objects as needed   */
  const [name, setName] = useState("Abhi");
  const [empId, setEmpId] = useState("D1001");
  const [age, setAge] = useState(21);
  const [address, setAddress] = useState({city: "Parkland", zip: 33076})

  /* Here, I am combining all states into a single object which will be passed  */
  const stateList = {
    name,
    setName,
    empId,
    setEmpId,
    age,
    setAge,
    address,
    setAddress
  }


  /*  Now use the 'context.provider' to pass the data(stateList object) to children components   */
  return (
    <stateListContext.Provider value={stateList}>
      <Level1Component />
    </stateListContext.Provider>
  );
}

export default App;
