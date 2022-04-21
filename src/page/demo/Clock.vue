<template>
  <div>
    <capri-base>
      <div class="ano-panel">
        <p id="tmPanel">
          <span :class="stm[0]">{{tm[0]}}</span>
          <span :class="stm[1]">{{tm[1]}}</span>
          <span :class="stm[6]">:</span>
          <span :class="stm[2]">{{tm[2]}}</span>
          <span :class="stm[3]">{{tm[3]}}</span>
          <span :class="stm[6]">:</span>
          <span :class="stm[4]">{{tm[4]}}</span>
          <span :class="stm[5]">{{tm[5]}}</span>
        </p>
      </div>
    </capri-base>
  </div>

</template>

<script>
import CapriBase from "~/components/Base"

export default {
  name: "Clock",
  data: function (){

    return {
      tm: '000000',
      stm: ['bf', 'bf', 'bf', 'bf', 'bf', 'bf', 'bf'],
      count: new Date().getMilliseconds()%13,
    }
  },
  components: {CapriBase},
  created() {
    const v = this;
    setInterval(function () {
      v.count ++;
      let b = new Date();
      let h = b.getHours();
      v.tm = '';
      v.tm += h>9?1:0;
      v.tm += h%10;
      let m = b.getMinutes();
      v.tm += Math.floor(m/10);
      v.tm += m%10;
      let s = b.getSeconds();
      v.tm += Math.floor(s/10);
      v.tm += s%10;

      for(let i=0; i<7; i++) {
        v.stm[i] = 'bf';
      }
      v.stm[6] = v.count % 2===1?'wf':'bf';
      v.stm[v.count % 6] = 'wf';

    }, 500)
  },
}
</script>

<style scoped>

</style>