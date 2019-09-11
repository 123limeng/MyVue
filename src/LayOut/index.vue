<template>
  <div>
    <el-container>
      <el-header height="100px">Header</el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/user">用户管理</el-menu-item>
            <el-menu-item index="/personInfo">个人信息</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-footer height="100px">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'LayOut',
  data () {
    return {
      activeIndex: '/',
      MyIndex: '/'
    }
  },
  methods: {
    handleSelect (key) {
      if (key !== this.MyIndex) {
        this.$router.push(key)
        this.MyIndex = key
      }
    }
  }
}
</script>
<style scoped>
.el-header {
  background-color: rgb(10, 31, 59);
  color: rgb(240, 235, 235);
}
.el-footer {
  background-color: rgb(80, 92, 94);
  color: rgb(240, 235, 235);
}

.el-aside {
  width: 100%;
  text-align: center;
  min-height: 650px;
}

.el-main {
  width: 100%;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
