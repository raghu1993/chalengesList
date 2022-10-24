import { createLocalVue, shallowMount } from '@vue/test-utils'
import ListCompo from '@/components/list'

describe('ListCompo', () => {
    let localVue;
    let wrapper;
    beforeEach(() => {
        localVue = createLocalVue()
        wrapper = shallowMount(ListCompo, {
        localVue,
        propsData: {
            dataList: [
            {
                "title": "Title 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.",
                "tags": [
                    "Feature",
                    "Tech",
                    "Information",
                    "Task"
                ],
                "votesCount": "25",
                "views": "37",
                "creationDate": "2022-09-16T18:32:50.611Z",
                "challengeId": "chalId1",
                "employeeName": "Ram K",
                "employeeId": "sc20Ra120",
                "createdBy": "self"
            },
            {
                "title": "Title 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.",
                "tags": [
                    "Feature",
                    "Tech",
                    "Information",
                    "Task"
                ],
                "votesCount": "29",
                "views": "150",
                "creationDate": "2022-09-15T19:15:55.611Z",
                "challengeId": "chalId3",
                "employeeName": "Lakshmi Naryan",
                "employeeId": "sc20La130",
                "createdBy": "other"
            },
            {
                "title": "Title 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.",
                "tags": [
                    "Feature",
                    "Tech",
                    "Information",
                    "Task"
                ],
                "votesCount": "143",
                "views": "224",
                "creationDate": "2022-09-15T14:20:14.611Z",
                "challengeId": "chalId2",
                "employeeName": "Ram K",
                "employeeId": "sc20Ra120",
                "createdBy": "self"
            },
            {
                "title": "Title 5",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.",
                "tags": [
                    "Feature",
                    "Tech",
                    "Information",
                    "Task"
                ],
                "votesCount": "12",
                "views": "147",
                "creationDate": "2022-09-15T10:33:11.611Z",
                "challengeId": "chalId5",
                "employeeName": "Alex Walton",
                "employeeId": "sc20Al140",
                "createdBy": "other"
            },
            {
                "title": "Title 4",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.",
                "tags": [
                    "Feature",
                    "Tech",
                    "Information",
                    "Task"
                ],
                "votesCount": "478",
                "views": "650",
                "creationDate": "2022-09-02T16:46:24.611Z",
                "challengeId": "chalId4",
                "employeeName": "Malini S",
                "employeeId": "sc20Ma135",
                "createdBy": "other"
            }
        ],
            isOptionsAvailable: []
        }
        })
    })
  it('should return initails', () => {
    expect(wrapper.vm.getInitials("raghavendra cs")).toBe("rc");
  })

  it("should increase count if votes by 1", () => {
    wrapper.vm.upVote(1);
    expect(wrapper.vm.challengesList[1].votesCount).toBe(30);
  })

  it("should increase count if votes by 1", () => {
    wrapper.vm.downVote(1);
    expect(wrapper.vm.challengesList[1].votesCount).toBe(28);
  })

  it("should delete a challenge", () => {
    wrapper.vm.deleteChallenge(1);
    expect(wrapper.vm.challengesList.length).toBe(4)
  })
})