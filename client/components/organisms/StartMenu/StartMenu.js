import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import R from 'ramda';
import Button from './../../atoms/Button'


export default function StartMenu() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));


  return (
    <div style={{height:'80%',width:'30%',backgroundColor:'white'}}>
        <div style={{
          width:'100%',
          height:'33.3%',
          backgroundColor:'grey',
          display:'flex',
          alignItems:'center'
      }}>
      <button style={{
          width:'100%',
          height:'10%'
      }}>
          Works
        </button>
        </div>
      
        <div style={{
          width:'100%',
          height:'33.3%',
          backgroundColor:'grey',
          display:'flex',
          alignItems:'center'
      }}>
      <button style={{
          width:'100%',
          height:'10%'
      }}>
          About
        </button>
        </div>

        <div style={{
          width:'100%',
          height:'33.3%',
          backgroundColor:'grey',
          display:'flex',
          alignItems:'center'
      }}>
      <button style={{
          width:'100%',
          height:'10%'
      }}>
          Contact
        </button>
        </div>
      
    </div>
  );
}
