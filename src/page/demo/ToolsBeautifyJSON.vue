<template>
    <div>
        <capri-base>
            <div style="margin-bottom: 15px">
                <el-button type="primary" @click="beautify">格式化</el-button>
                <el-button type="warning" @click="clear">清空</el-button>
            </div>
            <el-input
                    type="textarea"
                    v-model="textarea"
                    :rows="rows"
            >
            </el-input>
        </capri-base>
    </div>
    
</template>

<script>
    import CapriBase from '~/components/Base';
    import beauty_json from "~/utils/beauty_json";
    export default {
        name: "ToolsBeautifyJSON",
        data() {
            return {
                tabPosition: 'left',
                textarea: '',
                rows: '50'
            }
        },
        components: {
            CapriBase
        },
        methods: {
            beautify() {
                let success = false;
                let rst = '';
                try {
                    let obj = JSON.parse(this.textarea);
                    console.log(obj)
                    rst = beauty_json.jb(obj);
                }catch (e) {
                    this.$message(
                        {
                            message: '数据格式有问题',
                            type: 'error'
                        }
                    );
                    return false;
                }
                this.textarea = rst;
                let arr = rst.split("\n");
                this.rows = Math.max(50, arr.length+15);
                for(let i=0; i<arr.length; i++) {
                    this.rows += Math.floor(arr[i].length/160);
                }
                console.log(arr.length);

            },
            clear() {
                this.textarea = '';
            }
        },
    }
</script>

<style scoped>

</style>