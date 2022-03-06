import React from "react";
import CollectionPreview from '../../components/Preview/preview.component'
import CollectionsOverview from "../../components/collections-overview/collections-overview.componet";
class ShopPage extends React.Component {
    render(){
        return(
            <div className="shop-page">
              <CollectionsOverview />
            </div>
        )
    }
}


export default ShopPage;