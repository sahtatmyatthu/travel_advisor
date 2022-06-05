import React from "react";
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab';

import useStyles from './style';

const Map =()=>{
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const coordinates =  {lat:0 , lng: 0};

  return (
    <div className={classes.mapContainer}>
    <GoogleMapReact
    bootstrapURLKeys={{key:'AIzaSyCTYI7ZHbuslTnHp0rFjv1HwJUVnV9U3io'}}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={14}
    margin={[50, 50, 50, 50]}
    options={''}
    onChange={''}
    onChildClick={''}
    >


    </GoogleMapReact>

    </div>
  );
}

export default Map;