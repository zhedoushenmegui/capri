<template>
    <div>
        <capri-header></capri-header>
        <div class="ano-panel" style="max-width: 650px; margin: 25px auto;">
            <h3>欢迎使用capri</h3>
        </div>
    </div>
</template>

<script>
    import capriHeader from './Header';
    export default {
        name: "Home",
        data() {
            return {
            };
        },
        components: {
            capriHeader,
        },
        methods: {
        },
    }
</script>

<style scoped>

</style>