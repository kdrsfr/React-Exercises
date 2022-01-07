import './App.css';
import ProductCards from "./components/productCards"
import CompareTable from './components/compareTable';
import { connect } from "react-redux"


function App() {

  return (
    <div className='main'>
      <h2>Compare Products</h2>
      <div className='container'>
          <ProductCards/>
          <CompareTable/>
      </div>
      
    </div>
  );
}

export default App;
