import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import themeMode from '@/components/theme/themeMode';

describe('themeMode.vue', () => {
  it('isDarkMode should be false', () => {
    const wrapper = shallowMount(themeMode)

    expect(wrapper.find('.toggle_label').text()).to.contain('Light');
    expect(wrapper.vm.isDarkMode).to.be.false;
  }),
  it('set Dark Mode to true', () => {
    const wrapper = shallowMount(themeMode)
    wrapper.find('#switchInput').setChecked();

    expect(wrapper.vm.isDarkMode).to.be.true;
  })
  it('localStorage is true on check', () => {
    const wrapper = shallowMount(themeMode)
    wrapper.find('#switchInput').setChecked();
    
    expect(JSON.parse(window.localStorage.getItem("isDarkMode"))).to.be.true;
  })
  it('localStorage is false on uncheck', () => {
    const wrapper = shallowMount(themeMode)
    wrapper.find('#switchInput').setChecked();
    wrapper.find('#switchInput').setChecked(false);

    expect(JSON.parse(window.localStorage.getItem("isDarkMode"))).to.be.false;
  })
})
