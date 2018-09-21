import React from 'react'

const PrintScore = props => 
    <h3 className='col-md-6 col-sm-12 col-xs-12'>{props.label}: {props.score}</h3>

export default PrintScore