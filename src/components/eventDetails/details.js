import React from 'react';
import ExtraDetails from './extraDetails';
import LoadingIndicator from '../loadingIndicator';

export default (props) => {
  const anyLoaded = props.hasOwnProperty('venue');
  if (!anyLoaded) return <LoadingIndicator />;
  const extraDetailsLoaded = props.hasOwnProperty('unixdate');
  return (
    <span>
      <ul className="basic-info">
        <li>{ props.date }</li>
        <li>{ props.venue }</li>
      </ul>
      { extraDetailsLoaded ? (<ExtraDetails { ...props } />) : (<LoadingIndicator />) }
    </span>
  );
}
