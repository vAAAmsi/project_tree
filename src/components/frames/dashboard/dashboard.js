
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import './dashboard.css'
import db from '../../../firebase/db';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import NavBar from '../../../navbar/nav';
import UiButton from '../../UiCore/FormComponent/UiButton/UiButton';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function Dashboard(){
    const [data,setData]=useState([])
    const [filter,setFilter] = useState('')
    const router=useNavigate();
    function handleClick(){
       router('/addtree')

    }
    useEffect(()=>{
        getData();
      },[])
      async function getData(){
          var d=[]
    const querySnapshot = await getDocs(collection(db, "Trees"));
    querySnapshot.forEach((doc) => {
      d=d.concat(doc.data());
    })
setData(d)
  }
  const viewbutton=(l)=>{
    router('/view',{state:l})
  }
    return(
        <div >
            <NavBar/>
            
                <div className="SB">
                <div className="SB1">
                <TextField style={{width:'80%'}} label='serach'
                    onChange={(e) => setFilter(e.target.value)}
                />
                <UiButton  startIcon={(<AddIcon/>)} onClick={handleClick}  text="Add Tree" ></UiButton>
                </div>
                </div>
                <div className="pic">  
                    <div className="piccon">
                    {
                        data
                        .filter((item) => {
                            return item.TreeName.toLowerCase().includes(filter.toLowerCase())
                        })
                        .map((d,index)=>{
                            return (
                                <div className="piccon" key={index}>
                    <div onClick={()=>{
                        viewbutton(d)
                    }} className="pic1">
                        <img className='Image1' src={d.imgUrl?d.imgUrl:"https://thumbs.dreamstime.com/b/oak-tree-7507678.jpg"}></img>
                        <div className='names'>{d.TreeName}</div>
                    </div>
                    </div>
                        )} )
                    }
                
                    </div> 
                
            </div>
        </div>
    )
}
export default Dashboard;