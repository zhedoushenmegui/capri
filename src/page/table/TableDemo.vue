<template>
  <div>
    <capri-base>
      <div class="ano-panel">
        <capri-table v-bind:headers="headers">
          <tr v-for="(row, index) in rows">
            <td>#{{index}}</td>
            <td>{{row.name}}</td>
            <td>{{row.age}}</td>
          </tr>
        </capri-table>
      </div>
    </capri-base>
  </div>

</template>

<script>
import CapriTable from "~/components/Table";
import CapriBase from "../../components/Base";

export default {
  name: "TableDemo",
  components: {CapriBase, CapriTable},
  data: function () {
    return {
      headers: ["#", "name", "age"],
      rows: [
        {name: "Tom", age: 1}, {name: "钟离", age: 2000}
      ]
    }
  },

}
</script>

<style scoped>

</style>