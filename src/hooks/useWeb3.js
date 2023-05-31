
import Web3 from "web3";
import VoteJSON from "../constracts/Vote.json"

const useWeb3 = ()=>{

    // 实例化web3对象
    const web3 = new Web3(Web3.givenProvider || 'wss://sepolia.infura.io/ws/v3/3985b0cac3454a12ae1816484ad71f98');

    // 合约地址
    const contractAddress = "0x66d3242b0E7104cb33f56bff0E7D7B0f1fF0B9cF"
    console.log(VoteJSON)
    // 参数为合约 abi 和合约地址
    const voteContract = new web3.eth.Contract(VoteJSON.abi,contractAddress)


    // 获取当前账号的地址：
    const getAccount = async ()=>{
        const accounts = await web3.eth.requestAccounts(); // 会获取当前连接小狐狸账号的列表 当前链接的是谁的账号就显示谁的账号
        return accounts[0]
    }

    return{
        web3,
        contractAddress,
        voteContract,
        getAccount
    }
}

export default useWeb3;
