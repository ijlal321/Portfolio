import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import voting from '../assets/svg/projects/voting.svg'
import nftAuction from '../assets/svg/projects/nft_auction.svg'
import spaceBear from '../assets/svg/projects/spaceBear.jpg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Decentralized Voting System',
        projectDesc: 'This project aims to develop a secure and transparent decentralized voting system, to ensure tamper-proof ballots and real-time vote verification',
        tags: ['React', 'Truffle', 'Solidity'],
        code: 'https://github.com/ijlal321/Decentralized-Voting-System/tree/main',
        demo: 'https://ijlal321.github.io/Decentralized-Voting-System/#/',
        image: voting
    },
    {
        id: 2,
        projectName: 'NFT Auction',
        projectDesc: 'This project provides a ERC721 smart contract that allows you to mint unique NFTs. It also provides an auction contract that allows users to auction of their NFTs..',
        tags: ['NFT', 'Hardhat', 'Solidity'],
        code: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/NFT%20Auction%20--%20Hardhat',
        demo: 'https://ijlal321.github.io/Web3-Projects-Solidity-and-Solana-/NFT%20Auction%20--%20Hardhat/frontend/',
        image: nftAuction
    },
    {
        id: 3,
        projectName: 'Chai Dapp',
        projectDesc: 'This application allows users to "buy chai" by sending Ether to a smart contract, which then stores their message and details on the blockchain.',
        tags: ['Truffle', 'React'],
        code: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/Chai%20Dapp%20--%20Truffle%20React',
        demo: 'https://ijlal321.github.io/Web3-Projects-Solidity-and-Solana-/Chai%20Dapp%20--%20Truffle%20React/client/build/',
        image: three
    },
    {
        id: 4,
        projectName: 'Supply Chain Management System',
        projectDesc: 'Here items can be tracked through different stages: creation, payment, and delivery.',
        tags: ['Flutter', 'Firebase'],
        code: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/Event%20TriggersSupply%20Chain%20Example%20With%20Truffle%20and%20React%20box',
        demo: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/Event%20TriggersSupply%20Chain%20Example%20With%20Truffle%20and%20React%20box',
        image: four
    },
    {
        id: 5,
        projectName: 'Joint Bank Account',
        projectDesc: 'A multi-owner bank account system that allows multiple users to manage and operate a shared account on the Ethereum blockchain',
        tags: ['Hardhat', 'React'],
        code: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/Joint%20Bank%20Account',
        demo: 'https://ijlal321.github.io/Web3-Projects-Solidity-and-Solana-/Joint%20Bank%20Account/client/dist/',
        image: five
    },
    {
        id: 6,
        projectName: 'Spacebear ERC721 Token',
        projectDesc: 'Spacebear is an ERC721 token smart contract that leverages the OpenZeppelin Contracts library.',
        tags: ['OpenZeppelin', 'Solidity', 'Infura'],
        code: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/nft-project',
        demo: 'https://github.com/ijlal321/Web3-Projects-Solidity-and-Solana-/tree/main/nft-project',
        image: spaceBear
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/