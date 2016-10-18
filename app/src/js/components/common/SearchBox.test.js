import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('Testing component <SearchBox />', () => {
    it (` has Prop 'minLength' with '3' as text`, () => {
      const wrapper = shallow(<SearchBox minLength={3} />);
      expect(wrapper.props().minLength).to.eql(3);
    });
});
