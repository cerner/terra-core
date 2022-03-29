import React from 'react';

// IconAdd by default, isBidi: false, isSpin: false
// IconSpinner by default, isBidi: false, isSpin: true
// IconComment by default, isBidi: true, isSpin: false
import IconAdd from '../../src/icon/decorative/IconAdd';
import IconSpinner from '../../src/icon/decorative/IconSpinner';
import IconComment from '../../src/icon/decorative/IconComment';

describe('Icon', () => {
  describe('IconAdd', () => {
    it('should shallow IconBase', () => {
      const wrapper = shallow(<IconAdd />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('height prop', () => {
      it('should have default height="1em"', () => {
        const wrapper = shallow(<IconAdd />);
        expect(wrapper.prop('height')).toEqual('1em');
      });
      it('should have height=50', () => {
        const wrapper = shallow(<IconAdd height="50" />);
        expect(wrapper.prop('height')).toEqual('50');
      });
      it('should have height="4em"', () => {
        const wrapper = shallow(<IconAdd height="4em" />);
        expect(wrapper.prop('height')).toEqual('4em');
      });
    });

    describe('width prop', () => {
      it('should have default width="1em"', () => {
        const wrapper = shallow(<IconAdd />);
        expect(wrapper.prop('width')).toEqual('1em');
      });
      it('should have width=50', () => {
        const wrapper = shallow(<IconAdd width="50" />);
        expect(wrapper.prop('width')).toEqual('50');
      });
      it('should have width="4em"', () => {
        const wrapper = shallow(<IconAdd width="4em" />);
        expect(wrapper.prop('width')).toEqual('4em');
      });
    });

    describe('focusable prop', () => {
      it('should have default focusable="false"', () => {
        const wrapper = shallow(<IconAdd />);
        expect(wrapper.prop('focusable')).toEqual('false');
      });
      it('should have focusable="true"', () => {
        const wrapper = shallow(<IconAdd focusable="true" />);
        expect(wrapper.prop('focusable')).toEqual('true');
      });
    });

    describe('isBidi prop', () => {
      it('should have default isBidi={false}', () => {
        const wrapper = shallow(<IconAdd />);
        expect(wrapper.prop('isBidi')).toEqual(false);
      });
      it('should have isBidi={true}', () => {
        const wrapper = shallow(<IconAdd isBidi />);
        expect(wrapper.prop('isBidi')).toEqual(true);
      });
    });

    describe('isSpin prop', () => {
      it('should have default isSpin={false}', () => {
        const wrapper = shallow(<IconAdd />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
      it('should have isSpin={true}', () => {
        const wrapper = shallow(<IconAdd isSpin />);
        expect(wrapper.prop('isSpin')).toEqual(true);
      });
    });
  });

  describe('IconSpinner', () => {
    it('should shallow IconBase', () => {
      const wrapper = shallow(<IconSpinner />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('height prop', () => {
      it('should have default height="1em"', () => {
        const wrapper = shallow(<IconSpinner />);
        expect(wrapper.prop('height')).toEqual('1em');
      });
      it('should have height=50', () => {
        const wrapper = shallow(<IconSpinner height="50" />);
        expect(wrapper.prop('height')).toEqual('50');
      });
      it('should have height="4em"', () => {
        const wrapper = shallow(<IconSpinner height="4em" />);
        expect(wrapper.prop('height')).toEqual('4em');
      });
    });

    describe('width prop', () => {
      it('should have default width="1em"', () => {
        const wrapper = shallow(<IconSpinner />);
        expect(wrapper.prop('width')).toEqual('1em');
      });
      it('should have width=50', () => {
        const wrapper = shallow(<IconSpinner width="50" />);
        expect(wrapper.prop('width')).toEqual('50');
      });
      it('should have width="4em"', () => {
        const wrapper = shallow(<IconSpinner width="4em" />);
        expect(wrapper.prop('width')).toEqual('4em');
      });
    });

    describe('focusable prop', () => {
      it('should have default focusable="false"', () => {
        const wrapper = shallow(<IconSpinner />);
        expect(wrapper.prop('focusable')).toEqual('false');
      });
      it('should have focusable="true"', () => {
        const wrapper = shallow(<IconSpinner focusable="true" />);
        expect(wrapper.prop('focusable')).toEqual('true');
      });
    });

    describe('isBidi prop', () => {
      it('should have default isBidi={false}', () => {
        const wrapper = shallow(<IconSpinner />);
        expect(wrapper.prop('isBidi')).toEqual(false);
      });
      it('should have isBidi={true}', () => {
        const wrapper = shallow(<IconSpinner isBidi />);
        expect(wrapper.prop('isBidi')).toEqual(true);
      });
    });

    describe('isSpin prop', () => {
      it('should have default isSpin={true}', () => {
        const wrapper = shallow(<IconSpinner />);
        expect(wrapper.prop('isSpin')).toEqual(true);
      });
      it('should have isSpin={false} with override', () => {
        const wrapper = shallow(<IconSpinner isSpin={false} />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
    });
  });

  describe('IconComment', () => {
    it('should shallow IconBase', () => {
      const wrapper = shallow(<IconComment />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render IconBase with custom-class', () => {
      const wrapper = render(<IconComment className="custom-class" />);
      expect(wrapper).toMatchSnapshot();
    });

    describe('height prop', () => {
      it('should have default height="1em"', () => {
        const wrapper = shallow(<IconComment />);
        expect(wrapper.prop('height')).toEqual('1em');
      });
      it('should have height=50', () => {
        const wrapper = shallow(<IconComment height="50" />);
        expect(wrapper.prop('height')).toEqual('50');
      });
      it('should have height="4em"', () => {
        const wrapper = shallow(<IconComment height="4em" />);
        expect(wrapper.prop('height')).toEqual('4em');
      });
    });

    describe('width prop', () => {
      it('should have default width="1em"', () => {
        const wrapper = shallow(<IconComment />);
        expect(wrapper.prop('width')).toEqual('1em');
      });
      it('should have width=50', () => {
        const wrapper = shallow(<IconComment width="50" />);
        expect(wrapper.prop('width')).toEqual('50');
      });
      it('should have width="4em"', () => {
        const wrapper = shallow(<IconComment width="4em" />);
        expect(wrapper.prop('width')).toEqual('4em');
      });
    });

    describe('focusable prop', () => {
      it('should have default focusable="false"', () => {
        const wrapper = shallow(<IconComment />);
        expect(wrapper.prop('focusable')).toEqual('false');
      });
      it('should have focusable={true}', () => {
        const wrapper = shallow(<IconComment focusable="true" />);
        expect(wrapper.prop('focusable')).toEqual('true');
      });
    });

    describe('isBidi prop', () => {
      it('should have default isBidi={true}', () => {
        const wrapper = shallow(<IconComment />);
        expect(wrapper.prop('isBidi')).toEqual(true);
      });
      it('should have isBidi={false} with override', () => {
        const wrapper = shallow(<IconComment isBidi={false} />);
        expect(wrapper.prop('isBidi')).toEqual(false);
      });
    });

    describe('isSpin prop', () => {
      it('should have default isSpin={false}', () => {
        const wrapper = shallow(<IconComment />);
        expect(wrapper.prop('isSpin')).toEqual(false);
      });
      it('should have isSpin={true}', () => {
        const wrapper = shallow(<IconComment isSpin />);
        expect(wrapper.prop('isSpin')).toEqual(true);
      });
    });
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'clinical-lowlight-theme',
      });
    const wrapper = mount(<IconAdd />);
    expect(wrapper).toMatchSnapshot();
  });
});
