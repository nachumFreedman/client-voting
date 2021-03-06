import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument
  scryRendersDOMComponentWithTag
} from 'react-addons-test-utils';
import Voting from '../../src/components/voting';
import {expect} from 'chai'

describe('voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <voting pair={["Trainspotting", "28 Days Later"]} />
    );
    const buttons = scryRendersDOMComponentWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting')
    expect(buttons[1].textContent).to.equal('28 Days Later')
  });
});
