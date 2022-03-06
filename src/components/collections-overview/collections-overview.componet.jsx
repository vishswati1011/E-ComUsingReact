import React from "react";
import './collections-overview.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../Preview/preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";
const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverview);