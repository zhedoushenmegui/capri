<template>
    <div>
        <h3>
            <span>{{ H }}</span>
            <span v-if="colonStatus">:</span>
            <span v-else>&nbsp;</span>
            <span>{{ i }}</span>
            <span v-if="colonStatus">:</span>
            <span v-else>&nbsp;</span>
            <span>{{ s }}</span>
            {{ weekdaysCN[weekDay] }} {{ Y }}年{{ m }}月{{ d }}日
        </h3>
    </div>
</template>

<script>
    import time_util from "~/utils/time_util";
    const addZero = time_util.add_zero;
    export default {
        name: "Clock",
        data() {
            return {
                dt: new Date(),
                Y: 2019,
                y: 19,
                m: 11,
                d: 25,
                hour: 10,
                H: 10,
                h: 10,
                i: 48,
                s: 44,
                weekDay: 1,
                weekdaysCN: time_util.weekdaysCN,
                colonStatus: true,
            }
        },
        created() {
            const v = this;
            setInterval(function () {
                let date = v.dt = new Date();
                let Y = v.Y = date.getFullYear()+'';
                let y = v.y = Y.substr(2, 2);
                let m = v.m = addZero(date.getMonth()+1);
                let d = v.d = addZero(date.getDate());
                let day = v.day = date.getDay();
                let hour = v.hour = date.getHours();
                let H = v.H = addZero(hour);
                let h = v.h = addZero(hour>12?hour-12:hour);
                let i = v.i = addZero(date.getMinutes());
                let s = v.s = addZero(date.getSeconds());
                v.colonStatus = !v.colonStatus;
            }, 500)
        }
    }
</script>

<style scoped>

</style>