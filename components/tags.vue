<template>
    <div>
        <!-- Show tags array with remove button -->
        <span v-for="(tag,index) in tagsList" :key="index" class="m-1 inline-flex items-center rounded bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
            {{tag}}
            <button v-if="isRemove" @click="removeTag(index)" type="button" class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none">
                <span class="sr-only">Remove large option</span>
                <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'tags',
    props : ['tagsList','isRemove'], // props data for the component
    methods:{
        // Remove the tags from the selected array.
        removeTag(index){
            this.tagsList.splice(index,1);
        }
    }
}
</script>