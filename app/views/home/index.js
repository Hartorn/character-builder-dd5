import React, { PropTypes } from 'react';
// import checkProps from 'react/lib/checkReactTypeSpec';
// const customPropTypes = { truc: PropTypes.string.isRequired };
// checkProps(customPropTypes, props, 'prop', 'test-function');

import Icon from 'focus-components/components/icon';
import Link from '../../components/router/link';
import Card from '../../components/card';
import Carrousel from '../../components/carousel';

import { translate } from 'focus-core/translation';

const HomeView = (props) => {
    const Races = <h3 className='website-title custom-font'>{translate('races.title')}</h3>;
    const Backgrounds = <h3 className='website-title custom-font'>{translate('backgrounds.title')}</h3>;
    const Classes = <h3 className='website-title custom-font'>{translate('classes.title')}</h3>;
    const Generator = <h3 className='website-title custom-font'>{translate('generator.title')}</h3>;

    const races = [{ type: 'races', nbElts: 4 }];
    const classes = [{ type: 'classes', nbElts: 4 }];
    const backgrounds = [{ type: 'backgrounds', nbElts: 4 }];

    const gearStyle = { fontSize: '150px', paddingBottom: '30px', paddingTop: '30px', textAlign: 'center' };

    return (
    <div className='dashboard'>
      <div className='banner' />
      <ul data-dd='empilable'>
        <li>
          <Link to='races'>
            <Card actions={Races}>
              <div className='races item-1' />
            </Card>
          </Link>
        </li>
        <li>
          <Link to='backgrounds'>
            <Card actions={Backgrounds}>
              <div className='backgrounds item-3' />
            </Card>
          </Link>
        </li>
        <li>
          <Link to='classes'>
            <Card actions={Classes}>
              <div className='classes item-1' />
            </Card>
          </Link>
        </li>
        <li>
          <Link to='generator' data-dd='center'>
            <Card actions={Generator} >
              <Icon name={'brightness_low'} style={{ style: gearStyle }} />
            </Card>
          </Link>
        </li>
      </ul>
    </div >
  );
};
HomeView.displayName = 'HomeView';
HomeView.propTypes = {

};
HomeView.defaultProps = {

};

export default HomeView;
