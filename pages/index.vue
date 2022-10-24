<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 ">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="../static/scripbox.png" alt="scrip box" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Log in to your account</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-gray-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form id="form1" class="p-10 bg-white rounded-lg drop-shadow-lg space-y-4" @click="login()" action="javascript:void(0)" >
          <div>
            <label for="Employee Id" class="block text-sm font-medium text-gray-700">Employee Id</label>
            <div class="mt-1">
              <input id="employeeId" type="text" required
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          
          <div>
            <button type="submit"  
              class=" flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Log In
            </button>
          </div>
        </form>
        
      </div>
    </div>

    <div class="main">
      <div class="box1"></div>  
      <div class="box2"></div>  
      <div class="box3"></div>  
      <div class="box4"></div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    this.$store.commit("setAppState", false); // set app state to false for authentication
    if (localStorage.getItem('isUserLoggedIn') === 'true') {
      this.$store.commit("setAppState", true);
      this.$router.push("/home");
    } else localStorage.setItem('isUserLoggedIn', false);
  },
  methods: {
    login() {
      document.getElementById("form1").submit();
      let value = document.getElementById("employeeId").value;
      if (value) {
        this.$store.commit("setAppState", true);
        this.$router.push("/home");
        localStorage.setItem('isUserLoggedIn', true);
      }
    }
  }
}
</script>
<style scoped>
.main{
  border : 1px solid black;
  height: 400px;
  width: 400px;
  position: relative;
}
.box1{
  height: 100px;
    width: 100px;
    border: 1px solid black;
    position: absolute;
    top: 0;
      right: 0;
}
.box2{
  height: 100px;
    width: 100px;
    border: 1px solid black;
    position: absolute;
    top: 0;
    left : 0
}
.box3{
  height: 100px;
    width: 100px;
    border: 1px solid black;
    position: absolute;
    bottom: 0;
    right: 0;
}
.box4{
  height: 100px;
    width: 100px;
    border: 1px solid black;
    position: absolute;
    bottom: 0;
      left: 0;
}
</style>
