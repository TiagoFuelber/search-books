import React from 'react';
import '../../helpers/enzymeAdapter';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { SearchInput } from '../ui/SearchInput/SearchInput';
import { Checkbox } from '../ui/Checkbox/Checkbox';

describe('Renders the Header component', () => {
  let header = null;

  beforeEach(() => {
    header = shallow(<Header />);
  });

  context('Title', () => {
    let title = null;

    beforeEach(() => {
      title = header.find('h1');
    });

    it('Renders the title', () => {
      expect(title).to.have.length(1);
    });

    it('Has the title className', () => {
      expect(title.hasClass('title')).to.be.true;
    });

    it('Renders the correct title text', () => {
      expect(title.text()).to.equal('Search books');
    });
  });

  context('Actions', () => {
    let actionsContainer = null;

    beforeEach(() => {
      actionsContainer = header.find('div.actions');
    });

    it('Renders the SearchInput component', () => {
      expect(actionsContainer.contains(<SearchInput className="search" />)).to
        .be.true;
    });

    it('Renders checkbox to select favourites', () => {
      expect(
        actionsContainer.contains(
          <Checkbox name="favourites" className="favourites" />
        )
      ).to.be.true;
    });
  });
});
