<template>
    <div>
        <table class="table-condensed table table-striped table-bordered table-hover" style="border-radius: 0.25rem">
            <thead style="color: aliceblue;background:linear-gradient(120deg, #6699CC 10%, #6187ff 90%) ">
                <tr v-if="headers.length">
                    <th v-for="(h, $index) in headers">{{ h }}</th>
                </tr>
            </thead>
            <tbody style="background: linear-gradient(120deg, #eeeeee 10%, #ffffff 90%) ">
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "CapriTable",
        props: {
            headers: Array,
        },
    }
</script>

<style scoped>

</style>