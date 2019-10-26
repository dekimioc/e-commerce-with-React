const INTITAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            key: 1,
            linkUrl: 'hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            key: 2,
            linkUrl: 'jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            key: 3,
            linkUrl: 'sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            key: 4,
            linkUrl: 'womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            key: 5,
            linkUrl: 'mens'
          }
    ]
}

const DirectoryReducer = (state = INTITAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default DirectoryReducer;