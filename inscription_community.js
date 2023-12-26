const { Contract, Account, ec, constants, json, stark, RpcProvider, Provider, hash, CallData, uint256 } =require("starknet");

const provider = new RpcProvider({ nodeUrl: "add u url" });//


function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}



let mint = async(accountAX, addr)=>{
    let contractAddress = '0x0600386e4cd85d7bb925892b61b14ff019d3dd8e31432f4b97c8ee2462e0375d';
    let str = '{"p":"snsc-20","op":"mint","tick":"stark","amt":"1000"}';
        const mintCall = await accountAX.execute(
            [
            {
                contractAddress: contractAddress,
                entrypoint: "inscription",
                calldata: CallData.compile({
                    _infos: str,
                    _to: addr
                })
            }
            
        ]
        )
        console.log(mintCall.transaction_hash);
        await provider.waitForTransaction(mintCall.transaction_hash);
}






let doing = async() => {
    for(let i=0; i<10; i++){
        
        const privateKeyAX = 'add u private';
        const AXcontractAddress = 'add u address';
        const accountAX_new = new Account(provider, AXcontractAddress, privateKeyAX, '1');
        await mint(accountAX_new, AXcontractAddress);
        await sleep(30*1000);//wait 30s
        

    }
}

doing();







