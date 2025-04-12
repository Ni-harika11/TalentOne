import './App.css'
import CommonLayout from './common/Layout'
import Home from './componets/Home'
import Products from './componets/Products'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <CommonLayout>
        <Home/>
        <Products/>
      </CommonLayout>
    </>
  );
};

export default App
