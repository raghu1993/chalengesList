<template>
    <div class="flex sm:flex-col flex-row">
    <span class="w-28 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800"> 
        {{ countData.votesCount }} votes 
    </span>
    <span class="inline-flex items-center  rounded-md  px-2.5 py-0.5 text-sm font-medium text-gray-400 mt-2"> 
        {{ countData.views }} Views 
    </span>
    </div>
</template>

<script>
export default {
    name: 'counter',
    props: ['countData'] // props data for the component
}
</script>