import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {requestAll} from '../actions/placesAction';
import Place from './Place';


function AllPlaces() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestAll())
    })

  return (
    <div>
        <Place/>
    </div>
  );
}

export default AllPlaces;