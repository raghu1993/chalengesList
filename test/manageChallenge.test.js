import { createLocalVue, shallowMount } from '@vue/test-utils'
import ManageChallenge from '@/pages/manageChallenge'

describe('TagCompo', () => {
    it('Tag list count to be reduced when called remove tag', () => {
        const localVue = createLocalVue()
        const wrapper = shallowMount(ManageChallenge, {
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
        expect(wrapper.vm.challengesList.length).toBe(2);
    })
})