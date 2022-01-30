import React from "react";
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/Preview/preview.component'
class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }

    render(){
        const collections =this.state;
        console.log("collections",collections)
        return(
            <div className="shop-page">
                {collections.collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
            </div>
        )
    }
}
export default ShopPage;