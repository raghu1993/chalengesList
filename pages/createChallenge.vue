<template class="">
    <div class=" lg:col-span-9 lg:px-4 bg-gray-100 mx-4 p-4">
        <section aria-labelledby="payment-details-heading">
            <!-- Form to post or create challenges -->
            <form @submit="createChallenge($event)" action="javascript:void(0)">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="bg-white py-6 px-4 sm:p-6">
                        <div>
                            <h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-gray-900">Post a challenge
                            </h2>
                            <p class="mt-1 text-sm text-gray-500">Create a new challenge / idea.</p>
                        </div>
        
                        <div class="mt-6 grid grid-cols-4 gap-6">

                            <div class="col-span-12 sm:col-span-2">
                                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                                <input v-model="firstName" type="text" name="first-name" id="first-name" autocomplete required
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                            </div>
                            
                            <div class="col-span-12 sm:col-span-2">
                                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                                <input  v-model="lastName" type="text" name="last-name" id="last-name" autocomplete required
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                            </div>

                            <div class="col-span-12 ">
                                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                                <input v-model="title" type="text" name="title" id="title" autocomplete required
                                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm" />
                            </div>

                            <div class="col-span-12 ">
                                <label for="description" class="block text-sm font-medium text-gray-700">Add your Description</label>
                                <div class="mt-1 border border-gray-300 ">
                                    <textarea v-model="description" rows="4" name="description" id="description" autocomplete required
                                        class=" py-2 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="col-span-12 ">
                                <!-- <label for="comment" class="block text-sm font-medium text-gray-700">Tags</label> -->
                                <div class="flex flex-wrap">
                                    <div>
                                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Tag</label>
                                        <select v-model="userSelectedTag" @change="selectedTag(userSelectedTag)" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option  v-for="(tag,index) in tags" :key="index" :value="tag"> {{tag}} </option>                                    
                                        </select>
                                    </div> 
                                    <div class="pt-8 pl-3">
                                        <!-- Reusable component to render tags array with remove option  -->
                                        <tags :tagsList="selectedTags" :isRemove="true"></tags>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2">Save Challenge</button>
                    </div>
                </div>
            </form>
        </section>
        <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
            <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
                <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
                <transition enter-active-class="transform ease-out duration-300 transition"
                    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
                    leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-if="show"
                        class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="p-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <span class="material-icons h-6 w-6 text-green-400">
                                        check_circle_outline
                                    </span>
                                </div>
                                <div class="ml-3 w-0 flex-1 pt-0.5">
                                    <p class="text-sm font-medium text-gray-900">Challenge Successfully saved!</p>
                                </div>
                                <div class="ml-4 flex flex-shrink-0">
                                    <button type="button" @click="show = false"
                                        class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <span class="sr-only">Close</span>
                                        <span class="material-icons h-6 w-6">
                                            close
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import challenges from "../data.json";
import tags from "@/components/tags";
export default {
    name: "createChallenge",
    components : {
        tags // reusable component to display the tags array
    },
    middleware: 'auth', // prevent navigation if the user not signed in and authenticate login
    data() {
        return {
            firstName : "",
            lastName : "",
            title: "",
            description: "",
            tags: ["Feature",
                "Tech",
                "Information",
                "Task"],
            votesCount: 0,
            views: 0,
            challengesList: challenges.list,
            show : false,
            selectedTags : [],
            userSelectedTag : '',
            isEdit: false,
            editIndex : 0
        }
    },
    created() {
        //  same page handling for creating / updating challenges 
        let storeData = this.$store.state.editChallenge;
        this.isEdit = storeData.isEdit;
        this.editIndex = storeData.index;
        console.log(storeData);
        if (this.isEdit) {
            this.firstName = storeData.challenge.employeeName.split(" ")[0];
            this.lastName = storeData.challenge.employeeName.split(" ")[1];
            this.title = storeData.challenge.title;
            this.description = storeData.challenge.description;
            this.tags = storeData.challenge.tags;
            this.votesCount = storeData.challenge.votesCount;
            this.views = storeData.challenge.views;
            this.selectedTags = [...storeData.challenge.tags];
        }
    },
    beforeDestroy() {
        // executed before destroy of the page and reset the store values
        this.$store.commit("setEditChallenge", { isEdit: false, index: 0, challenge: {} });
    },
    methods: {
        // Create a challenge once all the fields are filled
        createChallenge(e) {
            if (this.firstName != "" && this.lastName != "" && this.title != "" && this.description != "" && this.selectedTags.length) {
                e.preventDefault();
                let data = {
                    "employeeName": this.firstName + " " + this.lastName,
                    "title": this.title,
                    "description": this.description,
                    "tags": this.selectedTags,
                    "votesCount": this.votesCount,
                    "views": this.views,
                    "creationDate": new Date().toISOString(),
                    "challengeId": Math.random().toString(36).slice(2),
                    "employeeId": Math.random().toString(36).slice(2),
                    "createdBy" : "self"
                };
                console.log(data);
                if (this.isEdit) this.challengesList[this.editIndex] = data;
                else this.challengesList.push(data);
                this.show = true;
                setTimeout(() => {
                    this.show = false;
                    this.$router.push("/home");
                }, 1000);
                let arr = JSON.parse(localStorage.getItem('jsonData'));
                arr.push(data);
                localStorage.setItem('jsonData', JSON.stringify(arr))
                
            }
        },
        selectedTag(tag){
            if(!this.selectedTags.includes(tag)) this.selectedTags.push(tag);
        }
    }

}
</script>

<style scoped>

</style>