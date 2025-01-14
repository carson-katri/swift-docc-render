/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2023 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import { shallowMount } from '@vue/test-utils';
import LocaleSelector from 'docc-render/components/LocaleSelector.vue';

jest.mock('theme/lang/locales.json', () => (
  [
    {
      code: 'en-US',
      name: 'English',
    },
    {
      code: 'zh-CN',
      name: '简体中文',
    },
  ]
));

const { ChevronThickIcon } = LocaleSelector.components;

describe('LocaleSelector', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LocaleSelector);
  });

  it('renders the locale selector', () => {
    expect(wrapper.is('div.locale-selector')).toBe(true);
    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('renders the icon', () => {
    expect(wrapper.find(ChevronThickIcon).exists()).toBe(true);
  });

  it('renders the options with locales\' values and names', () => {
    const options = wrapper.findAll('option');
    expect(options).toHaveLength(2);
    expect(options.at(0).text()).toBe('English');
    expect(options.at(0).attributes('value')).toBe('en-US');

    expect(options.at(1).text()).toBe('简体中文');
    expect(options.at(1).attributes('value')).toBe('zh-CN');
  });
});
