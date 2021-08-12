const eciesjs = require("eciesjs");
const PrivateKey = eciesjs.PrivateKey;

const ethers = require("ethers");
const utils = ethers.utils;


const readline = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function getVanityAddr(prefix) {

    let flag = false;
    let privKey, address, addressPrefix;
    let counter = 0;

    if (prefix.length > 40) {
        console.log("Prefix is too long buddy, ain't no address longer than 40 characters");
        return;
    }

    if(!isHex(prefix)) {
        console.log("What kind of prefix is that lol.\nAddresses can only start with hexadecimal characters...");
        return;
    }

    console.log(`Gotchya. One address coming right up!`);

    while (!flag) {

        privKey = new PrivateKey();
        address = calcEthAddressFromPrivKey(privKey);

        addressPrefix = address.slice(0, prefix.length);

        if (addressPrefix.toUpperCase() === prefix.toUpperCase()) {
            console.log(`I found an address that starts with ${prefix}!\n
                Private key: ${privKey.toHex()}\n
                Address: 0x${address}`);

            flag = true;

        } else {
            counter++;
            if (counter % 100 === 0) {
                console.log(`I've made ${counter} tries so far, almost there..`);
            }
        }
    }
}

function calcEthAddressFromPrivKey(privKey) {

    let uncompressedPubKey = privKey.publicKey.toHex(false);
    let pubKetWithNoEncoding = uncompressedPubKey.slice(2);
    return utils.keccak256(`0x${pubKetWithNoEncoding}`).slice(-40);
}

function isHex(str) {

    let regExp = new RegExp(`[0-9a-fA-F]+`);
    return regExp.test(str);
}

function main() {

    console.log(`\nWelcome to Caslu's vanity address generator!
        \nHere you can input a prefix of any length, and I will grind away looking for the first address that starts with your prefix!`);

    console.log(`Keep in mind that the probability of me finding your desired address decreases exponentially the longer your prefix is!\n
    I suggest you use a prefix with maximum 6 characters, using more will be a punishment to your poor machine..`);

    readline.question(`Gimme a prefix and I'll see what I can do ;)\nPrefix: `, prefix => {

        getVanityAddr(prefix);
        readline.close();
    });
}
main();