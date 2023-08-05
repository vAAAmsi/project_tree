import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './frame1.css'
import NavBar from '../../../navbar/nav';
import UiButton from '../../UiCore/FormComponent/UiButton/UiButton'
import ReactToPrint from 'react-to-print';
import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';
function ViewTree(){
    let location = useLocation();
    var[data,setData]=useState(location.state)

    const handleDownload=()=>{
        console.log("hquwansm")
    }
    return(
        <div>
            <NavBar/>
           <div>
           
           <div  className='download'>
            <div></div>
           {/* <div className="neem">{data.TreeName}</div> */}
           <ReactToPrint
            documentTitle={data.TreeName}
            content={() => document.getElementById("download-content")}
         
            trigger={() =><UiButton  text="Download"  onClick={handleDownload} startIcon={(<Download/>)} > </UiButton> }
            
          />
         
          
              
           </div>
          <div id='download-content' >
          <div className="neem">{data.TreeName}</div>
            <div className="mainT">
            <div className="treeF1">
                <img  className='frame1-image' src={data.imgUrl?data.imgUrl:"https://thumbs.dreamstime.com/b/oak-tree-7507678.jpg"}></img>
            </div>
            </div>
            <div className="des">
                <div className="des1">
                    <div className="des2" >Description:</div>
                    <p>{data.description}</p>
                </div>
            </div>
          </div>
            
            </div>
        </div>
    )
}
export default ViewTree;