import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.style.scss';
import MenuItem from '../menuItem/MenuItem';
import {selectDirectorySection} from '../../redux/directory/directory.select';

const Directory = ({ sections }) => (
    <div className="directory-menu">
    {sections.map(({...otherProps}) => 
        <MenuItem 
            {...otherProps}
      />)
    }
    </div>  
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
}) 

export default connect(mapStateToProps)(Directory);