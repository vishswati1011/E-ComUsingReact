import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation,useParams } from "react-router-dom";
import CollectionItem from '../../components/collection-item/collection-item.component'
import { addItem } from "../../redux/cart/cart.action";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './category.style.scss'

const CollectionPage = ({ collection }) => {
    // const location = useLocation();
    const {collectionId} =useParams();
    console.log("location",collectionId,collection)
    const COLLECTION_ID_MAP = {
        hats:1,
        sneakers:2,
        jackets:3,
        womens:4,
        mens:5
    }
    const {collections} =useSelector((store)=>store.shop);
    console.log("collection-component",collections)
    var collectionItemSort=collections[collectionId]

    
    console.log("collectionItemSort",collectionItemSort,collections,collectionId)
    return (
        <div className="collection-page">
        <h2>{collectionItemSort?collectionItemSort.title:null} </h2>
        <div className="items">
            {collectionItemSort?collectionItemSort.items
            .map(item =><CollectionItem key={item.id} item={item}/>)
            :''}
                </div>
        </div>
    )
}

// const mapStateToProps = (state,collectionId)=>({
//     collection:selectCollection(collectionId)(state)
// })
export default CollectionPage;