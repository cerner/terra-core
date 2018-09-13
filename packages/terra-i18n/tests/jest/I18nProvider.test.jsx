/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import I18nProvider from '../../src/I18nProvider';

describe('I18nProvider', () => {
  const locale = 'en';
  const messages = { Terra: 'Terra' };
  const Children = () => (<div />);

  describe('for snapshot tests', () => {
    it('renders a default I18nProvider', () => {
      const wrapper = shallow(<I18nProvider locale={locale} messages={messages}><Children /></I18nProvider>);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('for error handling tests', () => {
    it('throws error for missing required locale', () => {
      try {
        shallow(<I18nProvider messages={messages}><Children /></I18nProvider>);
      } catch (e) {
        expect(e.message).toContain('The prop `locale` is marked as required');
      }
    });

    it('throws error for missing required messages', () => {
      try {
        shallow(<I18nProvider locale={locale}><Children /></I18nProvider>);
      } catch (e) {
        expect(e.message).toContain('The prop `messages` is marked as required');
      }
    });

    it('throws error for missing required children', () => {
      try {
        shallow(<I18nProvider locale={locale} messages={messages} />);
      } catch (e) {
        expect(e.message).toContain('The prop `children` is marked as required');
      }
    });
  });
});
