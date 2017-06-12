import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import Voting from '../../src/compenents/Voting';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
  });
});//describe('voting')
