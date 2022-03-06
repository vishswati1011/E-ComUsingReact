import React from "react";
import './collections-overview.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../Preview/preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
const CollectionOverview = ({ collections }) => {
    console.log("collection-preview",collections)
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview);