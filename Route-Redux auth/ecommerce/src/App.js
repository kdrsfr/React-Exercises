import CounterActions from "./components/CounterActions"
import Counter from "./components/Counter"
import Header from "./components/header"
import Footer from "./components/footer"
import { connect } from "react-redux"
import {routes} from './routes'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes
} from 'react-router-dom';

const mapStateToProps = state => ({
    dark: state.site.dark,
    user: state.auth.user,
})


function App({dark,user}) {
  const routing = useRoutes(routes(user));
  return (
    <>
      <div className={dark ? 'dark' : 'light'}>
        <Header/>
        {/* <Counter/>
        <CounterActions/>  */}
        {routing}
        <Footer/>
      </div>
   </>
  );
}

export default connect(mapStateToProps)(App);
