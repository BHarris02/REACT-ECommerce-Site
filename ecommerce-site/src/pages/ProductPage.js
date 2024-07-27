import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InstantSearch, SearchBox, Hits, Pagination } from "react-instantsearch-dom";
import { searchClient, index } from "../services/algolia";
import "../css/ProductPage.css";

const ProductPage = () => {
    <div>
        <div>Search for an Item</div>
        <InstantSearch searchClient={searchClient} indexName="Products">
            <SearchBox />
            <Hits hitComponent={ProductItem} />
        </InstantSearch>
    </div>
};

const ProductItem = ({ hit }) => (
    <div className="product-item">
        <img src={hit.image} className="product-image" />
        <h2>{hit.name}</h2>
        <p>{hit.description}</p>
        <button className="snipcart-add-item"
            data-item-id={hit.id}
            data-item-name={hit.name}
            data-item-price={hit.price}
            data-item-url={`/products/${hit.url}`}>
                Add to basket
        </button>
    </div>
);

export default ProductPage;