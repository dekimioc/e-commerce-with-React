import React from 'react';

import CollectionItem from '../collectionItem/CollectionItem';

import './CollectionPreview.style.scss';

const CollectionPreview = ({items, title}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item,ind) => ind < 4).map(({id, ...otherSectionProps}) => (
                <CollectionItem key={id} {...otherSectionProps} />  
          ))}
        </div>
    </div>
)

export default CollectionPreview;