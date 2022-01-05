import './App.css';
import ProductCards from "./components/productCards"
function App() {
  
  return (
    <div className='main'>
      <h2>Compare Products</h2>
      <div className='container'>
          <ProductCards/>
      </div>
    </div>
  );
}

export default App;
