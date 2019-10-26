import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import './CollectionPage.styles.scss';

import {selectCollection} from '../../redux/shop/shop.select';

const CollectionPage = ({collection}) => {
    console.log(collection)
    return(
    <div className="collection-page">
        <h2>CATEGORY PAGE</h2>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);