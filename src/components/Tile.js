import React from 'react'

const Tile = props =>    
    <img className='col-md-2 col-sm-4 col-xs-6 m-2' 
        onClick={props.onClick}
        src={require('./cat' + props.catId + '.jpeg')} 
        alt={props.catId}>
    </img>
    
export default Tile




