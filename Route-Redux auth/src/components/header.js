import {useSelector} from "react-redux"
import {NavLink} from 'react-router-dom'

function Header(){

    const {dark, language} = useSelector(state=> state.site)
    

    return (
        <div>
            header
            <nav>
                <NavLink to="/" activeclassname="active">
                    Anasayfa
                </NavLink>
                <NavLink to="/about" activeclassname="active">
                    Hakkında
                </NavLink>
                <NavLink to="/profile" activeclassname="active">
                    Profil
                </NavLink>
            </nav>
            <div>
                Mevcut mode = {dark ? 'Dark' : 'Light'} 
                <br/>
                Mevcut Dil = {language}
            </div>
            
        </div>

    )

}
export default Header