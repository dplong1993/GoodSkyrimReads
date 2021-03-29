import React from 'react';
import styled from 'styled-components';

//Add a useEffect that will take the user back to the last page they were on after 2-3 seconds.

const ComingSoonWrapper = styled.div`
  h1 {
    text-align: center;
  }
`;

const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <h1>Feature Coming Soon</h1>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
