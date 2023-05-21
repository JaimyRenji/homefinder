import React from 'react'
import "./Dashboard.css"
import logo from "C:/Users/jaimy/homefinder/src/images/homefinders-low-resolution-logo-color-on-transparent-background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faRightFromBracket,faTableColumns,faHome,faCoins,faStar,faPhone,faMailBulk,faCirclePlus, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {useContext,useState,useEffect} from "react";
import { app, database, storage } from "../../firebase";
import { collection, addDoc,getDocs } from "firebase/firestore";
import {AuthContext} from '../../context';
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
export default function Dashboard(){
    const [data, setData] = useState([]);

  const fetchPost = async () => {
    const db = database;
    await getDocs(collection(db, "pg")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData, "newData");
      setData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

    const initialvalue={
        pg_name:"",
        address:"",
        rent:"",
        image:"",
        phone:"",
    };
    const[pg,setPg]=useState(initialvalue);
    const[urlkey,seturlkey]=useState("");
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setPg({...pg,[name]:value});
        console.log(pg);
    };
    const[file,setFile]=useState(null);
    const handleFileInputChange=(event)=>{
        setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    };
    const handleform = () => {
        const PGImageRef = ref(storage, `images/${file.name}`);
        console.log("uploading:");
    
        console.log(file);
        uploadBytes(PGImageRef, file).then((snapshot) => {
          
          
          
          getDownloadURL(PGImageRef)
            .then((url) => {  
              seturlkey(url);
              setPg({ ...pg, photo: url });
              console.log(url);
              
            })
            .catch((error) => {
              console.log(error);
            });
        });
  
    
      };
  
  
    const handleAddDoc = () => {
      const dbInstance = collection(database, "pg");
    
              addDoc(dbInstance, {
                ...pg,
              });
  
    };
  
  
    
  
  // console.log(file);
  //   console.log(pg);
    const{user}=useContext(AuthContext);
    console.log(user);
    if(user){
        return(
        <div class="full">
            <div className="dashbar">
            <div className="dashleft">
                <a href="/"><img class="logod" src={logo}></img></a>
            </div>
            <div className="dashright">
                <div class="username"><p><b>{user.displayName}</b></p></div>
                <div class="userpic"><img src={user.photoURL}></img></div>
                </div>
            </div>
            <div class="cont">
            <div class="dashnav">
                <button class="but1"><a href="/"><b>HOME<FontAwesomeIcon icon={faHome} className="fa"/></b></a></button>
                <button class="but2"><a href="#"><b>DASHBOARD<FontAwesomeIcon icon={faTableColumns} className="fa"/></b></a></button>
                <button class="but3"><a href="/"><b>LOG OUT<FontAwesomeIcon icon={faRightFromBracket} className="fa"/></b></a></button>
            </div>
            <div class="dash-main">
            <h1>LIST OF HOSTELS</h1>
            {data.map((data, index) => (
                <div class="pg1" key={index}>
                    <div className="det1">
                        <div className="img1">
                            <img src={data.photo}></img>
                        </div>
                        <div className="facility">
                            <p>{data.facilities}</p>
                        </div>
                    </div>
                    <div className="det2">
                        <div className="name"><p><b>{data.pg_name}</b></p></div>
                        <div className="address"><p><b>{data.address}</b></p></div>
                        <div className="price"><b>{data.rent}</b><FontAwesomeIcon icon={faCoins} className="fa-money" /></div>
                        <div className="star"><FontAwesomeIcon icon={faStar} className="fa-star" /><FontAwesomeIcon icon={faStar} className="fa-star" /><FontAwesomeIcon icon={faStar} className="fa-star" /></div>
                    </div>
                    <div className='det3'>
                        <div className='phone'><b><FontAwesomeIcon icon={faPhone} className="fa1" />{data.phone}</b></div>
                        <div className='email'><b><FontAwesomeIcon icon={faMailBulk} className="fa1" />{user.email}</b></div>
                    </div>
                    <div className='det4'>
                        <img src="https://thumbs.dreamstime.com/b/house-tree-logo-real-estate-image-vector-design-graphic-symbol-template-105126143.jpg"></img>
                    </div>
                </div>
            ))}
            </div>

            <div class="dash-section">
                <div class="add"><p><b>ADD HOSTELS<FontAwesomeIcon icon={faPlusCircle} className="fa"/></b></p></div>
               <div className="form">
               
                <input type="text" value={pg.pg_name} name="pg_name" onChange={handleChange} id="name" placeholder="PG name"></input>
                <input type="text" value={pg.address} name="address" onChange={handleChange} id="address"placeholder="Address"></input>
                <input type="tel" value={pg.phone} name="phone" onChange={handleChange} id="phone" placeholder=" Phone"></input>
                <input type="text" value={pg.rent} name="rent" onChange={handleChange} id="rent" placeholder="Rent"></input>
                <input type="text" value={pg.facilities} name="facilities" onChange={handleChange} id="name" placeholder="Facilities"></input>
                  <input type="file" 
                
                
                onChange={(event) => handleFileInputChange(event)}

                  accept="image/*" />
                  <br />
                  <button className="upload" onClick={handleform} type="button">Upload Image</button>
                  <br />
                  <br />
                  <button className="submit" onClick={handleAddDoc} type="button">Submit</button>
               
               </div>
            </div>
            </div>
        </div>

    )
}
}