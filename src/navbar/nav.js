import "./nav.css"
import Logo from '../assets/images/treeLogo.png'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { Tooltip } from "@mui/material";

function NavBar()
{
    const navigate=useNavigate();
return(
    <div className="Parentnav">
        <div className="childnav">
           <>
            <Tooltip title='navigate up'>
            <KeyboardBackspaceSharpIcon onClick={() => navigate('/dashboard')}/>
            </Tooltip>
            <img src={Logo}  className="logo" ></img>
           </>
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