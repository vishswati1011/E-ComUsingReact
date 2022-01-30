import React from "react";

import './collection-item.style.scss'
import logo from './images/shop-img/hats/brown-cowboy.png' 
const CollectionItem =({id,name,price,imageUrl}) => {
    var image=imageUrl;
    // console.log("url",imageUrl,image)

    return(
    <div className="collection-item">
        <div 
            className="image"
            style={{
                    backgroundImage:`url(${image})`
            }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
    </div>
    )
}
export default CollectionItem;