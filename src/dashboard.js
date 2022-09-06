
import { Routes,Route,Link,useNavigate } from 'react-router-dom';
import db from './firebase/db';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import NavBar from './nav';
import UiButton from './components/UiCore/FormComponent/UiButton/UiButton';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
function Dashboard(){
    var[data,setData]=useState([])
    const router=useNavigate();
    function handleClick(){
       router('/addtree')

    }
    function Pic1(){
        router('/view')

    }
    function Pic2(){
        router('/view')

    }
    function Pic3(){
        router('/view')

    }
    useEffect(()=>{
        console.log("helllllllllllllp i am from useeffect")
        getData();
      },[])
      async function getData(){
          var d=[]
    const querySnapshot = await getDocs(collection(db, "Trees"));
    querySnapshot.forEach((doc) => {
      d=d.concat(doc.data());
    });
    console.log("data is",d)
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
                <TextField className="search"   label="Search"  
                InputProps={{
                    endAdornment:(
                        <UiButton text="Search" ></UiButton>
                    )
                }}
                ></TextField>
                {/* <input className="search" placeholder="Enter text to search"></input> */}
                {/* <button onClick={handleClick} className="button">AddTree</button> */}
                <UiButton  startIcon={(<AddIcon/>)} onClick={handleClick}  text="Add Tree" ></UiButton>
                </div>
                </div>
                <div className="pic">
                  
                           
                    <div className="piccon">
                    {
                        data.map((d)=>{
                            return (
                                <div className="piccon">
                    <div onClick={()=>{
                        viewbutton(d)
                    }} className="pic1">
                        <img className='Image1' src={d.imgUrl?d.imgUrl:"https://thumbs.dreamstime.com/b/oak-tree-7507678.jpg"}></img>
                        <div className='names'>{d.TreeName}</div>
                    </div>
                    </div>
                        )} )
                    }
                    {/* <div onClick={Pic1} className="pic1">
                        <img className='Image1' src='https://thumbs.dreamstime.com/b/oak-tree-7507678.jpg'></img>
                        <div className='names'>NeemTree</div>
                    </div>
                    <div onClick={Pic2}  className="pic2">
                    <img className='Image1' src='https://thumbs.dreamstime.com/b/oak-tree-7507678.jpg'></img>
                    <div className='names'>NeemTree</div>
                    </div>
                    <div onClick={Pic3}  className="pic3">
                    <img className='Image1' src='https://thumbs.dreamstime.com/b/oak-tree-7507678.jpg'></img>
                    <div className='names'>Neem Tree</div>
                    </div> */}
                    </div> 
                
            </div>
        </div>
    )
}
export default Dashboard;