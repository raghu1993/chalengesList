import { createLocalVue, shallowMount } from '@vue/test-utils'
import TagCompo from '@/components/tags'

describe('TagCompo', () => {
  it('Tag list count to be reduced when called remove tag', () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(TagCompo, {
      localVue,
      propsData: {
        tagsList: [
            "Feature",
            "Tech",
            "Information",
            "Task"
        ],
        isRemove: []
      }
    })
    wrapper.vm.removeTag(1);
    expect(wrapper.vm.tagsList.length).toBe(3);
  })
})