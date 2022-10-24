<template>
    <!-- your challenges view to show challenges created by self -->
    <div class=" overflow-hidden bg-white shadow sm:rounded-lg bg-gray-100   ">
        <list :dataList="challengesList" :isOptionsAvailable="isOptionsAvailable"></list>
    </div>
</template>

<script>
import challenges from "../data.json";
import list from "@/components/list";
export default {
    name: "manageChallenge",
    components : {
        list
    },
    middleware: 'auth',
    data() {
        return {
            challengesList: '',
            isOptionsAvailable : true
        }
    },
    created() {
        this.challengesList = JSON.parse(localStorage.getItem('jsonData'));
        this.challengesList = this.challengesList.filter((challenge) => challenge.createdBy === 'self');
    },
    methods: {
    }

}
</script>

<style scoped>

</style>