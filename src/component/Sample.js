import "../css/Samplestyle.css";

import Samplecard from './Samplecard';
import Samplecarddata from './Samplecarddata';

import React,{useState} from 'react'

const Sample = () => {
  const [file, setFile]= useState(null);
  return (
    <div>
      <div>
        <div>
      <div className="ssample-container">
        <h1 className="sample-heading" > Samples </h1>
        <div className="sample-container">
            {Samplecarddata.map((val, ind) => {
                return(
                    <Samplecard
                    key = {ind}
                    imgsrc ={val.imgsrc}                   
                    />
                    
                )
            })}
        </div>  
    </div>
    </div>
    </div>
    </div>
  )
}

export default Sample;
