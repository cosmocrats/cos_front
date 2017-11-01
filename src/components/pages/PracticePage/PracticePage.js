import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const PracticePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            실무 코스
          </h1>
          <h2>
            열공
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default PracticePage;