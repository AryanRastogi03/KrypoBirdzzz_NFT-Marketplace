require("@nomiclabs/hardhat-waffle");
const projectId = '6c2bbe76a4eb4e29b6c4a79014d7b4b1'
const fs = require('fs')
const keyData = fs.readFileSync('./p-key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337 
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet: {
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};