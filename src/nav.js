import "./nav.css"
import Logo from './assets/images/treeLogo.png'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function NavBar()
{
    const navigate=useNavigate();
return(
    <div className="Parentnav">
        <div className="childnav">
            <img src={Logo}  className="logo" ></img>
            <div className="logout"   onClick={async()=>{
                 await Swal.fire({
                    icon:'success',
                    title:'success',
                    text:"Logged out Successfully"
                 })
                 navigate('/')
            }} >Logout</div>
        </div>
        
    </div>
)
}
export default NavBar;