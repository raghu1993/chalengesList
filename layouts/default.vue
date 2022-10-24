<template>
    <div>
        <!-- Static sidebar for desktop -->
        <div v-if="$nuxt.$route.path != '/' " class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                    <div class="flex flex-shrink-0 items-center px-4">
                        <img class="h-8 w-auto" src="../static/scripbox.png"
                            alt="scripbox" />
                    </div>
                    <nav class="mt-5 flex-1 space-y-1 bg-white px-2">
                        <span v-for="(item,index) in navigation" :key="index" @click="handleNavBar(item.value)"
                            :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer']">
                                <span :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" class="material-icons">
                                    {{item.icon}}
                                </span>
                            {{ item.name }}
                        </span>
                    </nav>
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-col" :class="[ $nuxt.$route.path != '/'  ? 'md:pl-64' : '']">
            <main class="flex-1">
                <div class="py-6">
                    <div v-if="$nuxt.$route.path != '/' " class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <div class="min-w-0 flex-1">
                            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate capitalize"> {{pageName}} </h1>
                        </div>
                        
                        <div v-if="$route.path !== '/createChallenge'" class="floating_btn">
                             <button @click="handleNavBar('createChallenge')"  type="button" class="tooltip inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span class="material-icons h-6 w-6">
                                    add 
                                </span>
                                <span class="tooltiptext">Add Challenge</span>
                                
                            </button>
                        </div>
                        
                    </div>
                    <div class="mx-auto">
                        <!-- Render the Nuxt pages  -->
                        <div class="py-4">
                            <nuxt ref="currentContentRef" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: "layout",
    data() {
        return {
            title: "Hack Ideas",
            navigation: [
                { name: 'Challenge List', href: '#', icon: 'home', current: true ,value:'home'},
                { name: 'Create Challenge', href: '#', icon: 'add_circle_outline', current: false, value: 'createChallenge' },
                { name: 'Your Challenge', href: '#', icon: 'list', current: false, value: 'manageChallenge' },
                { name: 'Logout', href: '#', icon: 'logout', current: false, value: 'logout' },
            ],
            
            sidebarOpen : false
        };
    },
    computed: {
        //  Display the page name dynamically when page changes
        pageName() {
            let path = this.$route.name;
            return path.split(/(?=[A-Z])/).join(" ")
            
        }
    },
    watch:{
        // set current tab value true
        $route(){
            this.navigation.forEach((nav) => nav.current = false);
            let index =  this.navigation.map(i => i.value).indexOf(this.$route.name);
            if(index >= 0) this.navigation[index].current = true;
        }
    },
    methods: {
        // Handle click events when user action performed on side nav bar
        handleNavBar(value) {
            if (value === 'home') {
                this.$router.push("/home");
            } else if (value === 'createChallenge') {
                this.$router.push("/createChallenge");
            }
            else if (value === 'manageChallenge') {
                this.$router.push("/manageChallenge");
            }
            else if (value === 'logout') {
                this.$router.push("/");
                localStorage.setItem('isUserLoggedIn', false);
            }
        }
    }
};
</script>

<style scoped>
.floating_btn{
    position: fixed;
    right: 20px;
    bottom: 20px;
}


.tooltip {
  position: relative;
  display: flex;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #4f46e5;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 8px;
  right: 110%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
