// eslint-disable-next-line
import React, {useState} from 'react'
import "./Box.css"

const  Results = props => {


  
    return (
        <div className="header">

            { props.box.map((box, i) =>
                <div className="boxes">
                <div
                    className="boxinfo"
                    key={i} 
                    style={{ backgroundColor: box.color, height: box.height + "px", width: box.height + "px" }}
                ></div>
                </div>
            )}

        </div>
    );
}

export default Results
