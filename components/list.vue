<template>
    <div  v-if="challengesList.length" class="sm:p-3">
        <li  v-for="( challenge,index) in challengesList" :key="challenge.challengeId"
            class="bg-white my-8 px-4 py-6 shadow sm:rounded-lg sm:p-6 xl:ml-80 lg:ml-28 md:ml-28 sm:ml-2 sm:w-5/6 md:w4/6 lg:w-2/3 xl:w-3/6 ">
            <!-- show the list of challenges created -->
            <article :aria-labelledby="challenge.challengeId">
                <div class="md:flex">
                    <div class="flex flex-col w-1/4 py-2">
                       <div class="flex" v-if="challenge.createdBy === 'self'">
                        <span 
                            class="mb-2 inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                            <svg class="mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                            My Challenge
                        </span>
                       </div>
                       <!-- Reusable component to render UI for up voted and views count   -->
                        <counter :countData="challenge"></counter>
                        <div class="flex flex-col">
                            <button @click="upVote(index)" type="button"
                                class="pl-2 py-1 inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <span class="material-icons">
                                    thumb_up_alt
                                </span>
                            </button>
                            <h3 class="pl-2"> {{challenge.votesCount}} </h3>
                            <button @click="downVote(index)" type="button"
                                class="pl-2 py-1 inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <span class="material-icons">
                                    thumb_down_alt
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="w-3/4">
                        <div class="flex space-x-3">
                            <div class="flex-shrink-0">
                                <span
                                    class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
                                    <span class="text-xs font-medium leading-none text-white uppercase">
                                        {{getInitials(challenge.employeeName)}}
                                    </span>
                                </span>
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-gray-900 capitalize">
                                    <span>{{ challenge.employeeName }}</span>
                                </p>
                                <p class="text-sm text-gray-500">
                                    <a>
                                        <time :datetime="challenge.creationDate">{{ challenge.creationDate | formatDate
                                        }}</time>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 :id="challenge.challengeId" class="mt-4 text-base font-medium text-gray-900 capitalize">
                                {{ challenge.title}}</h2>
                        </div>
                        <div class="mt-2 space-y-4 text-sm text-gray-700" v-html="challenge.description" />
                        <div class="mt-6 flex justify-between space-x-8">
                            <div class="flex flex-wrap">
                                <!-- Reusable component to render tags array with remove option  -->
                                <tags :tagsList="challenge.tags"></tags>
                            </div>
                        </div>
                    </div>
                    <div v-if="isOptionsAvailable" class="flex">
                        <button @click="editChallenge(index,challenge)" type="button"
                            class="pl-2 py-1 inline-flex space-x-2 text-indigo-400 hover:text-indigo-500">
                            <span class="material-icons">
                                edit
                            </span>
                        </button>
                        <button @click="deleteChallenge(index)" type="button"
                            class="pl-2 py-1 inline-flex space-x-2 text-red-400 hover:text-red-500">
                            <span class="material-icons">
                                delete
                            </span>
                        </button>
                    </div>
                </div>
            </article>
        </li>
    </div>
    <div v-else class="text-center pb-2 px-3 mx-3">
        <span style="font-size: xxx-large;" class="material-icons mx-auto h-12 w-12 text-gray-400">
                playlist_add
            </span>
        <h3 class="mt-2 text-sm font-medium text-gray-900">No Challenges</h3>
        <p class="mt-1 text-sm text-gray-500">Get started by creating a new challenge.</p>
        <div class="mt-6">
        <button @click="navigate"  type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="material-icons">
                add
            </span>
            New Challenge
        </button>
    </div>
  </div>
</template>

<script>
import tags from "@/components/tags";
import counter from "@/components/count";
export default {
    name: "ListCompo",
    components: {
        tags, // reusable component to display the tags array
        counter // reusable component to show the up voted and views count
    },
    props: ['dataList','isOptionsAvailable'],
    middleware: 'auth',
    data() {
        return {
            challengesList: this.dataList,
            initialList: [...this.dataList],
        }
    },
    filters: {
        formatDate(date) {
            return new Date(date).toLocaleString();
        }
    },
    mounted() {
        this.challengesList.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
        console.log(this.challengesList);
    },
    methods: {
        getInitials(fullName) {
            return fullName && fullName.split(" ").map(name => name.charAt(0)).join("")
        },
        upVote(index) {
            console.log(index);
            this.challengesList[index].votesCount++;
        },
        downVote(index) {
            if (this.challengesList[index].votesCount !== 0) this.challengesList[index].votesCount--;
        },
        editChallenge(index,challenge) {
            this.$store.commit("setEditChallenge", { isEdit: true, index: index, challenge: challenge });
            this.$router.push("/createChallenge");
        },
        deleteChallenge(index) {
            this.challengesList.splice(index, 1);
            this.$root.$emit('updateData');
        },
        navigate() {
            this.$router.push("/createChallenge");
        }
    }
}
</script>
<style scoped>
.margin_left {
    margin-left: 25% !important;
}

li {
    list-style-type: none;
}

.active_tab {
    --tw-border-opacity: 1;
    border-color: rgb(236 72 153 / var(--tw-border-opacity));
}

/* On screens that are 600px or less, set the background color to olive */
@media (min-width: 640px) {
     /* .margin_left {
    margin-left: 0% !important;
  } */
}/* 

@screen sm {
  .section-full-width-right > .container > .row > .col-lg-6:last-child {
    @apply absolute left-half;
  }
} */
</style>