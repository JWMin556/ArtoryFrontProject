import React from 'react';
import { useLocation } from 'react-router-dom';
import Detail from '../components/Exhibition/Detail';

export default function ExhibitionDetail(props) {
  const { state } = useLocation();
  console.log(state.item);
  return <Detail img={state.item.poster_path} title={state.item.title} />;
}
