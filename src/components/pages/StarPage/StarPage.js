import React, {Component} from 'react';

import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';
import styles from './RegisterPage.scss';


const StarPage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            스타기업 코스
          </h1>
          <h2>
            열공
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default StarPage;