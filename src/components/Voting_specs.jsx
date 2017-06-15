import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Voting from '../../src/compenents/Voting';
import {expect} from 'jest';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(button.length).toBe(2);
    expect(buttons[0].textConent).toBe('Trainspotting');
    expect(buttons[1].textConent).toBe('28 Days Later');
  });
});//describe('voting')
