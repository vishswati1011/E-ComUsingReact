import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss'
const Directory = () =>{

        const {sections}=useSelector((store)=>store.directory)
        return(
        <div className="directory-menu">
             {sections.map(({id, ...otherSectionProps})=>(
                <MenuItem  key={id} {...otherSectionProps}/>
            ))} 
        </div>
        )
    
}
export default Directory;