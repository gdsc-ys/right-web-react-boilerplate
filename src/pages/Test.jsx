import React from 'react';

import Button from '../components/common/Button';
import H1 from '../components/common/letters/H1';
import H2 from '../components/common/letters/H2';
import H3 from '../components/common/letters/H3';
import H4 from '../components/common/letters/H4';
import Span from '../components/common/letters/Span';

function TestPage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Button>Goodforyou</Button>
      <H1>H1 Test</H1>
      <H2>H2 Test</H2>
      <H3>H3 Test</H3>
      <H4>H4 Test</H4>
      <Span>Span Test</Span>
    </div>
  );
}
export default TestPage;
