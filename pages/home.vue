<template>
<div class=" overflow-hidden bg-white shadow sm:rounded-lg bg-gray-100   ">
        <div class="block sm:block flex">
            <!-- Filter challenges -->
            <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow cursor-pointer	" aria-label="Tabs">
                <a @click="filterList(tab.value,tabIdx)"  v-for="(tab, tabIdx) in tabs" :key="tab.name" 
                class="group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"    
                :class="[tab.current ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700']">
                    <span>{{ tab.name }}</span>
                </a>
            </nav>
        </div>
        <!-- list component to render challenges -->
        <list :dataList="challengesList" :isOptionsAvailable="isOptionsAvailable" ></list>
</div>
</template>

<script>
import challenges from "../data.json";
import tags from "@/components/tags";
import counter from "@/components/count";
export default {
    name: "home",
    components: {
        tags, // reusable component to display the tags array
        counter // reusable component to show the up voted and views count
    },
    middleware: 'auth', // prevent navigation if the user not signed in and authenticate login
    data() {
        return {
            challengesList: '',
            tabs: [
                { name: 'Recent Challenge', value: 'desDate', current: true },
                { name: 'Oldest Challenge', value: 'ascDate', current: false },
                { name: 'Most Voted', value: 'votesCount', current: false },
                
            ],
            isOptionsAvailable : false
        }
    },
    created() {
    if(!localStorage.getItem('jsonData')){
        localStorage.setItem('jsonData',
            JSON.stringify(challenges.list)
        );
    }
        this.challengesList = JSON.parse(localStorage.getItem('jsonData'));
        this.$root.$on('updateData', () => {
            console.log("data update");
            localStorage.setItem('jsonData',
                JSON.stringify(this.challengesList)
            );
        })
    },
    methods: {
        // filter list based on the user selection
        filterList(value, tabIdx) {
            this.tabs.forEach((tab) => tab.current = false);
            this.tabs[tabIdx].current = true;
            this.challengesList.sort((a, b) => {
                if (value === 'desDate') {
                    return new Date(b.creationDate) - new Date(a.creationDate);
                }   
                else if (value === 'ascDate') return new Date(a.creationDate) - new Date(b.creationDate);
                else if (value === 'votesCount') return b[value] - a[value];
            })
        },
    }
}
</script>
<style scoped>
.margin_left{
    margin-left: 20% !important;
    
}
li{
    list-style-type: none;
}
.active_tab{
    --tw-border-opacity: 1;
    border-color: rgb(236 72 153 / var(--tw-border-opacity));
}
</style>