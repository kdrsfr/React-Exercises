import {useSelector ,useDispatch} from "react-redux"
import { setLanguage, changeTheme } from "../stores/site";

function Footer(){

    const dispatch = useDispatch();
    const {dark, language} = useSelector(state=> state.site)
    const languages = ['tr','en'];
    
    const handleLanguage = lang =>{
        dispatch(setLanguage(lang));
    }

    return (
        <div>
            footer
            <div>
                {languages.map((lang, index) =>{
                    return <button onClick={()=> handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
                })}
            </div>
            <div>
                <button onClick={()=> dispatch(changeTheme())}>
                    {dark ? 'Go Light' : 'Go Dark'}
                </button>
            </div>
            
        </div>

    )

}
export default Footer