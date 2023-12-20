import React from 'react'
import DomikList from './DomikList'
import { withDomikConsumer } from '../Context'
import Loading from './Loading'

function DomikContainer({ context }) {
  const { loading, sortedDomiki } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    
      <DomikList domiki={sortedDomiki} />
   
  );
}

export default withDomikConsumer(DomikContainer);
