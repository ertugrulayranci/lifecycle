import { useState } from "react";
import Sayac from "./component/ClassComp"
import Paper from "./component/functionComp";
import Search from "./component/refTest";
import FilterUser from "./component/filterUser";
function App() 
{
  const[showSayac ,SetShowSayac] = useState(true)
  return(
    <div className="App">
        {/* <button onClick={()=>SetShowSayac(!showSayac)}>{showSayac ? "gizle" : "göster"}</button>
        {
          showSayac &&  <Paper/>} */}

      {/* <Search/> */}
      <FilterUser/>
    </div>
  )
}


export default App;
