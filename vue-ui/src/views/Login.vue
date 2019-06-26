<template>
  
  <div>
      <p class="loginText">欢迎登录</p>
    <form v-if="!isReg">
      <div>用户名：
      <input type="text" v-model="name">
      </div>
      <div>密码：
      <input type="password" v-model="password">
      </div>
      <button type="button" @click="login">登录</button>
      <button type="button" @click="reg">注册</button>
    </form>
    <form v-else>
      <div>用户名</div>
      <input type="text" v-model="name">
      <div>密码</div>
      <input type="password" v-model="password">
      <div>再次输入密码</div>
      <input type="password" v-model="repeat">
      <button type="button" @click="addUser">确定</button>
      <button type="button" @click="cancel">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  methods: {
    login: function() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        this.name = "";
        this.password = "";
        this.$router.push("./home/list");
      } else {
        alert("用户名或密码不正确");
      }
    },
    reg: function() {
      this.isReg = true;
    },
    cancel: function() {
      this.isReg = false;
    },
    addUser: function() {
      if (this.password === this.repeat) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        this.name = "";
        this.password = "";
        this.isReg = false;
      } else {
        alert("两次密码输入不一致");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.loginText{
    font-weight: 600;
}

</style>
