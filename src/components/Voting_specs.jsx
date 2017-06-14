import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Voting from '../../src/compenents/Voting';
import {expect} from 'chair';
describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(button.length).to.equal(2);
    expect(buttons[0].textConent).to.equal('Trainspotting');
    expect(buttons[1].textConent).to.equal('28 Days Later');
  });
});//describe('voting')
