<template>
  <div>
   
    <listeBlog :blogs="blogs" />
  </div>
</template>
<script>
import listeBlog from "../components/listeBlog.vue";


export default {
  name: "myBlog",
  components: {
    listeBlog,
   
  },
  data() {
    return {
      blogs: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/blog/all")
      .then((res) => {
      console.log(res);
        this.blogs = res.data.blogs;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style></style>
