require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'heavy prize flee venture strong radar prefer purity gentle light army gas'; 
let testAccounts = [
"0xccde6613b74bb754d78532ad222fafb66c26b9f927678f8be06fe3bf520c1b36",
"0x35956403696b7975e9274bb79eeeae075fa6567c5661473e0404af3cdbc2362c",
"0x082cd5c00a8bf21989321cf86f08e297a966058122784c730a93a56fb6ae87f0",
"0xb0ca658209443ab305296dfb840683fd77a531c7bd2ed7757727b1fdaf059d1f",
"0x8e7156f0f2944c0b2c51c162078fd75ee654898b2588b565813cdfbbf84f1a19",
"0xdef9143e7ea4d5b00f266486ed89fce265c0ccbb07125c0f9ed2bdcdb6ee2c00",
"0xdc7ca241234fac825d657ee957c436b503a144863d45fc3fe32cc2d66375ae16",
"0xc405781e9f12230b81752401edcfb594fd4ae88e50008e5211f2045c4e5c711a",
"0xa9d7eb38eb2017946398b02fe06be76b0a2894597371d6c94f3fb2efff4de6b5",
"0x8cf33683cff2d46b3c45568f6b6d9270195dcecb4c36b8b2a2f86a48cfb6b46a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


