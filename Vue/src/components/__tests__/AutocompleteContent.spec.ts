import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AutocompleteContent from '../AutocompleteContent.vue';

describe('AutocompleteContent', () => {
  it('renders properly', () => {
    const wrapper = mount(AutocompleteContent);
    expect(wrapper.find('#container')).toBeTruthy();
  });
});
