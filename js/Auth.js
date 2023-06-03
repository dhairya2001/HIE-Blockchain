   function Auth() {
    let metamaskId;
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(window.ethereum);
        web3.eth.requestAccounts()
            .then(function(accounts) {
            metamaskId = accounts[0];
            console.log('Metamask ID:', metamaskId);
            document.cookie = "metamaskId="+metamaskId;    
            })
            .catch(function(error) {
            console.error('Error:', error);
        });
    } 
    else {
        alert('Metamask is not installed.');
    }
}