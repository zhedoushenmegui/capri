<template>
    <div>
        <h1>Page not found</h1>
        <el-link href="/">返回主页</el-link>
        <p>{{ seconds }} s 自动返回主页</p>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        data() {
            return {
                seconds: 5
            }
        },
        mounted() {
            let v = this;
            setInterval(function () {
                if(v.seconds -- <= 0) {
                    location.href = '/';
                    return false;
                }
            }, 1000)
        }
    }
</script>

<style scoped>

</style>