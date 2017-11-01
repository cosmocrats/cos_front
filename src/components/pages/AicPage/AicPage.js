import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const AicPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            Ai 코스
          </h1>
          <h2>
            열공
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default AicPage;