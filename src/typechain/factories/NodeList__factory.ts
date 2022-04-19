/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NodeList } from "../NodeList";

export class NodeList__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<NodeList> {
    return super.deploy(overrides || {}) as Promise<NodeList>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NodeList {
    return super.attach(address) as NodeList;
  }
  connect(signer: Signer): NodeList__factory {
    return super.connect(signer) as NodeList__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NodeList {
    return new Contract(address, _abi, signerOrProvider) as NodeList;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldEpoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newEpoch",
        type: "uint256",
      },
    ],
    name: "EpochChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "publicKey",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
    ],
    name: "NodeListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "clearAllEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "k",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prevEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentEpochDetails",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "declaredIp",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "position",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pubKx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pubKy",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "tmP2PListenAddress",
            type: "string",
          },
          {
            internalType: "string",
            name: "p2pListenAddress",
            type: "string",
          },
        ],
        internalType: "struct NodeList.Details[]",
        name: "nodes",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getEpochInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "k",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "nodeList",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "prevEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextEpoch",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
    ],
    name: "getNodeDetails",
    outputs: [
      {
        internalType: "string",
        name: "declaredIp",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tmP2PListenAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "p2pListenAddress",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "getNodes",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oldEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newEpoch",
        type: "uint256",
      },
    ],
    name: "getPssStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "declaredIp",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pubKx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubKy",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tmP2PListenAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "p2pListenAddress",
        type: "string",
      },
    ],
    name: "listNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nodeDetails",
    outputs: [
      {
        internalType: "string",
        name: "declaredIp",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubKx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubKy",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tmP2PListenAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "p2pListenAddress",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
    ],
    name: "nodeRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pssStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newEpoch",
        type: "uint256",
      },
    ],
    name: "setCurrentEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "n",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "k",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "t",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "nodeList",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "prevEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextEpoch",
        type: "uint256",
      },
    ],
    name: "updateEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oldEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "updatePssStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nodeAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "updateWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506121ac806100206000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80637d22c35c116100d8578063bafb35811161008c578063f2fde38b11610066578063f2fde38b146103f8578063fad151631461040b578063fe4b84df1461041357610182565b8063bafb358114610397578063bf2d6f81146103ba578063c7aa8ff7146103cd57610182565b806386470e9e116100bd57806386470e9e146103565780638da5cb5b14610369578063ae4df20c1461038457610182565b80637d22c35c1461031e578063859da85f1461033157610182565b806347de074f1161013a5780636967ac51116101145780636967ac51146102fa578063715018a61461030d578063766718081461031557610182565b806347de074f146102635780634b25bfce1461028357806352fc47b4146102c157610182565b80631dd6b9b11161016b5780631dd6b9b1146101cb5780633894228e146101e05780633d4602a91461025057610182565b80630c56e48f14610187578063135022c2146101a5575b600080fd5b61018f610426565b60405161019c9190611f8b565b60405180910390f35b6101b86101b3366004611c5d565b6107a5565b60405161019c97969594939291906120ec565b6101de6101d9366004611c5d565b6108e4565b005b6102236101ee366004611c5d565b606760205260009081526040902080546001820154600283015460038401546005850154600690950154939492939192909186565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161019c565b6101de61025e366004611ca0565b610983565b610276610271366004611c5d565b610a54565b60405161019c9190611f78565b6102b1610291366004611c75565b606660209081526000928352604080842090915290825290205460ff1681565b604051901515815260200161019c565b6102ec6102cf366004611d98565b606960209081526000928352604080842090915290825290205481565b60405190815260200161019c565b6101de610308366004611db9565b610b06565b6101de610c00565b6102ec60655481565b6102b161032c366004611c75565b610ca4565b61034461033f366004611c3c565b610cd1565b60405161019c96959493929190612094565b6102b1610364366004611c75565b610e9d565b6033546040516001600160a01b03909116815260200161019c565b6101de610392366004611de4565b610f29565b6103aa6103a5366004611c3c565b611058565b60405161019c949392919061204a565b6101de6103c8366004611ce3565b6112b2565b6102ec6103db366004611d98565b600091825260696020908152604080842092845291905290205490565b6101de610406366004611c3c565b6115ed565b6101de61171f565b6101de610421366004611c5d565b611784565b606554600090815260676020908152604080832060040180548251818502810185019093528083526060949383018282801561048b57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161046d575b505050505090506000815167ffffffffffffffff8111156104bc57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561052657816020015b6105136040518060c001604052806060815260200160008152602001600081526020016000815260200160608152602001606081525090565b8152602001906001900390816104da5790505b50905060005b825181101561079e576068600084838151811061055957634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206040518060c001604052908160008201805461059c9061212d565b80601f01602080910402602001604051908101604052809291908181526020018280546105c89061212d565b80156106155780601f106105ea57610100808354040283529160200191610615565b820191906000526020600020905b8154815290600101906020018083116105f857829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820154815260200160048201805461064c9061212d565b80601f01602080910402602001604051908101604052809291908181526020018280546106789061212d565b80156106c55780601f1061069a576101008083540402835291602001916106c5565b820191906000526020600020905b8154815290600101906020018083116106a857829003601f168201915b505050505081526020016005820180546106de9061212d565b80601f016020809104026020016040519081016040528092919081815260200182805461070a9061212d565b80156107575780601f1061072c57610100808354040283529160200191610757565b820191906000526020600020905b81548152906001019060200180831161073a57829003601f168201915b50505050508152505082828151811061078057634e487b7160e01b600052603260045260246000fd5b6020026020010181905250808061079690612162565b91505061052c565b5091505090565b60008080806060818087806107f45760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064015b60405180910390fd5b6000898152606760209081526040808320815160e081018352815481526001820154818501526002820154818401526003820154606082015260048201805484518187028101870190955280855291949293608086019390929083018282801561088757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610869575b50505050508152602001600582015481526020016006820154815250509050806000015181602001518260400151836060015184608001518560a001518660c0015198509850985098509850985098505050919395979092949650565b6033546001600160a01b0316331461093e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107eb565b606580549082905560408051828152602081018490527f528990bbb5369a7f6d5acab41233e32bddb4882673d0208805b59cbad0dc1ec8910160405180910390a15050565b6033546001600160a01b031633146109dd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107eb565b8280610a1e5760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064016107eb565b5060009283526066602090815260408085206001600160a01b039490941685529290529120805460ff1916911515919091179055565b60608180610a975760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064016107eb565b60008381526067602090815260409182902060040180548351818402810184019094528084529091830182828015610af857602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ada575b505050505091505b50919050565b6033546001600160a01b03163314610b605760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107eb565b8280610ba15760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064016107eb565b8280610be25760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064016107eb565b50506000928352606960209081526040808520938552929052912055565b6033546001600160a01b03163314610c5a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107eb565b6033546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380546001600160a01b0319169055565b60008281526066602090815260408083206001600160a01b038516845290915290205460ff165b92915050565b606860205260009081526040902080548190610cec9061212d565b80601f0160208091040260200160405190810160405280929190818152602001828054610d189061212d565b8015610d655780601f10610d3a57610100808354040283529160200191610d65565b820191906000526020600020905b815481529060010190602001808311610d4857829003601f168201915b505050505090806001015490806002015490806003015490806004018054610d8c9061212d565b80601f0160208091040260200160405190810160405280929190818152602001828054610db89061212d565b8015610e055780601f10610dda57610100808354040283529160200191610e05565b820191906000526020600020905b815481529060010190602001808311610de857829003601f168201915b505050505090806005018054610e1a9061212d565b80601f0160208091040260200160405190810160405280929190818152602001828054610e469061212d565b8015610e935780601f10610e6857610100808354040283529160200191610e93565b820191906000526020600020905b815481529060010190602001808311610e7657829003601f168201915b5050505050905086565b6000828152606760205260408120815b6004820154811015610f1e57836001600160a01b0316826004018281548110610ee657634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415610f0c57600192505050610ccb565b80610f1681612162565b915050610ead565b506000949350505050565b6033546001600160a01b03163314610f835760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107eb565b8680610fc45760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064016107eb565b6040805160e08101825289815260208082018a81528284018a8152606084018a8152608085018a815260a086018a905260c0860189905260008f81526067865296909620855181559251600184015590516002830155516003820155925180519293926110379260048501920190611ad1565b5060a0820151600582015560c0909101516006909101555050505050505050565b606060006060806110986040518060c001604052806060815260200160008152602001600081526020016000815260200160608152602001606081525090565b6001600160a01b03861660009081526068602052604090819020815160c081019092528054829082906110ca9061212d565b80601f01602080910402602001604051908101604052809291908181526020018280546110f69061212d565b80156111435780601f1061111857610100808354040283529160200191611143565b820191906000526020600020905b81548152906001019060200180831161112657829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820154815260200160048201805461117a9061212d565b80601f01602080910402602001604051908101604052809291908181526020018280546111a69061212d565b80156111f35780601f106111c8576101008083540402835291602001916111f3565b820191906000526020600020905b8154815290600101906020018083116111d657829003601f168201915b5050505050815260200160058201805461120c9061212d565b80601f01602080910402602001604051908101604052809291908181526020018280546112389061212d565b80156112855780601f1061125a57610100808354040283529160200191611285565b820191906000526020600020905b81548152906001019060200180831161126857829003601f168201915b50505091909252505081516020830151608084015160a090940151919a9099509297509550909350505050565b886112bd8133610ca4565b6113095760405162461bcd60e51b815260206004820181905260248201527f4e6f64652069736e27742077686974656c697374656420666f722065706f636860448201526064016107eb565b898061134a5760405162461bcd60e51b815260206004820152601060248201526f045706f63682063616e277420626520360841b60448201526064016107eb565b60008b8152606760205260409020548b9081146113a95760405162461bcd60e51b815260206004820152601560248201527f45706f636820616c72656164792063726561746564000000000000000000000060448201526064016107eb565b6113b38c33610e9d565b156114005760405162461bcd60e51b815260206004820152601a60248201527f4e6f646520697320616c7265616479207265676973746572656400000000000060448201526064016107eb565b60008c81526067602090815260408083206004810180546001810182559085529383902090930180546001600160a01b03191633179055805160e0601f8f018490049093028101830190915260c081018d815290918291908f908f9081908501838280828437600092019190915250505090825250600483015460208083019190915260408083018e9052606083018d90528051601f8c018390048302810183019091528a8152608090920191908b908b9081908401838280828437600092019190915250505090825250604080516020601f8a0181900481028201810190925288815291810191908990899081908401838280828437600092018290525093909452505033815260686020908152604090912083518051919350611529928492910190611b36565b5060208281015160018301556040830151600283015560608301516003830155608083015180516115609260048501920190611b36565b5060a0820151805161157c916005840191602090910190611b36565b509050507fe2f8adb0f494dc82ccf446c031763ef3762d6396d51664611ed89aac0117339e338e83600401805490506040516115d6939291906001600160a01b039390931683526020830191909152604082015260600190565b60405180910390a150505050505050505050505050565b6033546001600160a01b031633146116475760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107eb565b6001600160a01b0381166116c35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016107eb565b6033546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380546001600160a01b0319166001600160a01b0392909216919091179055565b60005b60655481116117815760008181526067602052604081208181556001810182905560028101829055600381018290559061175f6004830182611baa565b506000600582018190556006909101558061177981612162565b915050611722565b50565b600054610100900460ff168061179d575060005460ff16155b6118005760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016107eb565b600054610100900460ff1615801561182b576000805460ff1961ff0019909116610100171660011790555b61183361184e565b6065829055801561184a576000805461ff00191690555b5050565b600054610100900460ff1680611867575060005460ff16155b6118ca5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016107eb565b600054610100900460ff161580156118f5576000805460ff1961ff0019909116610100171660011790555b6118fd611919565b6119056119d3565b8015611781576000805461ff001916905550565b600054610100900460ff1680611932575060005460ff16155b6119955760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016107eb565b600054610100900460ff16158015611905576000805460ff1961ff0019909116610100171660011790558015611781576000805461ff001916905550565b600054610100900460ff16806119ec575060005460ff16155b611a4f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016107eb565b600054610100900460ff16158015611a7a576000805460ff1961ff0019909116610100171660011790555b603380546001600160a01b0319163390811790915560405181906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015611781576000805461ff001916905550565b828054828255906000526020600020908101928215611b26579160200282015b82811115611b2657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611af1565b50611b32929150611bc4565b5090565b828054611b429061212d565b90600052602060002090601f016020900481019282611b645760008555611b26565b82601f10611b7d57805160ff1916838001178555611b26565b82800160010185558215611b26579182015b82811115611b26578251825591602001919060010190611b8f565b508054600082559060005260206000209081019061178191905b5b80821115611b325760008155600101611bc5565b80356001600160a01b0381168114611bf057600080fd5b919050565b60008083601f840112611c06578182fd5b50813567ffffffffffffffff811115611c1d578182fd5b602083019150836020828501011115611c3557600080fd5b9250929050565b600060208284031215611c4d578081fd5b611c5682611bd9565b9392505050565b600060208284031215611c6e578081fd5b5035919050565b60008060408385031215611c87578081fd5b82359150611c9760208401611bd9565b90509250929050565b600080600060608486031215611cb4578081fd5b83359250611cc460208501611bd9565b915060408401358015158114611cd8578182fd5b809150509250925092565b600080600080600080600080600060c08a8c031215611d00578485fd5b8935985060208a013567ffffffffffffffff80821115611d1e578687fd5b611d2a8d838e01611bf5565b909a50985060408c0135975060608c0135965060808c0135915080821115611d50578586fd5b611d5c8d838e01611bf5565b909650945060a08c0135915080821115611d74578384fd5b50611d818c828d01611bf5565b915080935050809150509295985092959850929598565b60008060408385031215611daa578182fd5b50508035926020909101359150565b600080600060608486031215611dcd578283fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a031215611dfe578283fd5b8735965060208089013596506040890135955060608901359450608089013567ffffffffffffffff80821115611e32578586fd5b818b0191508b601f830112611e45578586fd5b813581811115611e5757611e57612189565b838102604051601f19603f83011681018181108582111715611e7b57611e7b612189565b806040525080935082815285810193508585018f87848801011115611e9e57898afd5b8995505b83861015611ec757611eb381611bd9565b855260019590950194938601938601611ea2565b509b9e9a9d50989b979a9960a0890135995060c090980135979650505050505050565b6000815180845260208085019450808401835b83811015611f225781516001600160a01b031687529582019590820190600101611efd565b509495945050505050565b60008151808452815b81811015611f5257602081850181015186830182015201611f36565b81811115611f635782602083870101525b50601f01601f19169290920160200192915050565b600060208252611c566020830184611eea565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561203c57603f19898403018552815160c08151818652611fd582870182611f2d565b9150508882015189860152878201518886015260608083015181870152506080808301518683038288015261200a8382611f2d565b9250505060a080830151925085820381870152506120288183611f2d565b968901969450505090860190600101611faf565b509098975050505050505050565b60006080825261205d6080830187611f2d565b85602084015282810360408401526120758186611f2d565b905082810360608401526120898185611f2d565b979650505050505050565b600060c082526120a760c0830189611f2d565b87602084015286604084015285606084015282810360808401526120cb8186611f2d565b905082810360a08401526120df8185611f2d565b9998505050505050505050565b600088825287602083015286604083015285606083015260e0608083015261211760e0830186611eea565b60a08301949094525060c0015295945050505050565b60028104600182168061214157607f821691505b60208210811415610b0057634e487b7160e01b600052602260045260246000fd5b600060001982141561218257634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000802000a";
