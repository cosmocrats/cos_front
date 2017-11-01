import React from 'react';
import {DoHeader, PolyBackground, Block, DoMain, PageTemplate} from 'components';
import {HeaderContainer} from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate
    header={<HeaderContainer/>}>
    <PolyBackground>
    <Block center shadow>
    <DoMain/>
    </Block>
    </PolyBackground>
    
    
  
    <div className={cx("section2")}>
     <div className={cx("item")}>
			Ai course
     </div>
     <div className={cx("item")}>
			Core course
     </div>
     <div className={cx("item")}>
			Major
     </div>
   </div>



      

    </PageTemplate>
  )
};

export default HomePage;