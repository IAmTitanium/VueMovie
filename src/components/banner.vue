<template>
    <div>
      <div class="logo">
        <p><span style="font-size: 40px; color: #595959">Hard core</span>&nbsp;JuGe</p>
      </div>
      <vue-typed-js :strings="['可遇不可求的事','后海有树的院子','夏代有工的玉','此时此刻的云','二十来岁的你']"
                    :typeSpeed="110"
                    :backSpeed="150"
                    :loop="true"
                    class="text">
        <p><span class="typing"></span></p>
      </vue-typed-js>
    </div>
</template>
<script>
    export default {
        data(){
           return{

           }
        }
    }
</script>

<style scoped>

</style>
