import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SearchBox from '../SearchBox';

describe('Component <SearchBox />', () => {
    it ('contains a <button> and not contain <input> control', () => {
      const wrapper = shallow(<SearchBox buttonTest='Search' />);
      expect(wrapper.find('button')).to.have.length(1);
      expect(wrapper.find('input')).to.have.length(0);
    });

    it ('should have an initial filter state', () => {
      const wrapper = mount(<SearchBox />);
      expect(wrapper.state().filter).to.equal('');
    });

    it ('should have an initial showBox state', () => {
      const wrapper = mount(<SearchBox />);
      expect(wrapper.state().showBox).to.equal(false);
    });

    it('should update showBox state on clicking the search button', () => {
      const wrapper = mount(<SearchBox/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.state().showBox).to.equal(true);
    });

    it('should contains a <input> on clicking the search button', () => {
      const wrapper = mount(<SearchBox/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('input')).to.have.length(1);
    });
});
