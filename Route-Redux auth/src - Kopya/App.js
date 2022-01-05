import CounterActions from "./components/CounterActions"
import Counter from "./components/Counter"
import Header from "./components/header"
import Footer from "./components/footer"
import  {useSelector} from "react-redux"
import {routes} from './routes'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Children } from "react"



function App() {
  const {dark} = useSelector(state => state.site);
  const {user} = useSelector(state => state.auth);

  return (
   <Router>
      <div className={dark ? 'dark' : 'light'}>
        <Header/>
        {/* <Counter/>
        <CounterActions/>  */}
        <Routes>
          {routes.map(route=>{
              return (
              // <Route exact={route.exact} path={route.path} element={
              //   <RequireAuth redirectTo="/login">
              //     <route.component/>
              //   </RequireAuth>
              //   }/> 
                <Route exact={route.exact} path={route.path} element={()=>{
                  if(route.auth && !user){
                    return <Navigate to="/login"/>
                  }
                  return <route.component/>
                }}/> 
              );
          
          })}

        </Routes>
        <Footer/>
      </div>
   </Router>
  );
  function RequireAuth({ children, redirectTo }) {
    return user ? children : <Navigate to={redirectTo}/>;
  }

}

export default App;
