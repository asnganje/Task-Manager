import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/dashBoard";
import EditTask from "./components/editTask";
const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
          <Route path="/" element = {<DashBoard/>}/>
          <Route path="/edit" element = {<EditTask/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
