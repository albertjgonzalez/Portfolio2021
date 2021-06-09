import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import StartMenu from './../../organisms/StartMenu'

export default function WelcomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, []);

  return (
    <div style={{
    height:'100vh'}}>
        <containter style={{
          display: "flex",
          height:'100%',
          width:'100%',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:'black'
        }}>
            <StartMenu />
        </containter>
    </div>
  );
}
