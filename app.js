
function generateQR(){
    event.preventDefault();
    var val = document.getElementById("product_id").value;
    console.log(val);
    
    var val = document.getElementById("product_name").value;
    console.log(val);
    let img = document.getElementById("qr-img");
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`;
}

async function connectToWallet(){
    event.preventDefault();
    if(typeof window.ethereum !== undefined){
    acc = await ethereum.request({method:"eth_requestAccounts"});
    }
    console.log(acc[0])
    alert("connected successfully");
  }
  async function insertIntoBlockChain(){
    event.preventDefault();
    ui = document.getElementById("product_id").value;
    un = document.getElementById("product_name").value;

    contract = new ethers.Contract("0xA772B128DA935B516D426b81E1F44CD13016f370",abi,signer);
    res = await contract.add_product_details(ui,un);
    console.log(res);

    hash = res["hash"];
    console.log(hash);
    alert_message = "data inserted into blockchain sucessfully \n transaction hash :"+ hash;
    alert(alert_message);

  }
  async function transferOwnerShip(){
    event.preventDefault()
    ui = document.getElementById("product_id_t").value;
    ua = document.getElementById("receiver_address_t").value;

    contract = new ethers.Contract("0xA772B128DA935B516D426b81E1F44CD13016f370",abi,signer);
    res = await contract.transfer_owner_ship(ui,ua);
    alert("ownership is transferred successfully ");

 }