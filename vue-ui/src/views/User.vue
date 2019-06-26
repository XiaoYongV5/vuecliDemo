<template>
  <div class="centerText">
    <img src="../assets/logo.png">
    <p>欢迎回来 {{showUser}}</p>

    <router-link :to="{name:'add'}" class="btnAdd">添加</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
  data: {
    showUser: localStorage.getItem("name")
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.centerText {
  text-align: center;
}
.btnAdd {
  margin-top: 25px;
  border: 1px solid #42b983;
  color: #42b983;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  line-height: 40px;
  text-decoration: none;
  border-radius: 4px;
}
</style>


