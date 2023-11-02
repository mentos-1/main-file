import "../css/Samplestyle.css";
import Resume1 from "./Resume1";
import Samplecard from './Samplecard';
import Samplecarddata from './Samplecarddata';
import { Link } from 'react-router-dom';
import React,{useState} from 'react'

const Template = () => {
  const [file, setFile]= useState(null);
  return (
    <div>
      <div className="ssample-container">
        <h1 className="sample-heading" > Template </h1>
        <div className="sample-container">
            {Samplecarddata.map((val, ind) => {
                return(
                  <Link to='/resume1'>
                    <Samplecard
                    key = {ind}
                    imgsrc ={val.imgsrc}/>
                    </Link>
                    
                )
            })}
        </div>  
    </div>
    </div>
  )
}

export default Template;
