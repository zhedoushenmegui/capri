<template>
    <div class="json-viewer">
        <p v-for="(line, index) in text">
            <span class="line-number">{{index}}</span>
            <span>{{line}}</span>
        </p>
    </div>
</template>

<script>
    import RecmdBase from '~/page/recmd/Base'
    import utils from "~/utils/utils";
    import JsonBeautify from "~/utils/beauty_json";

    export default {
        name: "JSONViewer",
        props: {
            obj: Object,
        },
        data() {
            return {
                text: []
            }
        },
        components: {
            RecmdBase
        },
        created() {
            let a = JsonBeautify.jb(this.obj);
            let b = a.split('\n');
            this.text = b;
        },
        methods: {
        }
    }
</script>

<style scoped>
    .json-viewer {
        border: 1px solid gray;
        padding: 10px;
    }
    .json-viewer p {
        margin-bottom: 0px!important;
        font-size: 14px;
    }
    .line-number {
        width: 15px;
        color: dimgrey;
        margin-right: 20px;
        text-align: right;
        display: inline-block;

        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    }
</style>