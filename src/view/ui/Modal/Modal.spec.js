import React from 'react';
import { fake } from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Renders the Modal component', () => {
  let modal = null;
  const callback = fake();

  beforeEach(() => {
    modal = shallow(
      <Modal onClose={callback}>
        <h1>Teste modal</h1>
        <p>Testando modal</p>
      </Modal>
    );
  });

  it('Should exist the modal', () => {
    expect(modal).to.have.length(1);
  });

  it('Should render the children', () => {
    expect(modal.find('h1')).to.have.length(1);
    expect(modal.find('h1').text()).to.be.equal('Teste modal');
    expect(modal.find('p')).to.have.length(1);
    expect(modal.find('p').text()).to.be.equal('Testando modal');
  });

  it('Should exist the close button', () => {
    expect(modal.find('.close')).to.have.length(1);
  });

  it('Should call onClose callback when clicked the close button', () => {
    modal.find('.close').simulate('click');
    expect(callback.calledOnce).to.be.true;
  });
});
