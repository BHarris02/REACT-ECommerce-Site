import React from "react";
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { searchClient } from '../services/algolia';
import "../css/Homepage.css";

const Homepage = () => (
    <div>
        <h1>Featured Items</h1>
        <InstantSearch searchClient={searchClient} indexName="Products">
            <SearchBox />
            <Hits hitComponent={ProductItem} />
        </InstantSearch>
    </div>
);

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

export default Homepage;