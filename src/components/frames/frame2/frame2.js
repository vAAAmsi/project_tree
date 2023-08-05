import { collection, getDocs } from "firebase/firestore";
import './frame2.css'
import db from "../../../firebase/db";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { upload } from "@testing-library/user-event/dist/upload";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import storage from "../../../firebase/storage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UiButton from "../../UiCore/FormComponent/UiButton/UiButton";
import NavBar from "../../../navbar/nav";
import {TextField} from '@mui/material'
 function AddTree(){
    const navigate=useNavigate();
    var[treeName,setTreename]=useState("")
     var[description,setDescription]=useState("")
     const [imgUrl, setImgUrl] = useState(null);
     const [progresspercent, setProgresspercent] = useState(0);
      async function handleclick()
      {
        try {
            await setDoc(doc(db, "Trees",treeName ), {
                TreeName: treeName,
                description:description,
                imgUrl:imgUrl
          }
            )
        await  Swal.fire(
            {
                icon: 'success',
                title: 'Success',
                text: 'Successsfully added the data',
            }
          )
      navigate('/dashboard')
        } catch (error) {
            console.log("error ooccured",error)
            await  Swal.fire(
                {
                    icon: 'error',
                    text: 'Something went wrong',
                })
        }
        console.log("added successfuly")
    }
      function imageOnclick(){
         document.getElementById("upload").click()

      }
  const handleFileChange=(e)=>{
     const file = e.target.files[0]
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
        console.log("progressing")
      },
      (error) => {
        console.log("error is ",error)
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );
  }
    return(
        <div>
            <NavBar/>
              <form>
              <div className="treeadding">ADD A TREE</div>
            <div className="treedoc ">
            <div  onClick={imageOnclick}>
                {
                    imgUrl?<img style={{width:150,height:150}}  src={imgUrl} ></img>:<div>
            <div  className="treedoc1">+</div>

                    </div>
                }
            </div>
            </div>
            <div className="r">
                <div className="r1">
                <div className="name">Tree Name:</div>
                </div>
            </div>
            
            <input onChange={handleFileChange} id="upload" style={{display:'none'}} type="file" required  accept="image/*" ></input>
            <div className="text">
                <div className="text1">
                    <TextField label="Tree Name" className="inputcontainer" 
                    onChange={(e)=>{setTreename(e.target.value)}} required
                    style={{width:'100%'}}
                      ></TextField>
                </div>

            </div>
            <div className="descText">
                <div className="descText1">
                    <div className="text1">Description:</div>
                    <div className="text2">
                        <TextField required
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  placeholder="Enter Description"   onChange={(e)=>{setDescription(e.target.value)}}  name="Text1" cols="40"className="descEnter" 
                    />
                        </div>
                </div>
            </div>
            <div className="submitButton">
                <UiButton   onClick={handleclick} text="Submit" ></UiButton>
            </div>
              </form>
        </div>
    )
}
export default AddTree;