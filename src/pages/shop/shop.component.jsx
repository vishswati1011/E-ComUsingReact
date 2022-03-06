import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { useLocation } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.componet";
const ShopPage = () => {
    const location = useLocation();

    console.log("match", location.pathname)

    return (
        <div className="shop-page">
            <CollectionsOverview />
            {/* <Routes>
                <Route exact path={`/`} element={<CollectionsOverview />} />
                <Route exact path={`${location.pathname}/:collectionId`} element={<CollectionPage />} />
            </Routes> */}
        </div>
    )
}


export default ShopPage;