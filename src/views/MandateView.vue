<script setup>
// 定义主持人信息
import {h, onMounted, ref} from "vue";
import useWeb3 from "@/hooks/useWeb3";
import {showNotify} from "vant";

const {web3, contractAddress, voteContract, getAccount} = useWeb3()

console.log(voteContract)
const host = ref("");
// 选民地址
const voterAddress = ref('');


// 获取主持人信息
const getHost = async () => {
  host.value = await voteContract.methods.host().call()
}


// 分发票权
const mandateSend = async () => {
  debugger
  const arr = eval(voterAddress.value); //  eval 将字符串转换为数组
  const account = await getAccount()
  voteContract.methods.mandate(arr).send({
    from: account
  }).on("receipt", () => {
    showNotify({type: 'success', message: '票券分发成功'})
  })
};

onMounted(async () => {
  await getHost()
})

/**
 *  账号地址:
 *  0xc7a8af3dF476DDDEae97435e67369a4c2254AE06
 *  0xDb753211383DbEE35f1eb8e18D7b4D6e6AA6E999
 *  0xad7bC79ab65395159AfC94fc4689F847C1D542f8
 *  0xF072479EEAe653DB8cf0dF9018e67ad1e6c43E3B
 *  ['0xc7a8af3dF476DDDEae97435e67369a4c2254AE06','0xDb753211383DbEE35f1eb8e18D7b4D6e6AA6E999','0xad7bC79ab65395159AfC94fc4689F847C1D542f8','0xF072479EEAe653DB8cf0dF9018e67ad1e6c43E3B']
 */
</script>

<template>
  <div class="box1">
    <van-divider>分发票权</van-divider>
    <div class="host">
      <van-space>
        <p class="label">
          <van-icon name="manager"/>
          主持人地址
        </p>
        <p class="address">{{ host }}</p>
      </van-space>
    </div>
    <div>
      <van-space>
        <p class="label">
          <van-icon name="friends-o"/>
          投票人地址
        </p>
        <textarea class="votors" v-model="voterAddress"></textarea>
      </van-space>
    </div>
    <div class="btn">
      <van-button block @click="mandateSend">开始分发选票</van-button>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>
