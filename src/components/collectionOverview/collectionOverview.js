import React from 'react';
import { connect } from 'react-redux';
import './collectionOverview.style.scss';

import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

import {createStructuredSelector} from 'reselect';
import  selectShopCollection  from '../../redux/shop/shop.select';


const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
            {collections.map(({id, ...otherPropsSection}) => (
                    <CollectionPreview key={id} {...otherPropsSection}/>
                 ) )}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default connect(mapStateToProps)(CollectionOverview);
