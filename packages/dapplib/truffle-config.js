require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remind hospital guess kiwi flock gasp'; 
let testAccounts = [
"0xd748b810a3db7b1f5dee8a6ee7faac35c71a3ae1af926bddd3e590493f6495ac",
"0x07e78dc58ead0c8f6328908db2ec4cce71964d1b764976e99b893e40fdd17c17",
"0xf28a5ad9e187c7bc3e7163f188099b4823f6b4874fbfbea61ab0fe56e9d6eaba",
"0x77c58a6c2f601f0ab2c5944221463912b1764e8da251a151a68043c0e6f33d41",
"0x9a4e03e408d4547b0911b06135671dfd96cfd90cd45e68aa2dc6f948dcfa3a7a",
"0x7b86b9dc5c7f958907f5e85bed9503029114753a584599377758065652379a9e",
"0xe1ba510adee7e1e41d1458b94528578d3bbb9608aafb2360d96ea38e3c093508",
"0xbac5fff23e5639b79cf2ea4e3144af972b5332f4af93e54f875d46a4c5e65c49",
"0x2e8bb9c9c7d6ee7964ff6f9002b29dc9d5419526c07ddcb2ff29c613f38cb65b",
"0x1c2e12c4116d32d59016eb9294c2370ae501999b0e79549e532ab5755956504f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

