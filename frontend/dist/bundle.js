(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={"abi": [{"inputs": [], "name": "amountBtcDown", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "amountBtcUp", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "collateralBtcDown", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "collateralBtcUp", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getBtcDownPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getBtcPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getBtcUpPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getBtcdownBalance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getBtcupBalance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLeveragedTokens", "type": "uint256"}], "name": "initiatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLeveragedTokens", "type": "uint256"}], "name": "issueBtcDown", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLeveragedTokens", "type": "uint256"}], "name": "issueBtcUp", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "lastBtcPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "poolIsInitiated", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "priceBtcDown", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "priceBtcUp", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "rebalanceLeveragedTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLeveragedTokens", "type": "uint256"}], "name": "redeemBtcDown", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amountLeveragedTokens", "type": "uint256"}], "name": "redeemBtcUp", "outputs": [], "stateMutability": "nonpayable", "type": "function"}], "allSourcePaths": {"0": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/token/ERC20/ERC20.sol", "1": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/token/ERC20/IERC20.sol", "2": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/token/ERC20/extensions/IERC20Metadata.sol", "3": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/Context.sol", "4": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "5": "/home/alex/.brownie/packages/smartcontractkit/chainlink@1.3.0/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol", "6": "contracts/LeveragedTrading.sol"}, "ast": {"absolutePath": "contracts/LeveragedTrading.sol", "exportedSymbols": {"AggregatorV3Interface": [1671], "BTCDOWN": [123], "BTCUP": [79], "ERC20": [1313], "IERC20": [35], "LeveragedTrading": [767], "SafeMath": [1625]}, "id": 768, "license": "MIT", "nodeType": "SourceUnit", "nodes": [{"id": 1, "literals": ["solidity", "^", "0.8", ".0"], "nodeType": "PragmaDirective", "src": "32:23:6"}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/token/ERC20/ERC20.sol", "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol", "id": 3, "nodeType": "ImportDirective", "scope": 768, "sourceUnit": 1314, "src": "57:70:6", "symbolAliases": [{"foreign": {"id": 2, "name": "ERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "src": "66:5:6", "typeDescriptions": {}}}], "unitAlias": ""}, {"absolutePath": "/home/alex/.brownie/packages/smartcontractkit/chainlink@1.3.0/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol", "file": "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol", "id": 4, "nodeType": "ImportDirective", "scope": 768, "sourceUnit": 1672, "src": "128:76:6", "symbolAliases": [], "unitAlias": ""}, {"absolutePath": "/home/alex/.brownie/packages/OpenZeppelin/openzeppelin-contracts@4.2.0/contracts/utils/math/SafeMath.sol", "file": "@openzeppelin/contracts/utils/math/SafeMath.sol", "id": 5, "nodeType": "ImportDirective", "scope": 768, "sourceUnit": 1626, "src": "205:57:6", "symbolAliases": [], "unitAlias": ""}, {"abstract": false, "baseContracts": [], "contractDependencies": [], "contractKind": "interface", "fullyImplemented": false, "id": 35, "linearizedBaseContracts": [35], "name": "IERC20", "nodeType": "ContractDefinition", "nodes": [{"functionSelector": "a9059cbb", "id": 14, "implemented": false, "kind": "function", "modifiers": [], "name": "transfer", "nodeType": "FunctionDefinition", "parameters": {"id": 10, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 7, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 14, "src": "306:17:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 6, "name": "address", "nodeType": "ElementaryTypeName", "src": "306:7:6", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 9, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 14, "src": "325:14:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 8, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "325:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "305:35:6"}, "returnParameters": {"id": 13, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 12, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 14, "src": "359:4:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 11, "name": "bool", "nodeType": "ElementaryTypeName", "src": "359:4:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "358:6:6"}, "scope": 35, "src": "288:77:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "23b872dd", "id": 25, "implemented": false, "kind": "function", "modifiers": [], "name": "transferFrom", "nodeType": "FunctionDefinition", "parameters": {"id": 21, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 16, "mutability": "mutable", "name": "sender", "nodeType": "VariableDeclaration", "scope": 25, "src": "392:14:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 15, "name": "address", "nodeType": "ElementaryTypeName", "src": "392:7:6", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 18, "mutability": "mutable", "name": "recipient", "nodeType": "VariableDeclaration", "scope": 25, "src": "408:17:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 17, "name": "address", "nodeType": "ElementaryTypeName", "src": "408:7:6", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 20, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 25, "src": "427:14:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 19, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "427:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "391:51:6"}, "returnParameters": {"id": 24, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 23, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 25, "src": "461:4:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 22, "name": "bool", "nodeType": "ElementaryTypeName", "src": "461:4:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "460:6:6"}, "scope": 35, "src": "370:97:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}, {"functionSelector": "095ea7b3", "id": 34, "implemented": false, "kind": "function", "modifiers": [], "name": "approve", "nodeType": "FunctionDefinition", "parameters": {"id": 30, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 27, "mutability": "mutable", "name": "spender", "nodeType": "VariableDeclaration", "scope": 34, "src": "489:15:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 26, "name": "address", "nodeType": "ElementaryTypeName", "src": "489:7:6", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "visibility": "internal"}, {"constant": false, "id": 29, "mutability": "mutable", "name": "amount", "nodeType": "VariableDeclaration", "scope": 34, "src": "506:14:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 28, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "506:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "488:33:6"}, "returnParameters": {"id": 33, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 32, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 34, "src": "540:4:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 31, "name": "bool", "nodeType": "ElementaryTypeName", "src": "540:4:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "visibility": "internal"}], "src": "539:6:6"}, "scope": 35, "src": "472:74:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "external"}], "scope": 768, "src": "265:283:6"}, {"abstract": false, "baseContracts": [{"baseName": {"id": 36, "name": "ERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 1313, "src": "568:5:6"}, "id": 37, "nodeType": "InheritanceSpecifier", "src": "568:5:6"}], "contractDependencies": [1313, 1749, 1774, 1795], "contractKind": "contract", "fullyImplemented": true, "id": 79, "linearizedBaseContracts": [79, 1313, 1774, 1749, 1795], "name": "BTCUP", "nodeType": "ContractDefinition", "nodes": [{"body": {"id": 44, "nodeType": "Block", "src": "623:14:6", "statements": []}, "id": 45, "implemented": true, "kind": "constructor", "modifiers": [{"arguments": [{"hexValue": "426974636f696e205570", "id": 40, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "600:12:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_9cbc1d0721872492c3eae100dd6a7dad3b4b199dc4e72a46010b2b1c98a11964", "typeString": "literal_string \"Bitcoin Up\""}, "value": "Bitcoin Up"}, {"hexValue": "4254435550", "id": 41, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "614:7:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_f92903022a172a42cae03bdc1621474c2ab6bc2b8980d8251e05283c61f8c975", "typeString": "literal_string \"BTCUP\""}, "value": "BTCUP"}], "id": 42, "modifierName": {"id": 39, "name": "ERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 1313, "src": "594:5:6"}, "nodeType": "ModifierInvocation", "src": "594:28:6"}], "name": "", "nodeType": "FunctionDefinition", "parameters": {"id": 38, "nodeType": "ParameterList", "parameters": [], "src": "591:2:6"}, "returnParameters": {"id": 43, "nodeType": "ParameterList", "parameters": [], "src": "623:0:6"}, "scope": 79, "src": "580:57:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 56, "nodeType": "Block", "src": "682:43:6", "statements": [{"expression": {"arguments": [{"expression": {"id": 51, "name": "tx", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -26, "src": "698:2:6", "typeDescriptions": {"typeIdentifier": "t_magic_transaction", "typeString": "tx"}}, "id": 52, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "origin", "nodeType": "MemberAccess", "src": "698:9:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 53, "name": "quantity", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 47, "src": "709:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 50, "name": "_mint", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 1173, "src": "692:5:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$", "typeString": "function (address,uint256)"}}, "id": 54, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "692:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 55, "nodeType": "ExpressionStatement", "src": "692:26:6"}]}, "functionSelector": "a0712d68", "id": 57, "implemented": true, "kind": "function", "modifiers": [], "name": "mint", "nodeType": "FunctionDefinition", "parameters": {"id": 48, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 47, "mutability": "mutable", "name": "quantity", "nodeType": "VariableDeclaration", "scope": 57, "src": "657:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 46, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "657:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "656:18:6"}, "returnParameters": {"id": 49, "nodeType": "ParameterList", "parameters": [], "src": "682:0:6"}, "scope": 79, "src": "643:82:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 68, "nodeType": "Block", "src": "770:43:6", "statements": [{"expression": {"arguments": [{"expression": {"id": 63, "name": "tx", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -26, "src": "786:2:6", "typeDescriptions": {"typeIdentifier": "t_magic_transaction", "typeString": "tx"}}, "id": 64, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "origin", "nodeType": "MemberAccess", "src": "786:9:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 65, "name": "quantity", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 59, "src": "797:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 62, "name": "_burn", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 1245, "src": "780:5:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$", "typeString": "function (address,uint256)"}}, "id": 66, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "780:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 67, "nodeType": "ExpressionStatement", "src": "780:26:6"}]}, "functionSelector": "42966c68", "id": 69, "implemented": true, "kind": "function", "modifiers": [], "name": "burn", "nodeType": "FunctionDefinition", "parameters": {"id": 60, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 59, "mutability": "mutable", "name": "quantity", "nodeType": "VariableDeclaration", "scope": 69, "src": "745:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 58, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "745:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "744:18:6"}, "returnParameters": {"id": 61, "nodeType": "ParameterList", "parameters": [], "src": "770:0:6"}, "scope": 79, "src": "731:82:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"baseFunctions": [842], "body": {"id": 77, "nodeType": "Block", "src": "876:25:6", "statements": [{"expression": {"hexValue": "36", "id": 75, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "893:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "functionReturnParameters": 74, "id": 76, "nodeType": "Return", "src": "886:8:6"}]}, "functionSelector": "313ce567", "id": 78, "implemented": true, "kind": "function", "modifiers": [], "name": "decimals", "nodeType": "FunctionDefinition", "overrides": {"id": 71, "nodeType": "OverrideSpecifier", "overrides": [], "src": "851:8:6"}, "parameters": {"id": 70, "nodeType": "ParameterList", "parameters": [], "src": "836:2:6"}, "returnParameters": {"id": 74, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 73, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 78, "src": "869:5:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint8", "typeString": "uint8"}, "typeName": {"id": 72, "name": "uint8", "nodeType": "ElementaryTypeName", "src": "869:5:6", "typeDescriptions": {"typeIdentifier": "t_uint8", "typeString": "uint8"}}, "visibility": "internal"}], "src": "868:7:6"}, "scope": 79, "src": "819:82:6", "stateMutability": "view", "virtual": false, "visibility": "public"}], "scope": 768, "src": "550:353:6"}, {"abstract": false, "baseContracts": [{"baseName": {"id": 80, "name": "ERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 1313, "src": "926:5:6"}, "id": 81, "nodeType": "InheritanceSpecifier", "src": "926:5:6"}], "contractDependencies": [1313, 1749, 1774, 1795], "contractKind": "contract", "fullyImplemented": true, "id": 123, "linearizedBaseContracts": [123, 1313, 1774, 1749, 1795], "name": "BTCDOWN", "nodeType": "ContractDefinition", "nodes": [{"body": {"id": 88, "nodeType": "Block", "src": "985:7:6", "statements": []}, "id": 89, "implemented": true, "kind": "constructor", "modifiers": [{"arguments": [{"hexValue": "426974636f696e20446f776e", "id": 84, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "958:14:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_165fe89d7acd7320260d3007f731660e2a452d2e9dbef2c2e44ee15c6b8bc1ec", "typeString": "literal_string \"Bitcoin Down\""}, "value": "Bitcoin Down"}, {"hexValue": "425443444f574e", "id": 85, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "974:9:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_72f3d7098f717fcc170dbb6c7dad0b9049f1ed825e03177180edf7a0240d28f2", "typeString": "literal_string \"BTCDOWN\""}, "value": "BTCDOWN"}], "id": 86, "modifierName": {"id": 83, "name": "ERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 1313, "src": "952:5:6"}, "nodeType": "ModifierInvocation", "src": "952:32:6"}], "name": "", "nodeType": "FunctionDefinition", "parameters": {"id": 82, "nodeType": "ParameterList", "parameters": [], "src": "949:2:6"}, "returnParameters": {"id": 87, "nodeType": "ParameterList", "parameters": [], "src": "985:0:6"}, "scope": 123, "src": "938:54:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 100, "nodeType": "Block", "src": "1037:43:6", "statements": [{"expression": {"arguments": [{"expression": {"id": 95, "name": "tx", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -26, "src": "1053:2:6", "typeDescriptions": {"typeIdentifier": "t_magic_transaction", "typeString": "tx"}}, "id": 96, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "origin", "nodeType": "MemberAccess", "src": "1053:9:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 97, "name": "quantity", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 91, "src": "1064:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 94, "name": "_mint", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 1173, "src": "1047:5:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$", "typeString": "function (address,uint256)"}}, "id": 98, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1047:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 99, "nodeType": "ExpressionStatement", "src": "1047:26:6"}]}, "functionSelector": "a0712d68", "id": 101, "implemented": true, "kind": "function", "modifiers": [], "name": "mint", "nodeType": "FunctionDefinition", "parameters": {"id": 92, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 91, "mutability": "mutable", "name": "quantity", "nodeType": "VariableDeclaration", "scope": 101, "src": "1012:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 90, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1012:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "1011:18:6"}, "returnParameters": {"id": 93, "nodeType": "ParameterList", "parameters": [], "src": "1037:0:6"}, "scope": 123, "src": "998:82:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 112, "nodeType": "Block", "src": "1125:43:6", "statements": [{"expression": {"arguments": [{"expression": {"id": 107, "name": "tx", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -26, "src": "1141:2:6", "typeDescriptions": {"typeIdentifier": "t_magic_transaction", "typeString": "tx"}}, "id": 108, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "origin", "nodeType": "MemberAccess", "src": "1141:9:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 109, "name": "quantity", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 103, "src": "1152:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 106, "name": "_burn", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 1245, "src": "1135:5:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$", "typeString": "function (address,uint256)"}}, "id": 110, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "1135:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 111, "nodeType": "ExpressionStatement", "src": "1135:26:6"}]}, "functionSelector": "42966c68", "id": 113, "implemented": true, "kind": "function", "modifiers": [], "name": "burn", "nodeType": "FunctionDefinition", "parameters": {"id": 104, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 103, "mutability": "mutable", "name": "quantity", "nodeType": "VariableDeclaration", "scope": 113, "src": "1100:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 102, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1100:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "1099:18:6"}, "returnParameters": {"id": 105, "nodeType": "ParameterList", "parameters": [], "src": "1125:0:6"}, "scope": 123, "src": "1086:82:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"baseFunctions": [842], "body": {"id": 121, "nodeType": "Block", "src": "1231:25:6", "statements": [{"expression": {"hexValue": "36", "id": 119, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1248:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "functionReturnParameters": 118, "id": 120, "nodeType": "Return", "src": "1241:8:6"}]}, "functionSelector": "313ce567", "id": 122, "implemented": true, "kind": "function", "modifiers": [], "name": "decimals", "nodeType": "FunctionDefinition", "overrides": {"id": 115, "nodeType": "OverrideSpecifier", "overrides": [], "src": "1206:8:6"}, "parameters": {"id": 114, "nodeType": "ParameterList", "parameters": [], "src": "1191:2:6"}, "returnParameters": {"id": 118, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 117, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 122, "src": "1224:5:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint8", "typeString": "uint8"}, "typeName": {"id": 116, "name": "uint8", "nodeType": "ElementaryTypeName", "src": "1224:5:6", "typeDescriptions": {"typeIdentifier": "t_uint8", "typeString": "uint8"}}, "visibility": "internal"}], "src": "1223:7:6"}, "scope": 123, "src": "1174:82:6", "stateMutability": "view", "virtual": false, "visibility": "public"}], "scope": 768, "src": "906:352:6"}, {"abstract": false, "baseContracts": [], "contractDependencies": [79, 123], "contractKind": "contract", "fullyImplemented": true, "id": 767, "linearizedBaseContracts": [767], "name": "LeveragedTrading", "nodeType": "ContractDefinition", "nodes": [{"id": 126, "libraryName": {"id": 124, "name": "SafeMath", "nodeType": "IdentifierPath", "referencedDeclaration": 1625, "src": "1298:8:6"}, "nodeType": "UsingForDirective", "src": "1292:27:6", "typeName": {"id": 125, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1311:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}}, {"constant": false, "functionSelector": "3074fff7", "id": 129, "mutability": "mutable", "name": "poolIsInitiated", "nodeType": "VariableDeclaration", "scope": 767, "src": "1325:35:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "typeName": {"id": 127, "name": "bool", "nodeType": "ElementaryTypeName", "src": "1325:4:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "value": {"hexValue": "66616c7365", "id": 128, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "1355:5:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "false"}, "visibility": "public"}, {"constant": false, "functionSelector": "f0156e8a", "id": 134, "mutability": "mutable", "name": "priceBtcUp", "nodeType": "VariableDeclaration", "scope": 767, "src": "1367:35:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 130, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1367:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 133, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 131, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1395:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 132, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1401:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "1395:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "visibility": "public"}, {"constant": false, "functionSelector": "0c3e5343", "id": 139, "mutability": "mutable", "name": "priceBtcDown", "nodeType": "VariableDeclaration", "scope": 767, "src": "1408:37:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 135, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1408:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 138, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 136, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1438:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 137, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1444:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "1438:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "visibility": "public"}, {"constant": false, "functionSelector": "dde7be2c", "id": 142, "mutability": "mutable", "name": "collateralBtcUp", "nodeType": "VariableDeclaration", "scope": 767, "src": "1473:34:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 140, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1473:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 141, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1506:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "14d7c6d2", "id": 145, "mutability": "mutable", "name": "collateralBtcDown", "nodeType": "VariableDeclaration", "scope": 767, "src": "1535:36:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 143, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1535:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 144, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1570:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "0034b9cc", "id": 148, "mutability": "mutable", "name": "amountBtcUp", "nodeType": "VariableDeclaration", "scope": 767, "src": "1578:30:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 146, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1578:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 147, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1607:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "b75cbe0b", "id": 151, "mutability": "mutable", "name": "amountBtcDown", "nodeType": "VariableDeclaration", "scope": 767, "src": "1638:32:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 149, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1638:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 150, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1669:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "functionSelector": "f4352c57", "id": 154, "mutability": "mutable", "name": "lastBtcPrice", "nodeType": "VariableDeclaration", "scope": 767, "src": "1699:31:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 152, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "1699:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "value": {"hexValue": "30", "id": 153, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1729:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "visibility": "public"}, {"constant": false, "id": 157, "mutability": "mutable", "name": "addressUsdc", "nodeType": "VariableDeclaration", "scope": 767, "src": "1780:64:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 155, "name": "address", "nodeType": "ElementaryTypeName", "src": "1780:7:6", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307862376134463345393039374330386441303935313762356142383737463761393137323234656465", "id": 156, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1802:42:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"}, "visibility": "internal"}, {"constant": false, "id": 160, "mutability": "mutable", "name": "addressBtcUSDFeed", "nodeType": "VariableDeclaration", "scope": 767, "src": "1910:71:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "typeName": {"id": 158, "name": "address", "nodeType": "ElementaryTypeName", "src": "1910:7:6", "stateMutability": "nonpayable", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, "value": {"hexValue": "307836313335623133333235626643344230303237384234616243356532306262636532443635383065", "id": 159, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "1939:42:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}, "value": "0x6135b13325bfC4B00278B4abC5e20bbce2D6580e"}, "visibility": "internal"}, {"constant": false, "id": 167, "mutability": "mutable", "name": "btcUp", "nodeType": "VariableDeclaration", "scope": 767, "src": "2057:25:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}, "typeName": {"id": 162, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 161, "name": "BTCUP", "nodeType": "IdentifierPath", "referencedDeclaration": 79, "src": "2057:5:6"}, "referencedDeclaration": 79, "src": "2057:5:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}}, "value": {"arguments": [], "expression": {"argumentTypes": [], "id": 165, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "NewExpression", "src": "2071:9:6", "typeDescriptions": {"typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_BTCUP_$79_$", "typeString": "function () returns (contract BTCUP)"}, "typeName": {"id": 164, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 163, "name": "BTCUP", "nodeType": "IdentifierPath", "referencedDeclaration": 79, "src": "2075:5:6"}, "referencedDeclaration": 79, "src": "2075:5:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}}}, "id": 166, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2071:11:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}}, "visibility": "internal"}, {"constant": false, "id": 174, "mutability": "mutable", "name": "btcDown", "nodeType": "VariableDeclaration", "scope": 767, "src": "2088:31:6", "stateVariable": true, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}, "typeName": {"id": 169, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 168, "name": "BTCDOWN", "nodeType": "IdentifierPath", "referencedDeclaration": 123, "src": "2088:7:6"}, "referencedDeclaration": 123, "src": "2088:7:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}}, "value": {"arguments": [], "expression": {"argumentTypes": [], "id": 172, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "NewExpression", "src": "2106:11:6", "typeDescriptions": {"typeIdentifier": "t_function_creation_nonpayable$__$returns$_t_contract$_BTCDOWN_$123_$", "typeString": "function () returns (contract BTCDOWN)"}, "typeName": {"id": 171, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 170, "name": "BTCDOWN", "nodeType": "IdentifierPath", "referencedDeclaration": 123, "src": "2110:7:6"}, "referencedDeclaration": 123, "src": "2110:7:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}}}, "id": 173, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2106:13:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}}, "visibility": "internal"}, {"body": {"id": 197, "nodeType": "Block", "src": "2187:199:6", "statements": [{"expression": {"arguments": [{"id": 181, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "UnaryOperation", "operator": "!", "prefix": true, "src": "2205:16:6", "subExpression": {"id": 180, "name": "poolIsInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 129, "src": "2206:15:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "54686520706f6f6c2077617320616c726561647920696e697469617465642e", "id": 182, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2223:33:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_580e872a0bf3ae438081ad6284342a647742aae71fdfc53b8a10245734a22e81", "typeString": "literal_string \"The pool was already initiated.\""}, "value": "The pool was already initiated."}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_580e872a0bf3ae438081ad6284342a647742aae71fdfc53b8a10245734a22e81", "typeString": "literal_string \"The pool was already initiated.\""}], "id": 179, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2197:7:6", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 183, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2197:60:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 184, "nodeType": "ExpressionStatement", "src": "2197:60:6"}, {"expression": {"arguments": [{"id": 186, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 176, "src": "2279:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 185, "name": "issueBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 265, "src": "2268:10:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$", "typeString": "function (uint256)"}}, "id": 187, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2268:33:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 188, "nodeType": "ExpressionStatement", "src": "2268:33:6"}, {"expression": {"arguments": [{"id": 190, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 176, "src": "2324:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 189, "name": "issueBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 332, "src": "2311:12:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$", "typeString": "function (uint256)"}}, "id": 191, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2311:35:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 192, "nodeType": "ExpressionStatement", "src": "2311:35:6"}, {"expression": {"id": 195, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 193, "name": "poolIsInitiated", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 129, "src": "2357:15:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"hexValue": "74727565", "id": 194, "isConstant": false, "isLValue": false, "isPure": true, "kind": "bool", "lValueRequested": false, "nodeType": "Literal", "src": "2375:4:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}, "value": "true"}, "src": "2357:22:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "id": 196, "nodeType": "ExpressionStatement", "src": "2357:22:6"}]}, "functionSelector": "9b3075a1", "id": 198, "implemented": true, "kind": "function", "modifiers": [], "name": "initiatePool", "nodeType": "FunctionDefinition", "parameters": {"id": 177, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 176, "mutability": "mutable", "name": "amountLeveragedTokens", "nodeType": "VariableDeclaration", "scope": 198, "src": "2149:29:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 175, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2149:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "2148:31:6"}, "returnParameters": {"id": 178, "nodeType": "ParameterList", "parameters": [], "src": "2187:0:6"}, "scope": 767, "src": "2127:259:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 264, "nodeType": "Block", "src": "2452:478:6", "statements": [{"expression": {"arguments": [], "expression": {"argumentTypes": [], "id": 203, "name": "rebalanceLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 524, "src": "2462:24:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$__$returns$__$", "typeString": "function ()"}}, "id": 204, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2462:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 205, "nodeType": "ExpressionStatement", "src": "2462:26:6"}, {"expression": {"arguments": [{"id": 209, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 200, "src": "2509:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 206, "name": "btcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 167, "src": "2498:5:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}}, "id": 208, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mint", "nodeType": "MemberAccess", "referencedDeclaration": 57, "src": "2498:10:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$", "typeString": "function (uint256) external"}}, "id": 210, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2498:33:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 211, "nodeType": "ExpressionStatement", "src": "2498:33:6"}, {"assignments": [214], "declarations": [{"constant": false, "id": 214, "mutability": "mutable", "name": "usdc", "nodeType": "VariableDeclaration", "scope": 264, "src": "2542:11:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}, "typeName": {"id": 213, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 212, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 35, "src": "2542:6:6"}, "referencedDeclaration": 35, "src": "2542:6:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 218, "initialValue": {"arguments": [{"id": 216, "name": "addressUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 157, "src": "2563:11:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 215, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 35, "src": "2556:6:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$35_$", "typeString": "type(contract IERC20)"}}, "id": 217, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2556:19:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "2542:33:6"}, {"expression": {"id": 222, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 219, "name": "priceBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 134, "src": "2585:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [], "expression": {"argumentTypes": [], "id": 220, "name": "getBtcUpPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 593, "src": "2598:13:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$", "typeString": "function () view returns (uint256)"}}, "id": 221, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2598:15:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2585:28:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 223, "nodeType": "ExpressionStatement", "src": "2585:28:6"}, {"assignments": [225], "declarations": [{"constant": false, "id": 225, "mutability": "mutable", "name": "amountUsdc", "nodeType": "VariableDeclaration", "scope": 264, "src": "2624:18:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 224, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2624:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 235, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 233, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 231, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "2687:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 232, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "2693:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "2687:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 228, "name": "priceBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 134, "src": "2671:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 226, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 200, "src": "2645:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 227, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "2645:25:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 229, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2645:37:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 230, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "2645:41:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 234, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2645:50:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "2624:71:6"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 239, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "2732:3:6", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 240, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "2732:10:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 243, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "2752:4:6", "typeDescriptions": {"typeIdentifier": "t_contract$_LeveragedTrading_$767", "typeString": "contract LeveragedTrading"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_LeveragedTrading_$767", "typeString": "contract LeveragedTrading"}], "id": 242, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "2744:7:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 241, "name": "address", "nodeType": "ElementaryTypeName", "src": "2744:7:6", "typeDescriptions": {}}}, "id": 244, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2744:13:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 245, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 225, "src": "2759:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 237, "name": "usdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 214, "src": "2714:4:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "id": 238, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 25, "src": "2714:17:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 246, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2714:56:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "596f7520646f6e2774206861766520656e6f7567682055534443", "id": 247, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "2772:28:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_215257ea0e4feb9c4e88226d908b42335464d28cc634dcc0965acffaf089fb88", "typeString": "literal_string \"You don't have enough USDC\""}, "value": "You don't have enough USDC"}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_215257ea0e4feb9c4e88226d908b42335464d28cc634dcc0965acffaf089fb88", "typeString": "literal_string \"You don't have enough USDC\""}], "id": 236, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "2706:7:6", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 248, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2706:95:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 249, "nodeType": "ExpressionStatement", "src": "2706:95:6"}, {"expression": {"id": 255, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 250, "name": "amountBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 148, "src": "2812:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 253, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 200, "src": "2842:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 251, "name": "amountBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 148, "src": "2826:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 252, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 1489, "src": "2826:15:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 254, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2826:38:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2812:52:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 256, "nodeType": "ExpressionStatement", "src": "2812:52:6"}, {"expression": {"id": 262, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 257, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "2874:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 260, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 225, "src": "2912:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 258, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "2892:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 259, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 1489, "src": "2892:19:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 261, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "2892:31:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "2874:49:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 263, "nodeType": "ExpressionStatement", "src": "2874:49:6"}]}, "functionSelector": "f530c04a", "id": 265, "implemented": true, "kind": "function", "modifiers": [], "name": "issueBtcUp", "nodeType": "FunctionDefinition", "parameters": {"id": 201, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 200, "mutability": "mutable", "name": "amountLeveragedTokens", "nodeType": "VariableDeclaration", "scope": 265, "src": "2414:29:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 199, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2414:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "2413:31:6"}, "returnParameters": {"id": 202, "nodeType": "ParameterList", "parameters": [], "src": "2452:0:6"}, "scope": 767, "src": "2394:536:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 331, "nodeType": "Block", "src": "2998:493:6", "statements": [{"expression": {"arguments": [], "expression": {"argumentTypes": [], "id": 270, "name": "rebalanceLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 524, "src": "3008:24:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$__$returns$__$", "typeString": "function ()"}}, "id": 271, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3008:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 272, "nodeType": "ExpressionStatement", "src": "3008:26:6"}, {"expression": {"arguments": [{"id": 276, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 267, "src": "3057:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 273, "name": "btcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 174, "src": "3044:7:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}}, "id": 275, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mint", "nodeType": "MemberAccess", "referencedDeclaration": 101, "src": "3044:12:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$", "typeString": "function (uint256) external"}}, "id": 277, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3044:35:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 278, "nodeType": "ExpressionStatement", "src": "3044:35:6"}, {"assignments": [281], "declarations": [{"constant": false, "id": 281, "mutability": "mutable", "name": "usdc", "nodeType": "VariableDeclaration", "scope": 331, "src": "3090:11:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}, "typeName": {"id": 280, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 279, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 35, "src": "3090:6:6"}, "referencedDeclaration": 35, "src": "3090:6:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 285, "initialValue": {"arguments": [{"id": 283, "name": "addressUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 157, "src": "3111:11:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 282, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 35, "src": "3104:6:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$35_$", "typeString": "type(contract IERC20)"}}, "id": 284, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3104:19:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3090:33:6"}, {"expression": {"id": 289, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 286, "name": "priceBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 139, "src": "3133:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [], "expression": {"argumentTypes": [], "id": 287, "name": "getBtcDownPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 614, "src": "3148:15:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$", "typeString": "function () view returns (uint256)"}}, "id": 288, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3148:17:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3133:32:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 290, "nodeType": "ExpressionStatement", "src": "3133:32:6"}, {"assignments": [292], "declarations": [{"constant": false, "id": 292, "mutability": "mutable", "name": "amountUsdc", "nodeType": "VariableDeclaration", "scope": 331, "src": "3175:18:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 291, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3175:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 302, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 300, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 298, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3240:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 299, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3246:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3240:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 295, "name": "priceBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 139, "src": "3222:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 293, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 267, "src": "3196:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 294, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "3196:25:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 296, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3196:39:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 297, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "3196:43:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 301, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3196:52:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3175:73:6"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 306, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3285:3:6", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 307, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3285:10:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"arguments": [{"id": 310, "name": "this", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -28, "src": "3305:4:6", "typeDescriptions": {"typeIdentifier": "t_contract$_LeveragedTrading_$767", "typeString": "contract LeveragedTrading"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_contract$_LeveragedTrading_$767", "typeString": "contract LeveragedTrading"}], "id": 309, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "3297:7:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_address_$", "typeString": "type(address)"}, "typeName": {"id": 308, "name": "address", "nodeType": "ElementaryTypeName", "src": "3297:7:6", "typeDescriptions": {}}}, "id": 311, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3297:13:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 312, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "3312:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 304, "name": "usdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 281, "src": "3267:4:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "id": 305, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transferFrom", "nodeType": "MemberAccess", "referencedDeclaration": 25, "src": "3267:17:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,address,uint256) external returns (bool)"}}, "id": 313, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3267:56:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "596f7520646f6e2774206861766520656e6f7567682055534443", "id": 314, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3325:28:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_215257ea0e4feb9c4e88226d908b42335464d28cc634dcc0965acffaf089fb88", "typeString": "literal_string \"You don't have enough USDC\""}, "value": "You don't have enough USDC"}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_215257ea0e4feb9c4e88226d908b42335464d28cc634dcc0965acffaf089fb88", "typeString": "literal_string \"You don't have enough USDC\""}], "id": 303, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3259:7:6", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 315, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3259:95:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 316, "nodeType": "ExpressionStatement", "src": "3259:95:6"}, {"expression": {"id": 322, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 317, "name": "amountBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 151, "src": "3365:13:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 320, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 267, "src": "3399:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 318, "name": "amountBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 151, "src": "3381:13:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 319, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 1489, "src": "3381:17:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 321, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3381:40:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3365:56:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 323, "nodeType": "ExpressionStatement", "src": "3365:56:6"}, {"expression": {"id": 329, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 324, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "3431:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 327, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 292, "src": "3473:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 325, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "3451:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 326, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 1489, "src": "3451:21:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 328, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3451:33:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3431:53:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 330, "nodeType": "ExpressionStatement", "src": "3431:53:6"}]}, "functionSelector": "c46d4f09", "id": 332, "implemented": true, "kind": "function", "modifiers": [], "name": "issueBtcDown", "nodeType": "FunctionDefinition", "parameters": {"id": 268, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 267, "mutability": "mutable", "name": "amountLeveragedTokens", "nodeType": "VariableDeclaration", "scope": 332, "src": "2960:29:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 266, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "2960:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "2959:31:6"}, "returnParameters": {"id": 269, "nodeType": "ParameterList", "parameters": [], "src": "2998:0:6"}, "scope": 767, "src": "2938:553:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 394, "nodeType": "Block", "src": "3558:457:6", "statements": [{"expression": {"arguments": [], "expression": {"argumentTypes": [], "id": 337, "name": "rebalanceLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 524, "src": "3568:24:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$__$returns$__$", "typeString": "function ()"}}, "id": 338, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3568:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 339, "nodeType": "ExpressionStatement", "src": "3568:26:6"}, {"expression": {"arguments": [{"id": 343, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 334, "src": "3615:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 340, "name": "btcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 167, "src": "3604:5:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}}, "id": 342, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "burn", "nodeType": "MemberAccess", "referencedDeclaration": 69, "src": "3604:10:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$", "typeString": "function (uint256) external"}}, "id": 344, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3604:33:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 345, "nodeType": "ExpressionStatement", "src": "3604:33:6"}, {"assignments": [348], "declarations": [{"constant": false, "id": 348, "mutability": "mutable", "name": "usdc", "nodeType": "VariableDeclaration", "scope": 394, "src": "3648:11:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}, "typeName": {"id": 347, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 346, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 35, "src": "3648:6:6"}, "referencedDeclaration": 35, "src": "3648:6:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 352, "initialValue": {"arguments": [{"id": 350, "name": "addressUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 157, "src": "3669:11:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 349, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 35, "src": "3662:6:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$35_$", "typeString": "type(contract IERC20)"}}, "id": 351, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3662:19:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "3648:33:6"}, {"expression": {"id": 356, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 353, "name": "priceBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 134, "src": "3691:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [], "expression": {"argumentTypes": [], "id": 354, "name": "getBtcUpPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 593, "src": "3704:13:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$", "typeString": "function () view returns (uint256)"}}, "id": 355, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3704:15:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3691:28:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 357, "nodeType": "ExpressionStatement", "src": "3691:28:6"}, {"assignments": [359], "declarations": [{"constant": false, "id": 359, "mutability": "mutable", "name": "amountUsdc", "nodeType": "VariableDeclaration", "scope": 394, "src": "3730:18:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 358, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3730:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 369, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 367, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 365, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3793:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 366, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "3799:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "3793:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 362, "name": "priceBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 134, "src": "3777:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 360, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 334, "src": "3751:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 361, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "3751:25:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 363, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3751:37:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 364, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "3751:41:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 368, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3751:50:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "3730:71:6"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 373, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "3833:3:6", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 374, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "3833:10:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 375, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 359, "src": "3845:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 371, "name": "usdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 348, "src": "3819:4:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "id": 372, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 14, "src": "3819:13:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 376, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3819:37:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4e6f7420656e6f756768207573646320617661696c61626c65", "id": 377, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "3858:27:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_11e0d42ca67e4d2b1a22b36c1afaf70b8acf7fd68b23b01ee92fff5e749db362", "typeString": "literal_string \"Not enough usdc available\""}, "value": "Not enough usdc available"}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_11e0d42ca67e4d2b1a22b36c1afaf70b8acf7fd68b23b01ee92fff5e749db362", "typeString": "literal_string \"Not enough usdc available\""}], "id": 370, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "3811:7:6", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 378, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3811:75:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 379, "nodeType": "ExpressionStatement", "src": "3811:75:6"}, {"expression": {"id": 385, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 380, "name": "amountBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 148, "src": "3897:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 383, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 334, "src": "3927:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 381, "name": "amountBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 148, "src": "3911:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 382, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "3911:15:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 384, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3911:38:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3897:52:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 386, "nodeType": "ExpressionStatement", "src": "3897:52:6"}, {"expression": {"id": 392, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 387, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "3959:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 390, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 359, "src": "3997:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 388, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "3977:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 389, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "3977:19:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 391, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "3977:31:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "3959:49:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 393, "nodeType": "ExpressionStatement", "src": "3959:49:6"}]}, "functionSelector": "d1ee539d", "id": 395, "implemented": true, "kind": "function", "modifiers": [], "name": "redeemBtcUp", "nodeType": "FunctionDefinition", "parameters": {"id": 335, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 334, "mutability": "mutable", "name": "amountLeveragedTokens", "nodeType": "VariableDeclaration", "scope": 395, "src": "3520:29:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 333, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "3520:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "3519:31:6"}, "returnParameters": {"id": 336, "nodeType": "ParameterList", "parameters": [], "src": "3558:0:6"}, "scope": 767, "src": "3499:516:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 457, "nodeType": "Block", "src": "4084:479:6", "statements": [{"expression": {"arguments": [], "expression": {"argumentTypes": [], "id": 400, "name": "rebalanceLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 524, "src": "4094:24:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_nonpayable$__$returns$__$", "typeString": "function ()"}}, "id": 401, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4094:26:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 402, "nodeType": "ExpressionStatement", "src": "4094:26:6"}, {"expression": {"arguments": [{"id": 406, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 397, "src": "4143:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 403, "name": "btcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 174, "src": "4130:7:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}}, "id": 405, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "burn", "nodeType": "MemberAccess", "referencedDeclaration": 113, "src": "4130:12:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$", "typeString": "function (uint256) external"}}, "id": 407, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4130:35:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 408, "nodeType": "ExpressionStatement", "src": "4130:35:6"}, {"assignments": [411], "declarations": [{"constant": false, "id": 411, "mutability": "mutable", "name": "usdc", "nodeType": "VariableDeclaration", "scope": 457, "src": "4176:11:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}, "typeName": {"id": 410, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 409, "name": "IERC20", "nodeType": "IdentifierPath", "referencedDeclaration": 35, "src": "4176:6:6"}, "referencedDeclaration": 35, "src": "4176:6:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "visibility": "internal"}], "id": 415, "initialValue": {"arguments": [{"id": 413, "name": "addressUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 157, "src": "4197:11:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 412, "name": "IERC20", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 35, "src": "4190:6:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_IERC20_$35_$", "typeString": "type(contract IERC20)"}}, "id": 414, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4190:19:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "nodeType": "VariableDeclarationStatement", "src": "4176:33:6"}, {"expression": {"id": 419, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 416, "name": "priceBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 139, "src": "4219:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [], "expression": {"argumentTypes": [], "id": 417, "name": "getBtcDownPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 614, "src": "4234:15:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$", "typeString": "function () view returns (uint256)"}}, "id": 418, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4234:17:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4219:32:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 420, "nodeType": "ExpressionStatement", "src": "4219:32:6"}, {"assignments": [422], "declarations": [{"constant": false, "id": 422, "mutability": "mutable", "name": "amountUsdc", "nodeType": "VariableDeclaration", "scope": 457, "src": "4266:18:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 421, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4266:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 432, "initialValue": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 430, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 428, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4331:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 429, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4337:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "4331:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 425, "name": "priceBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 139, "src": "4313:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 423, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 397, "src": "4287:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 424, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "4287:25:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 426, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4287:39:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 427, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "4287:43:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 431, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4287:52:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "4266:73:6"}, {"expression": {"arguments": [{"arguments": [{"expression": {"id": 436, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "4371:3:6", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 437, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "4371:10:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}, {"id": 438, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 422, "src": "4384:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 434, "name": "usdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 411, "src": "4357:4:6", "typeDescriptions": {"typeIdentifier": "t_contract$_IERC20_$35", "typeString": "contract IERC20"}}, "id": 435, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "transfer", "nodeType": "MemberAccess", "referencedDeclaration": 14, "src": "4357:13:6", "typeDescriptions": {"typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$", "typeString": "function (address,uint256) external returns (bool)"}}, "id": 439, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4357:38:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, {"hexValue": "4e6f7420656e6f756768207573646320617661696c61626c65", "id": 440, "isConstant": false, "isLValue": false, "isPure": true, "kind": "string", "lValueRequested": false, "nodeType": "Literal", "src": "4397:27:6", "typeDescriptions": {"typeIdentifier": "t_stringliteral_11e0d42ca67e4d2b1a22b36c1afaf70b8acf7fd68b23b01ee92fff5e749db362", "typeString": "literal_string \"Not enough usdc available\""}, "value": "Not enough usdc available"}], "expression": {"argumentTypes": [{"typeIdentifier": "t_bool", "typeString": "bool"}, {"typeIdentifier": "t_stringliteral_11e0d42ca67e4d2b1a22b36c1afaf70b8acf7fd68b23b01ee92fff5e749db362", "typeString": "literal_string \"Not enough usdc available\""}], "id": 433, "name": "require", "nodeType": "Identifier", "overloadedDeclarations": [-18, -18], "referencedDeclaration": -18, "src": "4349:7:6", "typeDescriptions": {"typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$", "typeString": "function (bool,string memory) pure"}}, "id": 441, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4349:76:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$__$", "typeString": "tuple()"}}, "id": 442, "nodeType": "ExpressionStatement", "src": "4349:76:6"}, {"expression": {"id": 448, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 443, "name": "amountBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 151, "src": "4436:13:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 446, "name": "amountLeveragedTokens", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 397, "src": "4470:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 444, "name": "amountBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 151, "src": "4452:13:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 445, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "4452:17:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 447, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4452:40:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4436:56:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 449, "nodeType": "ExpressionStatement", "src": "4436:56:6"}, {"expression": {"id": 455, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 450, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "4502:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 453, "name": "amountUsdc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 422, "src": "4544:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 451, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "4522:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 452, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "4522:21:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 454, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4522:33:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4502:53:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 456, "nodeType": "ExpressionStatement", "src": "4502:53:6"}]}, "functionSelector": "a14274e8", "id": 458, "implemented": true, "kind": "function", "modifiers": [], "name": "redeemBtcDown", "nodeType": "FunctionDefinition", "parameters": {"id": 398, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 397, "mutability": "mutable", "name": "amountLeveragedTokens", "nodeType": "VariableDeclaration", "scope": 458, "src": "4046:29:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 396, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4046:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "4045:31:6"}, "returnParameters": {"id": 399, "nodeType": "ParameterList", "parameters": [], "src": "4084:0:6"}, "scope": 767, "src": "4023:540:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 523, "nodeType": "Block", "src": "4614:611:6", "statements": [{"assignments": [462], "declarations": [{"constant": false, "id": 462, "mutability": "mutable", "name": "btcPrice", "nodeType": "VariableDeclaration", "scope": 523, "src": "4624:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 461, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4624:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 465, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "id": 463, "name": "getBtcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 638, "src": "4643:11:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$", "typeString": "function () view returns (uint256)"}}, "id": 464, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4643:13:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "4624:32:6"}, {"condition": {"commonType": {"typeIdentifier": "t_bool", "typeString": "bool"}, "id": 474, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"components": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 468, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 466, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "4671:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 467, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4689:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "4671:19:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 469, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "4670:21:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "nodeType": "BinaryOperation", "operator": "&&", "rightExpression": {"components": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 472, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 470, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "4696:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 471, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4716:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "4696:21:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}], "id": 473, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "4695:23:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "src": "4670:48:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "id": 518, "nodeType": "IfStatement", "src": "4666:519:6", "trueBody": {"id": 517, "nodeType": "Block", "src": "4720:465:6", "statements": [{"assignments": [476], "declarations": [{"constant": false, "id": 476, "mutability": "mutable", "name": "rebalanceAmount", "nodeType": "VariableDeclaration", "scope": 517, "src": "4734:23:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 475, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "4734:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 480, "initialValue": {"arguments": [{"id": 478, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 462, "src": "4779:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 477, "name": "getRebalanceAmount", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 572, "src": "4760:18:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$", "typeString": "function (uint256) view returns (uint256)"}}, "id": 479, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4760:28:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "4734:54:6"}, {"condition": {"commonType": {"typeIdentifier": "t_int256", "typeString": "int256"}, "id": 485, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"arguments": [{"id": 482, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 462, "src": "4814:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 481, "name": "getSign", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 543, "src": "4806:7:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_int256_$", "typeString": "function (uint256) view returns (int256)"}}, "id": 483, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4806:17:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_int256", "typeString": "int256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"hexValue": "30", "id": 484, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "4826:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "4806:21:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseBody": {"id": 515, "nodeType": "Block", "src": "5011:163:6", "statements": [{"expression": {"id": 506, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 501, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "5029:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 504, "name": "rebalanceAmount", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 476, "src": "5067:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 502, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "5047:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 503, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "5047:19:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 505, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5047:36:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5029:54:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 507, "nodeType": "ExpressionStatement", "src": "5029:54:6"}, {"expression": {"id": 513, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 508, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "5101:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 511, "name": "rebalanceAmount", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 476, "src": "5143:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 509, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "5121:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 510, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 1489, "src": "5121:21:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 512, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5121:38:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5101:58:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 514, "nodeType": "ExpressionStatement", "src": "5101:58:6"}]}, "id": 516, "nodeType": "IfStatement", "src": "4802:372:6", "trueBody": {"id": 500, "nodeType": "Block", "src": "4829:163:6", "statements": [{"expression": {"id": 491, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 486, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "4847:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 489, "name": "rebalanceAmount", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 476, "src": "4885:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 487, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "4865:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 488, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "add", "nodeType": "MemberAccess", "referencedDeclaration": 1489, "src": "4865:19:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 490, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4865:36:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4847:54:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 492, "nodeType": "ExpressionStatement", "src": "4847:54:6"}, {"expression": {"id": 498, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 493, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "4919:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"arguments": [{"id": 496, "name": "rebalanceAmount", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 476, "src": "4961:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"id": 494, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "4939:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 495, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "4939:21:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 497, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "4939:38:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "4919:58:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 499, "nodeType": "ExpressionStatement", "src": "4919:58:6"}]}}]}}, {"expression": {"id": 521, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftHandSide": {"id": 519, "name": "lastBtcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 154, "src": "5195:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "Assignment", "operator": "=", "rightHandSide": {"id": 520, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 462, "src": "5210:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5195:23:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 522, "nodeType": "ExpressionStatement", "src": "5195:23:6"}]}, "functionSelector": "6e5d6615", "id": 524, "implemented": true, "kind": "function", "modifiers": [], "name": "rebalanceLeveragedTokens", "nodeType": "FunctionDefinition", "parameters": {"id": 459, "nodeType": "ParameterList", "parameters": [], "src": "4604:2:6"}, "returnParameters": {"id": 460, "nodeType": "ParameterList", "parameters": [], "src": "4614:0:6"}, "scope": 767, "src": "4571:654:6", "stateMutability": "nonpayable", "virtual": false, "visibility": "public"}, {"body": {"id": 542, "nodeType": "Block", "src": "5467:126:6", "statements": [{"condition": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 533, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 531, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 526, "src": "5481:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"id": 532, "name": "lastBtcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 154, "src": "5492:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "5481:23:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseBody": {"id": 540, "nodeType": "Block", "src": "5553:34:6", "statements": [{"expression": {"id": 538, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "UnaryOperation", "operator": "-", "prefix": true, "src": "5574:2:6", "subExpression": {"hexValue": "31", "id": 537, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5575:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_1_by_1", "typeString": "int_const 1"}, "value": "1"}, "typeDescriptions": {"typeIdentifier": "t_rational_minus_1_by_1", "typeString": "int_const -1"}}, "functionReturnParameters": 530, "id": 539, "nodeType": "Return", "src": "5567:9:6"}]}, "id": 541, "nodeType": "IfStatement", "src": "5477:110:6", "trueBody": {"id": 536, "nodeType": "Block", "src": "5506:33:6", "statements": [{"expression": {"hexValue": "31", "id": 534, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5527:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_1_by_1", "typeString": "int_const 1"}, "value": "1"}, "functionReturnParameters": 530, "id": 535, "nodeType": "Return", "src": "5520:8:6"}]}}]}, "id": 543, "implemented": true, "kind": "function", "modifiers": [], "name": "getSign", "nodeType": "FunctionDefinition", "parameters": {"id": 527, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 526, "mutability": "mutable", "name": "btcPrice", "nodeType": "VariableDeclaration", "scope": 543, "src": "5419:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 525, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5419:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "5418:18:6"}, "returnParameters": {"id": 530, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 529, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 543, "src": "5460:6:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_int256", "typeString": "int256"}, "typeName": {"id": 528, "name": "int256", "nodeType": "ElementaryTypeName", "src": "5460:6:6", "typeDescriptions": {"typeIdentifier": "t_int256", "typeString": "int256"}}, "visibility": "internal"}], "src": "5459:8:6"}, "scope": 767, "src": "5402:191:6", "stateMutability": "view", "virtual": false, "visibility": "internal"}, {"body": {"id": 571, "nodeType": "Block", "src": "5678:147:6", "statements": [{"assignments": [551], "declarations": [{"constant": false, "id": 551, "mutability": "mutable", "name": "priceDiff", "nodeType": "VariableDeclaration", "scope": 571, "src": "5688:17:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 550, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5688:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 555, "initialValue": {"arguments": [{"id": 553, "name": "priceBtc", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 545, "src": "5721:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 552, "name": "getPriceDiff", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 742, "src": "5708:12:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$", "typeString": "function (uint256) view returns (uint256)"}}, "id": 554, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5708:22:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "5688:42:6"}, {"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 568, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 566, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5810:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 567, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5816:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5810:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"arguments": [{"id": 562, "name": "priceDiff", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 551, "src": "5794:9:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 561, "name": "L", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 698, "src": "5792:1:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint256_$", "typeString": "function (uint256) pure returns (uint256)"}}, "id": 563, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5792:12:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"id": 557, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "5752:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, {"id": 558, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "5769:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}, {"typeIdentifier": "t_uint256", "typeString": "uint256"}], "id": 556, "name": "min", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 655, "src": "5748:3:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 559, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5748:39:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 560, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "5748:43:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 564, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5748:57:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 565, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "5748:61:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 569, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5748:70:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 549, "id": 570, "nodeType": "Return", "src": "5741:77:6"}]}, "id": 572, "implemented": true, "kind": "function", "modifiers": [], "name": "getRebalanceAmount", "nodeType": "FunctionDefinition", "parameters": {"id": 546, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 545, "mutability": "mutable", "name": "priceBtc", "nodeType": "VariableDeclaration", "scope": 572, "src": "5629:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 544, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5629:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "5628:18:6"}, "returnParameters": {"id": 549, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 548, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 572, "src": "5670:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 547, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5670:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "5669:9:6"}, "scope": 767, "src": "5601:224:6", "stateMutability": "view", "virtual": false, "visibility": "internal"}, {"body": {"id": 592, "nodeType": "Block", "src": "5917:102:6", "statements": [{"expression": {"condition": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 579, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 577, "name": "amountBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 148, "src": "5934:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"hexValue": "30", "id": 578, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5949:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "5934:16:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"arguments": [{"id": 588, "name": "amountBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 148, "src": "6000:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 585, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 583, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5987:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 584, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "5993:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "5987:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 581, "name": "collateralBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 142, "src": "5967:15:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 582, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "5967:19:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 586, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5967:28:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 587, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "5967:32:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 589, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "5967:45:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 590, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "5934:78:6", "trueExpression": {"id": 580, "name": "priceBtcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 134, "src": "5954:10:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 576, "id": 591, "nodeType": "Return", "src": "5927:85:6"}]}, "functionSelector": "f06847d6", "id": 593, "implemented": true, "kind": "function", "modifiers": [], "name": "getBtcUpPrice", "nodeType": "FunctionDefinition", "parameters": {"id": 573, "nodeType": "ParameterList", "parameters": [], "src": "5884:2:6"}, "returnParameters": {"id": 576, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 575, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 593, "src": "5908:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 574, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "5908:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "5907:9:6"}, "scope": 767, "src": "5862:157:6", "stateMutability": "view", "virtual": false, "visibility": "public"}, {"body": {"id": 613, "nodeType": "Block", "src": "6115:122:6", "statements": [{"expression": {"condition": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 600, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 598, "name": "amountBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 151, "src": "6144:13:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "==", "rightExpression": {"hexValue": "30", "id": 599, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6161:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_0_by_1", "typeString": "int_const 0"}, "value": "0"}, "src": "6144:18:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"arguments": [{"id": 609, "name": "amountBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 151, "src": "6216:13:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 606, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 604, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6203:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 605, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6209:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6203:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 602, "name": "collateralBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 145, "src": "6181:17:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 603, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "6181:21:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 607, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6181:30:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 608, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "6181:34:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 610, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6181:49:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 611, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6144:86:6", "trueExpression": {"id": 601, "name": "priceBtcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 139, "src": "6166:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 597, "id": 612, "nodeType": "Return", "src": "6137:93:6"}]}, "functionSelector": "81c2b29b", "id": 614, "implemented": true, "kind": "function", "modifiers": [], "name": "getBtcDownPrice", "nodeType": "FunctionDefinition", "parameters": {"id": 594, "nodeType": "ParameterList", "parameters": [], "src": "6082:2:6"}, "returnParameters": {"id": 597, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 596, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 614, "src": "6106:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 595, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6106:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6105:9:6"}, "scope": 767, "src": "6058:179:6", "stateMutability": "view", "virtual": false, "visibility": "public"}, {"body": {"id": 637, "nodeType": "Block", "src": "6343:264:6", "statements": [{"assignments": [621], "declarations": [{"constant": false, "id": 621, "mutability": "mutable", "name": "priceFeed", "nodeType": "VariableDeclaration", "scope": 637, "src": "6353:31:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_contract$_AggregatorV3Interface_$1671", "typeString": "contract AggregatorV3Interface"}, "typeName": {"id": 620, "nodeType": "UserDefinedTypeName", "pathNode": {"id": 619, "name": "AggregatorV3Interface", "nodeType": "IdentifierPath", "referencedDeclaration": 1671, "src": "6353:21:6"}, "referencedDeclaration": 1671, "src": "6353:21:6", "typeDescriptions": {"typeIdentifier": "t_contract$_AggregatorV3Interface_$1671", "typeString": "contract AggregatorV3Interface"}}, "visibility": "internal"}], "id": 625, "initialValue": {"arguments": [{"id": 623, "name": "addressBtcUSDFeed", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 160, "src": "6409:17:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "id": 622, "name": "AggregatorV3Interface", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 1671, "src": "6387:21:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_contract$_AggregatorV3Interface_$1671_$", "typeString": "type(contract AggregatorV3Interface)"}}, "id": 624, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6387:40:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_contract$_AggregatorV3Interface_$1671", "typeString": "contract AggregatorV3Interface"}}, "nodeType": "VariableDeclarationStatement", "src": "6353:74:6"}, {"assignments": [null, 627, null, null, null], "declarations": [null, {"constant": false, "id": 627, "mutability": "mutable", "name": "answer", "nodeType": "VariableDeclaration", "scope": 637, "src": "6439:13:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_int256", "typeString": "int256"}, "typeName": {"id": 626, "name": "int256", "nodeType": "ElementaryTypeName", "src": "6439:6:6", "typeDescriptions": {"typeIdentifier": "t_int256", "typeString": "int256"}}, "visibility": "internal"}, null, null, null], "id": 631, "initialValue": {"arguments": [], "expression": {"argumentTypes": [], "expression": {"id": 628, "name": "priceFeed", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 621, "src": "6459:9:6", "typeDescriptions": {"typeIdentifier": "t_contract$_AggregatorV3Interface_$1671", "typeString": "contract AggregatorV3Interface"}}, "id": 629, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "latestRoundData", "nodeType": "MemberAccess", "referencedDeclaration": 1670, "src": "6459:25:6", "typeDescriptions": {"typeIdentifier": "t_function_external_view$__$returns$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$", "typeString": "function () view external returns (uint80,int256,uint256,uint256,uint80)"}}, "id": 630, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6459:27:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_tuple$_t_uint80_$_t_int256_$_t_uint256_$_t_uint256_$_t_uint80_$", "typeString": "tuple(uint80,int256,uint256,uint256,uint80)"}}, "nodeType": "VariableDeclarationStatement", "src": "6437:49:6"}, {"expression": {"arguments": [{"id": 634, "name": "answer", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 627, "src": "6513:6:6", "typeDescriptions": {"typeIdentifier": "t_int256", "typeString": "int256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_int256", "typeString": "int256"}], "id": 633, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "nodeType": "ElementaryTypeNameExpression", "src": "6505:7:6", "typeDescriptions": {"typeIdentifier": "t_type$_t_uint256_$", "typeString": "type(uint256)"}, "typeName": {"id": 632, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6505:7:6", "typeDescriptions": {}}}, "id": 635, "isConstant": false, "isLValue": false, "isPure": false, "kind": "typeConversion", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "6505:15:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 618, "id": 636, "nodeType": "Return", "src": "6498:22:6"}]}, "functionSelector": "3a3610bc", "id": 638, "implemented": true, "kind": "function", "modifiers": [], "name": "getBtcPrice", "nodeType": "FunctionDefinition", "parameters": {"id": 615, "nodeType": "ParameterList", "parameters": [], "src": "6310:2:6"}, "returnParameters": {"id": 618, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 617, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 638, "src": "6334:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 616, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6334:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6333:9:6"}, "scope": 767, "src": "6290:317:6", "stateMutability": "view", "virtual": false, "visibility": "public"}, {"body": {"id": 654, "nodeType": "Block", "src": "6685:38:6", "statements": [{"expression": {"condition": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 649, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 647, "name": "a", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 640, "src": "6702:1:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "<=", "rightExpression": {"id": 648, "name": "b", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 642, "src": "6707:1:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6702:6:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseExpression": {"id": 651, "name": "b", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 642, "src": "6715:1:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 652, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "Conditional", "src": "6702:14:6", "trueExpression": {"id": 650, "name": "a", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 640, "src": "6711:1:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 646, "id": 653, "nodeType": "Return", "src": "6695:21:6"}]}, "id": 655, "implemented": true, "kind": "function", "modifiers": [], "name": "min", "nodeType": "FunctionDefinition", "parameters": {"id": 643, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 640, "mutability": "mutable", "name": "a", "nodeType": "VariableDeclaration", "scope": 655, "src": "6631:9:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 639, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6631:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}, {"constant": false, "id": 642, "mutability": "mutable", "name": "b", "nodeType": "VariableDeclaration", "scope": 655, "src": "6642:9:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 641, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6642:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6630:22:6"}, "returnParameters": {"id": 646, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 645, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 655, "src": "6676:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 644, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6676:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6675:9:6"}, "scope": 767, "src": "6618:105:6", "stateMutability": "pure", "virtual": false, "visibility": "internal"}, {"body": {"id": 697, "nodeType": "Block", "src": "6784:171:6", "statements": [{"assignments": [663], "declarations": [{"constant": false, "id": 663, "mutability": "mutable", "name": "denom", "nodeType": "VariableDeclaration", "scope": 697, "src": "6820:13:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 662, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6820:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 682, "initialValue": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 681, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 677, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 673, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"hexValue": "39", "id": 664, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6836:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_9_by_1", "typeString": "int_const 9"}, "value": "9"}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"components": [{"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 671, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 667, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 665, "name": "x", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 657, "src": "6841:1:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "32", "id": 666, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6846:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_2_by_1", "typeString": "int_const 2"}, "value": "2"}, "src": "6841:6:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "/", "rightExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 670, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 668, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6850:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 669, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6856:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6850:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "src": "6841:16:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "id": 672, "isConstant": false, "isInlineArray": false, "isLValue": false, "isPure": false, "lValueRequested": false, "nodeType": "TupleExpression", "src": "6840:18:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6836:22:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "+", "rightExpression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 676, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"hexValue": "33", "id": 674, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6862:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_3_by_1", "typeString": "int_const 3"}, "value": "3"}, "nodeType": "BinaryOperation", "operator": "*", "rightExpression": {"id": 675, "name": "x", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 657, "src": "6866:1:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6862:5:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6836:31:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "+", "rightExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 680, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 678, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6870:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 679, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6876:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6870:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "src": "6836:41:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "VariableDeclarationStatement", "src": "6820:57:6"}, {"assignments": [684], "declarations": [{"constant": false, "id": 684, "mutability": "mutable", "name": "num", "nodeType": "VariableDeclaration", "scope": 697, "src": "6887:11:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 683, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6887:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "id": 688, "initialValue": {"commonType": {"typeIdentifier": "t_rational_1000000000000_by_1", "typeString": "int_const 1000000000000"}, "id": 687, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 685, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6901:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "3132", "id": 686, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6907:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_12_by_1", "typeString": "int_const 12"}, "value": "12"}, "src": "6901:8:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000000000_by_1", "typeString": "int_const 1000000000000"}}, "nodeType": "VariableDeclarationStatement", "src": "6887:22:6"}, {"expression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 695, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 691, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 689, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6927:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 690, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "6933:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "6927:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}, "nodeType": "BinaryOperation", "operator": "-", "rightExpression": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 694, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 692, "name": "num", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 684, "src": "6937:3:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": "/", "rightExpression": {"id": 693, "name": "denom", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 663, "src": "6943:5:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6937:11:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "6927:21:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 661, "id": 696, "nodeType": "Return", "src": "6920:28:6"}]}, "id": 698, "implemented": true, "kind": "function", "modifiers": [], "name": "L", "nodeType": "FunctionDefinition", "parameters": {"id": 658, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 657, "mutability": "mutable", "name": "x", "nodeType": "VariableDeclaration", "scope": 698, "src": "6741:9:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 656, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6741:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6740:11:6"}, "returnParameters": {"id": 661, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 660, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 698, "src": "6775:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 659, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6775:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6774:9:6"}, "scope": 767, "src": "6730:225:6", "stateMutability": "pure", "virtual": false, "visibility": "internal"}, {"body": {"id": 741, "nodeType": "Block", "src": "7035:246:6", "statements": [{"condition": {"commonType": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "id": 707, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "leftExpression": {"id": 705, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 700, "src": "7066:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "nodeType": "BinaryOperation", "operator": ">", "rightExpression": {"id": 706, "name": "lastBtcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 154, "src": "7077:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "src": "7066:23:6", "typeDescriptions": {"typeIdentifier": "t_bool", "typeString": "bool"}}, "falseBody": {"id": 739, "nodeType": "Block", "src": "7190:84:6", "statements": [{"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 736, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 734, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7255:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 735, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7261:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "7255:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 731, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 700, "src": "7241:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 728, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 726, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7228:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 727, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7234:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "7228:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 724, "name": "lastBtcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 154, "src": "7211:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 725, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "7211:16:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 729, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7211:25:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 730, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "7211:29:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 732, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7211:39:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 733, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "7211:43:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 737, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7211:52:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 704, "id": 738, "nodeType": "Return", "src": "7204:59:6"}]}, "id": 740, "nodeType": "IfStatement", "src": "7062:212:6", "trueBody": {"id": 723, "nodeType": "Block", "src": "7091:84:6", "statements": [{"expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 720, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 718, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7156:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 719, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7162:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "7156:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"arguments": [{"id": 715, "name": "lastBtcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 154, "src": "7138:12:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_uint256", "typeString": "uint256"}], "expression": {"arguments": [{"commonType": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}, "id": 712, "isConstant": false, "isLValue": false, "isPure": true, "lValueRequested": false, "leftExpression": {"hexValue": "3130", "id": 710, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7125:2:6", "typeDescriptions": {"typeIdentifier": "t_rational_10_by_1", "typeString": "int_const 10"}, "value": "10"}, "nodeType": "BinaryOperation", "operator": "**", "rightExpression": {"hexValue": "36", "id": 711, "isConstant": false, "isLValue": false, "isPure": true, "kind": "number", "lValueRequested": false, "nodeType": "Literal", "src": "7131:1:6", "typeDescriptions": {"typeIdentifier": "t_rational_6_by_1", "typeString": "int_const 6"}, "value": "6"}, "src": "7125:7:6", "typeDescriptions": {"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_rational_1000000_by_1", "typeString": "int_const 1000000"}], "expression": {"id": 708, "name": "btcPrice", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 700, "src": "7112:8:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 709, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "mul", "nodeType": "MemberAccess", "referencedDeclaration": 1519, "src": "7112:12:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 713, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7112:21:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 714, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "div", "nodeType": "MemberAccess", "referencedDeclaration": 1534, "src": "7112:25:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 716, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7112:39:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "id": 717, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sub", "nodeType": "MemberAccess", "referencedDeclaration": 1504, "src": "7112:43:6", "typeDescriptions": {"typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$", "typeString": "function (uint256,uint256) pure returns (uint256)"}}, "id": 721, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7112:52:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 704, "id": 722, "nodeType": "Return", "src": "7105:59:6"}]}}]}, "id": 742, "implemented": true, "kind": "function", "modifiers": [], "name": "getPriceDiff", "nodeType": "FunctionDefinition", "parameters": {"id": 701, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 700, "mutability": "mutable", "name": "btcPrice", "nodeType": "VariableDeclaration", "scope": 742, "src": "6985:16:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 699, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "6985:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "6984:18:6"}, "returnParameters": {"id": 704, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 703, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 742, "src": "7026:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 702, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "7026:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "7025:9:6"}, "scope": 767, "src": "6963:318:6", "stateMutability": "view", "virtual": false, "visibility": "internal"}, {"body": {"id": 753, "nodeType": "Block", "src": "7344:51:6", "statements": [{"expression": {"arguments": [{"expression": {"id": 749, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "7377:3:6", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 750, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "7377:10:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "expression": {"id": 747, "name": "btcUp", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 167, "src": "7361:5:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCUP_$79", "typeString": "contract BTCUP"}}, "id": 748, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "balanceOf", "nodeType": "MemberAccess", "referencedDeclaration": 866, "src": "7361:15:6", "typeDescriptions": {"typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$", "typeString": "function (address) view external returns (uint256)"}}, "id": 751, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7361:27:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 746, "id": 752, "nodeType": "Return", "src": "7354:34:6"}]}, "functionSelector": "157d0129", "id": 754, "implemented": true, "kind": "function", "modifiers": [], "name": "getBtcupBalance", "nodeType": "FunctionDefinition", "parameters": {"id": 743, "nodeType": "ParameterList", "parameters": [], "src": "7312:2:6"}, "returnParameters": {"id": 746, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 745, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 754, "src": "7335:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 744, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "7335:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "7334:9:6"}, "scope": 767, "src": "7288:107:6", "stateMutability": "view", "virtual": false, "visibility": "public"}, {"body": {"id": 765, "nodeType": "Block", "src": "7460:53:6", "statements": [{"expression": {"arguments": [{"expression": {"id": 761, "name": "msg", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": -15, "src": "7495:3:6", "typeDescriptions": {"typeIdentifier": "t_magic_message", "typeString": "msg"}}, "id": 762, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "sender", "nodeType": "MemberAccess", "src": "7495:10:6", "typeDescriptions": {"typeIdentifier": "t_address", "typeString": "address"}}], "expression": {"argumentTypes": [{"typeIdentifier": "t_address", "typeString": "address"}], "expression": {"id": 759, "name": "btcDown", "nodeType": "Identifier", "overloadedDeclarations": [], "referencedDeclaration": 174, "src": "7477:7:6", "typeDescriptions": {"typeIdentifier": "t_contract$_BTCDOWN_$123", "typeString": "contract BTCDOWN"}}, "id": 760, "isConstant": false, "isLValue": false, "isPure": false, "lValueRequested": false, "memberName": "balanceOf", "nodeType": "MemberAccess", "referencedDeclaration": 866, "src": "7477:17:6", "typeDescriptions": {"typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$", "typeString": "function (address) view external returns (uint256)"}}, "id": 763, "isConstant": false, "isLValue": false, "isPure": false, "kind": "functionCall", "lValueRequested": false, "names": [], "nodeType": "FunctionCall", "src": "7477:29:6", "tryCall": false, "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "functionReturnParameters": 758, "id": 764, "nodeType": "Return", "src": "7470:36:6"}]}, "functionSelector": "c7e3b124", "id": 766, "implemented": true, "kind": "function", "modifiers": [], "name": "getBtcdownBalance", "nodeType": "FunctionDefinition", "parameters": {"id": 755, "nodeType": "ParameterList", "parameters": [], "src": "7428:2:6"}, "returnParameters": {"id": 758, "nodeType": "ParameterList", "parameters": [{"constant": false, "id": 757, "mutability": "mutable", "name": "", "nodeType": "VariableDeclaration", "scope": 766, "src": "7451:7:6", "stateVariable": false, "storageLocation": "default", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}, "typeName": {"id": 756, "name": "uint256", "nodeType": "ElementaryTypeName", "src": "7451:7:6", "typeDescriptions": {"typeIdentifier": "t_uint256", "typeString": "uint256"}}, "visibility": "internal"}], "src": "7450:9:6"}, "scope": 767, "src": "7402:111:6", "stateMutability": "view", "virtual": false, "visibility": "public"}], "scope": 768, "src": "1261:6256:6"}], "src": "32:7485:6"}, "bytecode": "608060408190526000805460ff19168155620f424060018190556002556003819055600481905560058190556006819055600755600880546001600160a01b031990811673b7a4f3e9097c08da09517b5ab877f7a917224ede1790915560098054909116736135b13325bfc4b00278b4abc5e20bbce2d6580e1790556100849061011c565b604051809103906000f0801580156100a0573d6000803e3d6000fd5b50600a80546001600160a01b0319166001600160a01b03929092169190911790556040516100cd90610129565b604051809103906000f0801580156100e9573d6000803e3d6000fd5b50600b80546001600160a01b0319166001600160a01b039290921691909117905534801561011657600080fd5b50610136565b610e41806110a083390190565b610e4580611ee183390190565b610f5b806101456000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063a14274e8116100ad578063dde7be2c11610071578063dde7be2c146101e6578063f0156e8a146101ee578063f06847d6146101f6578063f4352c57146101fe578063f530c04a1461020657610120565b8063a14274e81461019d578063b75cbe0b146101b0578063c46d4f09146101b8578063c7e3b124146101cb578063d1ee539d146101d357610120565b80633074fff7116100f45780633074fff71461015b5780633a3610bc146101705780636e5d66151461017857806381c2b29b146101825780639b3075a11461018a57610120565b806234b9cc146101255780630c3e53431461014357806314d7c6d21461014b578063157d012914610153575b600080fd5b61012d610219565b60405161013a9190610d81565b60405180910390f35b61012d61021f565b61012d610225565b61012d61022b565b6101636102b1565b60405161013a9190610cd1565b61012d6102ba565b610180610347565b005b61012d6103d7565b610180610198366004610c01565b610413565b6101806101ab366004610c01565b610461565b61012d6105c1565b6101806101c6366004610c01565b6105c7565b61012d610721565b6101806101e1366004610c01565b610752565b61012d6108b2565b61012d6108b8565b61012d6108be565b61012d6108ef565b610180610214366004610c01565b6108f5565b60055481565b60025481565b60045481565b600a546040516370a0823160e01b81526000916001600160a01b0316906370a082319061025c903390600401610c80565b60206040518083038186803b15801561027457600080fd5b505afa158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac9190610c19565b905090565b60005460ff1681565b60095460408051633fabe5a360e21b815290516000926001600160a01b0316918391839163feaf968c9160048083019260a0929190829003018186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b9190610c31565b50919550505050505090565b60006103516102ba565b9050600060035411801561036757506000600454115b156103d257600061037782610a4f565b9050600061038483610a8d565b13156103af576003546103979082610aaa565b6003556004546103a79082610abd565b6004556103d0565b6003546103bc9082610abd565b6003556004546103cc9082610aaa565b6004555b505b600755565b600060065460001461040c57610407600654610401620f4240600454610ac990919063ffffffff16565b90610ad5565b6102ac565b5060025490565b60005460ff161561043f5760405162461bcd60e51b815260040161043690610d4a565b60405180910390fd5b610448816108f5565b610451816105c7565b506000805460ff19166001179055565b610469610347565b600b54604051630852cd8d60e31b81526001600160a01b03909116906342966c6890610499908490600401610d81565b600060405180830381600087803b1580156104b357600080fd5b505af11580156104c7573d6000803e3d6000fd5b50506008546001600160a01b031691506104e190506103d7565b60028190556000906104fd90620f424090610401908690610ac9565b60405163a9059cbb60e01b81529091506001600160a01b0383169063a9059cbb9061052e9033908590600401610cb8565b602060405180830381600087803b15801561054857600080fd5b505af115801561055c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105809190610be1565b61059c5760405162461bcd60e51b815260040161043690610cdc565b6006546105a99084610abd565b6006556004546105b99082610abd565b600455505050565b60065481565b6105cf610347565b600b5460405163140e25ad60e31b81526001600160a01b039091169063a0712d68906105ff908490600401610d81565b600060405180830381600087803b15801561061957600080fd5b505af115801561062d573d6000803e3d6000fd5b50506008546001600160a01b0316915061064790506103d7565b600281905560009061066390620f424090610401908690610ac9565b6040516323b872dd60e01b81529091506001600160a01b038316906323b872dd9061069690339030908690600401610c94565b602060405180830381600087803b1580156106b057600080fd5b505af11580156106c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e89190610be1565b6107045760405162461bcd60e51b815260040161043690610d13565b6006546107119084610aaa565b6006556004546105b99082610aaa565b600b546040516370a0823160e01b81526000916001600160a01b0316906370a082319061025c903390600401610c80565b61075a610347565b600a54604051630852cd8d60e31b81526001600160a01b03909116906342966c689061078a908490600401610d81565b600060405180830381600087803b1580156107a457600080fd5b505af11580156107b8573d6000803e3d6000fd5b50506008546001600160a01b031691506107d290506108be565b60018190556000906107ee90620f424090610401908690610ac9565b60405163a9059cbb60e01b81529091506001600160a01b0383169063a9059cbb9061081f9033908590600401610cb8565b602060405180830381600087803b15801561083957600080fd5b505af115801561084d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108719190610be1565b61088d5760405162461bcd60e51b815260040161043690610cdc565b60055461089a9084610abd565b6005556003546108aa9082610abd565b600355505050565b60035481565b60015481565b60006005546000146108e857610407600554610401620f4240600354610ac990919063ffffffff16565b5060015490565b60075481565b6108fd610347565b600a5460405163140e25ad60e31b81526001600160a01b039091169063a0712d689061092d908490600401610d81565b600060405180830381600087803b15801561094757600080fd5b505af115801561095b573d6000803e3d6000fd5b50506008546001600160a01b0316915061097590506108be565b600181905560009061099190620f424090610401908690610ac9565b6040516323b872dd60e01b81529091506001600160a01b038316906323b872dd906109c490339030908690600401610c94565b602060405180830381600087803b1580156109de57600080fd5b505af11580156109f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a169190610be1565b610a325760405162461bcd60e51b815260040161043690610d13565b600554610a3f9084610aaa565b6005556003546108aa9082610aaa565b600080610a5b83610ae1565b9050610a84620f4240610401610a7084610b40565b610a7e600354600454610bb0565b90610ac9565b9150505b919050565b6000600754821115610aa157506001610a88565b50600019610a88565b6000610ab68284610d8a565b9392505050565b6000610ab68284610ef8565b6000610ab68284610ed9565b6000610ab68284610da2565b6000600754821115610b1d57610b16620f4240610b10600754610401620f424087610ac990919063ffffffff16565b90610abd565b9050610a88565b610b16620f4240610b1084610401620f4240600754610ac990919063ffffffff16565b600080610b4e836003610ed9565b620f4240610b5d600286610e08565b610b679190610da2565b610b72906009610ed9565b610b7c9190610d8a565b610b8990620f4240610d8a565b905064e8d4a51000610b9b8282610da2565b610ba890620f4240610ef8565b949350505050565b600081831115610bc05781610ab6565b5090919050565b805169ffffffffffffffffffff81168114610a8857600080fd5b600060208284031215610bf2578081fd5b81518015158114610ab6578182fd5b600060208284031215610c12578081fd5b5035919050565b600060208284031215610c2a578081fd5b5051919050565b600080600080600060a08688031215610c48578081fd5b610c5186610bc7565b9450602086015193506040860151925060608601519150610c7460808701610bc7565b90509295509295909350565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60208082526019908201527f4e6f7420656e6f756768207573646320617661696c61626c6500000000000000604082015260600190565b6020808252601a908201527f596f7520646f6e2774206861766520656e6f7567682055534443000000000000604082015260600190565b6020808252601f908201527f54686520706f6f6c2077617320616c726561647920696e697469617465642e00604082015260600190565b90815260200190565b60008219821115610d9d57610d9d610f0f565b500190565b600082610dbd57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611610dd45750610dff565b818704821115610de657610de6610f0f565b80861615610df357918102915b9490941c938002610dc5565b94509492505050565b6000610ab660001960ff851684600082610e2457506001610ab6565b81610e3157506000610ab6565b8160018114610e475760028114610e5157610e7e565b6001915050610ab6565b60ff841115610e6257610e62610f0f565b6001841b915084821115610e7857610e78610f0f565b50610ab6565b5060208310610133831016604e8410600b8410161715610eb1575081810a83811115610eac57610eac610f0f565b610ab6565b610ebe8484846001610dc2565b808604821115610ed057610ed0610f0f565b02949350505050565b6000816000190483118215151615610ef357610ef3610f0f565b500290565b600082821015610f0a57610f0a610f0f565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220eeb344c7b69a7aa3f8193aa66bc93500641544f6db61a78d49ef52e6268dbcde64736f6c6343000800003360806040523480156200001157600080fd5b50604080518082018252600a8152690426974636f696e2055760b41b602080830191825283518085019094526005845264042544355560dc1b908401528151919291620000619160039162000080565b5080516200007790600490602084019062000080565b50505062000163565b8280546200008e9062000126565b90600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b6002810460018216806200013b57607f821691505b602082108114156200015d57634e487b7160e01b600052602260045260246000fd5b50919050565b610cce80620001736000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c578063a0712d6811610066578063a0712d6814610192578063a457c2d7146101a5578063a9059cbb146101b8578063dd62ed3e146101cb576100cf565b806342966c681461016257806370a082311461017757806395d89b411461018a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011257806323b872dd14610127578063313ce5671461013a578063395093511461014f575b600080fd5b6100dc6101de565b6040516100e99190610913565b60405180910390f35b6101056101003660046108c7565b610270565b6040516100e99190610908565b61011a61028d565b6040516100e99190610c01565b61010561013536600461088c565b610293565b61014261032c565b6040516100e99190610c0a565b61010561015d3660046108c7565b610331565b6101756101703660046108f0565b610385565b005b61011a610185366004610839565b610392565b6100dc6103b1565b6101756101a03660046108f0565b6103c0565b6101056101b33660046108c7565b6103ca565b6101056101c63660046108c7565b610443565b61011a6101d936600461085a565b610457565b6060600380546101ed90610c47565b80601f016020809104026020016040519081016040528092919081815260200182805461021990610c47565b80156102665780601f1061023b57610100808354040283529160200191610266565b820191906000526020600020905b81548152906001019060200180831161024957829003601f168201915b5050505050905090565b600061028461027d610482565b8484610486565b50600192915050565b60025490565b60006102a084848461053a565b6001600160a01b0384166000908152600160205260408120816102c1610482565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508281101561030d5760405162461bcd60e51b815260040161030490610a73565b60405180910390fd5b61032185610319610482565b858403610486565b506001949350505050565b600690565b600061028461033e610482565b84846001600061034c610482565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103809190610c18565b610486565b61038f3282610664565b50565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101ed90610c47565b61038f3282610756565b600080600160006103d9610482565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156104255760405162461bcd60e51b815260040161030490610b85565b610439610430610482565b85858403610486565b5060019392505050565b6000610284610450610482565b848461053a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104ac5760405162461bcd60e51b815260040161030490610b41565b6001600160a01b0382166104d25760405162461bcd60e51b8152600401610304906109eb565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061052d908590610c01565b60405180910390a3505050565b6001600160a01b0383166105605760405162461bcd60e51b815260040161030490610afc565b6001600160a01b0382166105865760405162461bcd60e51b815260040161030490610966565b610591838383610751565b6001600160a01b038316600090815260208190526040902054818110156105ca5760405162461bcd60e51b815260040161030490610a2d565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610601908490610c18565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161064b9190610c01565b60405180910390a361065e848484610751565b50505050565b6001600160a01b03821661068a5760405162461bcd60e51b815260040161030490610abb565b61069682600083610751565b6001600160a01b038216600090815260208190526040902054818110156106cf5760405162461bcd60e51b8152600401610304906109a9565b6001600160a01b03831660009081526020819052604081208383039055600280548492906106fe908490610c30565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610741908690610c01565b60405180910390a3610751836000845b505050565b6001600160a01b03821661077c5760405162461bcd60e51b815260040161030490610bca565b61078860008383610751565b806002600082825461079a9190610c18565b90915550506001600160a01b038216600090815260208190526040812080548392906107c7908490610c18565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061080a908590610c01565b60405180910390a361081e60008383610751565b5050565b80356001600160a01b03811681146103ac57600080fd5b60006020828403121561084a578081fd5b61085382610822565b9392505050565b6000806040838503121561086c578081fd5b61087583610822565b915061088360208401610822565b90509250929050565b6000806000606084860312156108a0578081fd5b6108a984610822565b92506108b760208501610822565b9150604084013590509250925092565b600080604083850312156108d9578182fd5b6108e283610822565b946020939093013593505050565b600060208284031215610901578081fd5b5035919050565b901515815260200190565b6000602080835283518082850152825b8181101561093f57858101830151858201604001528201610923565b818111156109505783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610c2b57610c2b610c82565b500190565b600082821015610c4257610c42610c82565b500390565b600281046001821680610c5b57607f821691505b60208210811415610c7c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220ea613124a03f391a7689c465510546af6bc6d3e49252b1d68ee7202d6d39711464736f6c6343000800003360806040523480156200001157600080fd5b50604080518082018252600c81526b2134ba31b7b4b7102237bbb760a11b602080830191825283518085019094526007845266212a21a227aba760c91b908401528151919291620000659160039162000084565b5080516200007b90600490602084019062000084565b50505062000167565b82805462000092906200012a565b90600052602060002090601f016020900481019282620000b6576000855562000101565b82601f10620000d157805160ff191683800117855562000101565b8280016001018555821562000101579182015b8281111562000101578251825591602001919060010190620000e4565b506200010f92915062000113565b5090565b5b808211156200010f576000815560010162000114565b6002810460018216806200013f57607f821691505b602082108114156200016157634e487b7160e01b600052602260045260246000fd5b50919050565b610cce80620001776000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c578063a0712d6811610066578063a0712d6814610192578063a457c2d7146101a5578063a9059cbb146101b8578063dd62ed3e146101cb576100cf565b806342966c681461016257806370a082311461017757806395d89b411461018a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011257806323b872dd14610127578063313ce5671461013a578063395093511461014f575b600080fd5b6100dc6101de565b6040516100e99190610913565b60405180910390f35b6101056101003660046108c7565b610270565b6040516100e99190610908565b61011a61028d565b6040516100e99190610c01565b61010561013536600461088c565b610293565b61014261032c565b6040516100e99190610c0a565b61010561015d3660046108c7565b610331565b6101756101703660046108f0565b610385565b005b61011a610185366004610839565b610392565b6100dc6103b1565b6101756101a03660046108f0565b6103c0565b6101056101b33660046108c7565b6103ca565b6101056101c63660046108c7565b610443565b61011a6101d936600461085a565b610457565b6060600380546101ed90610c47565b80601f016020809104026020016040519081016040528092919081815260200182805461021990610c47565b80156102665780601f1061023b57610100808354040283529160200191610266565b820191906000526020600020905b81548152906001019060200180831161024957829003601f168201915b5050505050905090565b600061028461027d610482565b8484610486565b50600192915050565b60025490565b60006102a084848461053a565b6001600160a01b0384166000908152600160205260408120816102c1610482565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508281101561030d5760405162461bcd60e51b815260040161030490610a73565b60405180910390fd5b61032185610319610482565b858403610486565b506001949350505050565b600690565b600061028461033e610482565b84846001600061034c610482565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103809190610c18565b610486565b61038f3282610664565b50565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101ed90610c47565b61038f3282610756565b600080600160006103d9610482565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156104255760405162461bcd60e51b815260040161030490610b85565b610439610430610482565b85858403610486565b5060019392505050565b6000610284610450610482565b848461053a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166104ac5760405162461bcd60e51b815260040161030490610b41565b6001600160a01b0382166104d25760405162461bcd60e51b8152600401610304906109eb565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061052d908590610c01565b60405180910390a3505050565b6001600160a01b0383166105605760405162461bcd60e51b815260040161030490610afc565b6001600160a01b0382166105865760405162461bcd60e51b815260040161030490610966565b610591838383610751565b6001600160a01b038316600090815260208190526040902054818110156105ca5760405162461bcd60e51b815260040161030490610a2d565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610601908490610c18565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161064b9190610c01565b60405180910390a361065e848484610751565b50505050565b6001600160a01b03821661068a5760405162461bcd60e51b815260040161030490610abb565b61069682600083610751565b6001600160a01b038216600090815260208190526040902054818110156106cf5760405162461bcd60e51b8152600401610304906109a9565b6001600160a01b03831660009081526020819052604081208383039055600280548492906106fe908490610c30565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610741908690610c01565b60405180910390a3610751836000845b505050565b6001600160a01b03821661077c5760405162461bcd60e51b815260040161030490610bca565b61078860008383610751565b806002600082825461079a9190610c18565b90915550506001600160a01b038216600090815260208190526040812080548392906107c7908490610c18565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061080a908590610c01565b60405180910390a361081e60008383610751565b5050565b80356001600160a01b03811681146103ac57600080fd5b60006020828403121561084a578081fd5b61085382610822565b9392505050565b6000806040838503121561086c578081fd5b61087583610822565b915061088360208401610822565b90509250929050565b6000806000606084860312156108a0578081fd5b6108a984610822565b92506108b760208501610822565b9150604084013590509250925092565b600080604083850312156108d9578182fd5b6108e283610822565b946020939093013593505050565b600060208284031215610901578081fd5b5035919050565b901515815260200190565b6000602080835283518082850152825b8181101561093f57858101830151858201604001528201610923565b818111156109505783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604082015261636560f01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610c2b57610c2b610c82565b500190565b600082821015610c4257610c42610c82565b500390565b600281046001821680610c5b57607f821691505b60208210811415610c7c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212205ea4bb5a8dc6adc8e5152e236f91b777e5a60ecfd6e826d43d2128382e4097e564736f6c63430008000033", "bytecodeSha1": "a5abf2b10ef1b32518687e9bd057d9492e7aea39", "compiler": {"evm_version": "istanbul", "optimizer": {"enabled": true, "runs": 200}, "version": "0.8.0+commit.c7dfd78e"}, "contractName": "LeveragedTrading", "coverageMap": {"branches": {"0": {}, "1": {}, "2": {}, "3": {}, "4": {}, "5": {}, "6": {"LeveragedTrading.getBtcDownPrice": {"49": [6144, 6162, true]}, "LeveragedTrading.getBtcUpPrice": {"54": [5934, 5950, true]}, "LeveragedTrading.getPriceDiff": {"57": [7066, 7089, false]}, "LeveragedTrading.getSign": {"56": [5481, 5504, false]}, "LeveragedTrading.initiatePool": {"50": [2205, 2221, true]}, "LeveragedTrading.issueBtcDown": {"52": [3267, 3323, true]}, "LeveragedTrading.issueBtcUp": {"55": [2714, 2770, true]}, "LeveragedTrading.min": {"58": [6702, 6708, true]}, "LeveragedTrading.rebalanceLeveragedTokens": {"48": [4806, 4827, false]}, "LeveragedTrading.redeemBtcDown": {"51": [4357, 4395, true]}, "LeveragedTrading.redeemBtcUp": {"53": [3819, 3856, true]}}}, "statements": {"0": {}, "1": {}, "2": {}, "3": {}, "4": {"SafeMath.add": {"40": [2749, 2761]}, "SafeMath.div": {"43": [3844, 3856]}, "SafeMath.mul": {"42": [3459, 3471]}, "SafeMath.sub": {"41": [3116, 3128]}}, "5": {}, "6": {"LeveragedTrading.L": {"46": [6920, 6948]}, "LeveragedTrading.getBtcDownPrice": {"6": [6137, 6230]}, "LeveragedTrading.getBtcUpPrice": {"30": [5927, 6012]}, "LeveragedTrading.getBtcdownBalance": {"23": [7470, 7506]}, "LeveragedTrading.getBtcupBalance": {"0": [7354, 7388]}, "LeveragedTrading.getPriceDiff": {"44": [7105, 7164], "45": [7204, 7263]}, "LeveragedTrading.getRebalanceAmount": {"37": [5741, 5818]}, "LeveragedTrading.getSign": {"38": [5520, 5528], "39": [5567, 5576]}, "LeveragedTrading.initiatePool": {"7": [2197, 2257], "8": [2268, 2301], "9": [2311, 2346], "10": [2357, 2379]}, "LeveragedTrading.issueBtcDown": {"17": [3008, 3034], "18": [3044, 3079], "19": [3133, 3165], "20": [3259, 3354], "21": [3365, 3421], "22": [3431, 3484]}, "LeveragedTrading.issueBtcUp": {"31": [2462, 2488], "32": [2498, 2531], "33": [2585, 2613], "34": [2706, 2801], "35": [2812, 2864], "36": [2874, 2923]}, "LeveragedTrading.min": {"47": [6695, 6716]}, "LeveragedTrading.rebalanceLeveragedTokens": {"1": [4847, 4901], "2": [4919, 4977], "3": [5029, 5083], "4": [5101, 5159], "5": [5195, 5218]}, "LeveragedTrading.redeemBtcDown": {"11": [4094, 4120], "12": [4130, 4165], "13": [4219, 4251], "14": [4349, 4425], "15": [4436, 4492], "16": [4502, 4555]}, "LeveragedTrading.redeemBtcUp": {"24": [3568, 3594], "25": [3604, 3637], "26": [3691, 3719], "27": [3811, 3886], "28": [3897, 3949], "29": [3959, 4008]}}}}, "dependencies": ["smartcontractkit/chainlink@1.3.0/AggregatorV3Interface", "BTCDOWN", "BTCUP", "OpenZeppelin/openzeppelin-contracts@4.2.0/Context", "OpenZeppelin/openzeppelin-contracts@4.2.0/ERC20", "IERC20", "OpenZeppelin/openzeppelin-contracts@4.2.0/IERC20", "OpenZeppelin/openzeppelin-contracts@4.2.0/IERC20Metadata", "OpenZeppelin/openzeppelin-contracts@4.2.0/SafeMath"], "deployedBytecode": "608060405234801561001057600080fd5b50600436106101205760003560e01c8063a14274e8116100ad578063dde7be2c11610071578063dde7be2c146101e6578063f0156e8a146101ee578063f06847d6146101f6578063f4352c57146101fe578063f530c04a1461020657610120565b8063a14274e81461019d578063b75cbe0b146101b0578063c46d4f09146101b8578063c7e3b124146101cb578063d1ee539d146101d357610120565b80633074fff7116100f45780633074fff71461015b5780633a3610bc146101705780636e5d66151461017857806381c2b29b146101825780639b3075a11461018a57610120565b806234b9cc146101255780630c3e53431461014357806314d7c6d21461014b578063157d012914610153575b600080fd5b61012d610219565b60405161013a9190610d81565b60405180910390f35b61012d61021f565b61012d610225565b61012d61022b565b6101636102b1565b60405161013a9190610cd1565b61012d6102ba565b610180610347565b005b61012d6103d7565b610180610198366004610c01565b610413565b6101806101ab366004610c01565b610461565b61012d6105c1565b6101806101c6366004610c01565b6105c7565b61012d610721565b6101806101e1366004610c01565b610752565b61012d6108b2565b61012d6108b8565b61012d6108be565b61012d6108ef565b610180610214366004610c01565b6108f5565b60055481565b60025481565b60045481565b600a546040516370a0823160e01b81526000916001600160a01b0316906370a082319061025c903390600401610c80565b60206040518083038186803b15801561027457600080fd5b505afa158015610288573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ac9190610c19565b905090565b60005460ff1681565b60095460408051633fabe5a360e21b815290516000926001600160a01b0316918391839163feaf968c9160048083019260a0929190829003018186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b9190610c31565b50919550505050505090565b60006103516102ba565b9050600060035411801561036757506000600454115b156103d257600061037782610a4f565b9050600061038483610a8d565b13156103af576003546103979082610aaa565b6003556004546103a79082610abd565b6004556103d0565b6003546103bc9082610abd565b6003556004546103cc9082610aaa565b6004555b505b600755565b600060065460001461040c57610407600654610401620f4240600454610ac990919063ffffffff16565b90610ad5565b6102ac565b5060025490565b60005460ff161561043f5760405162461bcd60e51b815260040161043690610d4a565b60405180910390fd5b610448816108f5565b610451816105c7565b506000805460ff19166001179055565b610469610347565b600b54604051630852cd8d60e31b81526001600160a01b03909116906342966c6890610499908490600401610d81565b600060405180830381600087803b1580156104b357600080fd5b505af11580156104c7573d6000803e3d6000fd5b50506008546001600160a01b031691506104e190506103d7565b60028190556000906104fd90620f424090610401908690610ac9565b60405163a9059cbb60e01b81529091506001600160a01b0383169063a9059cbb9061052e9033908590600401610cb8565b602060405180830381600087803b15801561054857600080fd5b505af115801561055c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105809190610be1565b61059c5760405162461bcd60e51b815260040161043690610cdc565b6006546105a99084610abd565b6006556004546105b99082610abd565b600455505050565b60065481565b6105cf610347565b600b5460405163140e25ad60e31b81526001600160a01b039091169063a0712d68906105ff908490600401610d81565b600060405180830381600087803b15801561061957600080fd5b505af115801561062d573d6000803e3d6000fd5b50506008546001600160a01b0316915061064790506103d7565b600281905560009061066390620f424090610401908690610ac9565b6040516323b872dd60e01b81529091506001600160a01b038316906323b872dd9061069690339030908690600401610c94565b602060405180830381600087803b1580156106b057600080fd5b505af11580156106c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e89190610be1565b6107045760405162461bcd60e51b815260040161043690610d13565b6006546107119084610aaa565b6006556004546105b99082610aaa565b600b546040516370a0823160e01b81526000916001600160a01b0316906370a082319061025c903390600401610c80565b61075a610347565b600a54604051630852cd8d60e31b81526001600160a01b03909116906342966c689061078a908490600401610d81565b600060405180830381600087803b1580156107a457600080fd5b505af11580156107b8573d6000803e3d6000fd5b50506008546001600160a01b031691506107d290506108be565b60018190556000906107ee90620f424090610401908690610ac9565b60405163a9059cbb60e01b81529091506001600160a01b0383169063a9059cbb9061081f9033908590600401610cb8565b602060405180830381600087803b15801561083957600080fd5b505af115801561084d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108719190610be1565b61088d5760405162461bcd60e51b815260040161043690610cdc565b60055461089a9084610abd565b6005556003546108aa9082610abd565b600355505050565b60035481565b60015481565b60006005546000146108e857610407600554610401620f4240600354610ac990919063ffffffff16565b5060015490565b60075481565b6108fd610347565b600a5460405163140e25ad60e31b81526001600160a01b039091169063a0712d689061092d908490600401610d81565b600060405180830381600087803b15801561094757600080fd5b505af115801561095b573d6000803e3d6000fd5b50506008546001600160a01b0316915061097590506108be565b600181905560009061099190620f424090610401908690610ac9565b6040516323b872dd60e01b81529091506001600160a01b038316906323b872dd906109c490339030908690600401610c94565b602060405180830381600087803b1580156109de57600080fd5b505af11580156109f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a169190610be1565b610a325760405162461bcd60e51b815260040161043690610d13565b600554610a3f9084610aaa565b6005556003546108aa9082610aaa565b600080610a5b83610ae1565b9050610a84620f4240610401610a7084610b40565b610a7e600354600454610bb0565b90610ac9565b9150505b919050565b6000600754821115610aa157506001610a88565b50600019610a88565b6000610ab68284610d8a565b9392505050565b6000610ab68284610ef8565b6000610ab68284610ed9565b6000610ab68284610da2565b6000600754821115610b1d57610b16620f4240610b10600754610401620f424087610ac990919063ffffffff16565b90610abd565b9050610a88565b610b16620f4240610b1084610401620f4240600754610ac990919063ffffffff16565b600080610b4e836003610ed9565b620f4240610b5d600286610e08565b610b679190610da2565b610b72906009610ed9565b610b7c9190610d8a565b610b8990620f4240610d8a565b905064e8d4a51000610b9b8282610da2565b610ba890620f4240610ef8565b949350505050565b600081831115610bc05781610ab6565b5090919050565b805169ffffffffffffffffffff81168114610a8857600080fd5b600060208284031215610bf2578081fd5b81518015158114610ab6578182fd5b600060208284031215610c12578081fd5b5035919050565b600060208284031215610c2a578081fd5b5051919050565b600080600080600060a08688031215610c48578081fd5b610c5186610bc7565b9450602086015193506040860151925060608601519150610c7460808701610bc7565b90509295509295909350565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60208082526019908201527f4e6f7420656e6f756768207573646320617661696c61626c6500000000000000604082015260600190565b6020808252601a908201527f596f7520646f6e2774206861766520656e6f7567682055534443000000000000604082015260600190565b6020808252601f908201527f54686520706f6f6c2077617320616c726561647920696e697469617465642e00604082015260600190565b90815260200190565b60008219821115610d9d57610d9d610f0f565b500190565b600082610dbd57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611610dd45750610dff565b818704821115610de657610de6610f0f565b80861615610df357918102915b9490941c938002610dc5565b94509492505050565b6000610ab660001960ff851684600082610e2457506001610ab6565b81610e3157506000610ab6565b8160018114610e475760028114610e5157610e7e565b6001915050610ab6565b60ff841115610e6257610e62610f0f565b6001841b915084821115610e7857610e78610f0f565b50610ab6565b5060208310610133831016604e8410600b8410161715610eb1575081810a83811115610eac57610eac610f0f565b610ab6565b610ebe8484846001610dc2565b808604821115610ed057610ed0610f0f565b02949350505050565b6000816000190483118215151615610ef357610ef3610f0f565b500290565b600082821015610f0a57610f0a610f0f565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220eeb344c7b69a7aa3f8193aa66bc93500641544f6db61a78d49ef52e6268dbcde64736f6c63430008000033", "deployedSourceMap": "1261:6256:6:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1578:30;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1408:37;;;:::i;1535:36::-;;;:::i;7288:107::-;;;:::i;1325:35::-;;;:::i;:::-;;;;;;;:::i;6290:317::-;;;:::i;4571:654::-;;;:::i;:::-;;6058:179;;;:::i;2127:259::-;;;;;;:::i;:::-;;:::i;4023:540::-;;;;;;:::i;:::-;;:::i;1638:32::-;;;:::i;2938:553::-;;;;;;:::i;:::-;;:::i;7402:111::-;;;:::i;3499:516::-;;;;;;:::i;:::-;;:::i;1473:34::-;;;:::i;1367:35::-;;;:::i;5862:157::-;;;:::i;1699:31::-;;;:::i;2394:536::-;;;;;;:::i;:::-;;:::i;1578:30::-;;;;:::o;1408:37::-;;;;:::o;1535:36::-;;;;:::o;7288:107::-;7361:5;;:27;;-1:-1:-1;;;7361:27:6;;7335:7;;-1:-1:-1;;;;;7361:5:6;;:15;;:27;;7377:10;;7361:27;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7354:34;;7288:107;:::o;1325:35::-;;;;;;:::o;6290:317::-;6409:17;;6459:27;;;-1:-1:-1;;;6459:27:6;;;;6334:7;;-1:-1:-1;;;;;6409:17:6;;6334:7;;6409:17;;6459:25;;:27;;;;;;;;;;;;;;6409:17;6459:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;6437:49:6;;-1:-1:-1;;;;;;6290:317:6;:::o;4571:654::-;4624:16;4643:13;:11;:13::i;:::-;4624:32;;4689:1;4671:15;;:19;4670:48;;;;;4716:1;4696:17;;:21;4670:48;4666:519;;;4734:23;4760:28;4779:8;4760:18;:28::i;:::-;4734:54;;4826:1;4806:17;4814:8;4806:7;:17::i;:::-;:21;4802:372;;;4865:15;;:36;;4885:15;4865:19;:36::i;:::-;4847:15;:54;4939:17;;:38;;4961:15;4939:21;:38::i;:::-;4919:17;:58;4802:372;;;5047:15;;:36;;5067:15;5047:19;:36::i;:::-;5029:15;:54;5121:17;;:38;;5143:15;5121:21;:38::i;:::-;5101:17;:58;4802:372;4666:519;;5195:12;:23;4571:654::o;6058:179::-;6106:7;6144:13;;6161:1;6144:18;:86;;6181:49;6216:13;;6181:30;6203:7;6181:17;;:21;;:30;;;;:::i;:::-;:34;;:49::i;:::-;6144:86;;;-1:-1:-1;6166:12:6;;;6058:179::o;2127:259::-;2206:15;;;;2205:16;2197:60;;;;-1:-1:-1;;;2197:60:6;;;;;;;:::i;:::-;;;;;;;;;2268:33;2279:21;2268:10;:33::i;:::-;2311:35;2324:21;2311:12;:35::i;:::-;-1:-1:-1;2357:15:6;:22;;-1:-1:-1;;2357:22:6;2375:4;2357:22;;;2127:259::o;4023:540::-;4094:26;:24;:26::i;:::-;4130:7;;:35;;-1:-1:-1;;;4130:35:6;;-1:-1:-1;;;;;4130:7:6;;;;:12;;:35;;4143:21;;4130:35;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4197:11:6;;-1:-1:-1;;;;;4197:11:6;;-1:-1:-1;4234:17:6;;-1:-1:-1;4234:15:6;:17::i;:::-;4219:12;:32;;;4266:18;;4287:52;;4331:7;;4287:39;;:21;;:25;:39::i;:52::-;4357:38;;-1:-1:-1;;;4357:38:6;;4266:73;;-1:-1:-1;;;;;;4357:13:6;;;;;:38;;4371:10;;4266:73;;4357:38;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4349:76;;;;-1:-1:-1;;;4349:76:6;;;;;;;:::i;:::-;4452:13;;:40;;4470:21;4452:17;:40::i;:::-;4436:13;:56;4522:17;;:33;;4544:10;4522:21;:33::i;:::-;4502:17;:53;-1:-1:-1;;;4023:540:6:o;1638:32::-;;;;:::o;2938:553::-;3008:26;:24;:26::i;:::-;3044:7;;:35;;-1:-1:-1;;;3044:35:6;;-1:-1:-1;;;;;3044:7:6;;;;:12;;:35;;3057:21;;3044:35;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3111:11:6;;-1:-1:-1;;;;;3111:11:6;;-1:-1:-1;3148:17:6;;-1:-1:-1;3148:15:6;:17::i;:::-;3133:12;:32;;;3175:18;;3196:52;;3240:7;;3196:39;;:21;;:25;:39::i;:52::-;3267:56;;-1:-1:-1;;;3267:56:6;;3175:73;;-1:-1:-1;;;;;;3267:17:6;;;;;:56;;3285:10;;3305:4;;3175:73;;3267:56;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3259:95;;;;-1:-1:-1;;;3259:95:6;;;;;;;:::i;:::-;3381:13;;:40;;3399:21;3381:17;:40::i;:::-;3365:13;:56;3451:17;;:33;;3473:10;3451:21;:33::i;7402:111::-;7477:7;;:29;;-1:-1:-1;;;7477:29:6;;7451:7;;-1:-1:-1;;;;;7477:7:6;;:17;;:29;;7495:10;;7477:29;;;:::i;3499:516::-;3568:26;:24;:26::i;:::-;3604:5;;:33;;-1:-1:-1;;;3604:33:6;;-1:-1:-1;;;;;3604:5:6;;;;:10;;:33;;3615:21;;3604:33;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3669:11:6;;-1:-1:-1;;;;;3669:11:6;;-1:-1:-1;3704:15:6;;-1:-1:-1;3704:13:6;:15::i;:::-;3691:10;:28;;;3730:18;;3751:50;;3793:7;;3751:37;;:21;;:25;:37::i;:50::-;3819:37;;-1:-1:-1;;;3819:37:6;;3730:71;;-1:-1:-1;;;;;;3819:13:6;;;;;:37;;3833:10;;3730:71;;3819:37;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3811:75;;;;-1:-1:-1;;;3811:75:6;;;;;;;:::i;:::-;3911:11;;:38;;3927:21;3911:15;:38::i;:::-;3897:11;:52;3977:15;;:31;;3997:10;3977:19;:31::i;:::-;3959:15;:49;-1:-1:-1;;;3499:516:6:o;1473:34::-;;;;:::o;1367:35::-;;;;:::o;5862:157::-;5908:7;5934:11;;5949:1;5934:16;:78;;5967:45;6000:11;;5967:28;5987:7;5967:15;;:19;;:28;;;;:::i;5934:78::-;-1:-1:-1;5954:10:6;;;5862:157::o;1699:31::-;;;;:::o;2394:536::-;2462:26;:24;:26::i;:::-;2498:5;;:33;;-1:-1:-1;;;2498:33:6;;-1:-1:-1;;;;;2498:5:6;;;;:10;;:33;;2509:21;;2498:33;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2563:11:6;;-1:-1:-1;;;;;2563:11:6;;-1:-1:-1;2598:15:6;;-1:-1:-1;2598:13:6;:15::i;:::-;2585:10;:28;;;2624:18;;2645:50;;2687:7;;2645:37;;:21;;:25;:37::i;:50::-;2714:56;;-1:-1:-1;;;2714:56:6;;2624:71;;-1:-1:-1;;;;;;2714:17:6;;;;;:56;;2732:10;;2752:4;;2624:71;;2714:56;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2706:95;;;;-1:-1:-1;;;2706:95:6;;;;;;;:::i;:::-;2826:11;;:38;;2842:21;2826:15;:38::i;:::-;2812:11;:52;2892:15;;:31;;2912:10;2892:19;:31::i;5601:224::-;5670:7;5688:17;5708:22;5721:8;5708:12;:22::i;:::-;5688:42;;5748:70;5810:7;5748:57;5792:12;5794:9;5792:1;:12::i;:::-;5748:39;5752:15;;5769:17;;5748:3;:39::i;:::-;:43;;:57::i;:70::-;5741:77;;;5601:224;;;;:::o;5402:191::-;5460:6;5492:12;;5481:8;:23;5477:110;;;-1:-1:-1;5527:1:6;5520:8;;5477:110;-1:-1:-1;;;5567:9:6;;2672:96:4;2730:7;2756:5;2760:1;2756;:5;:::i;:::-;2749:12;2672:96;-1:-1:-1;;;2672:96:4:o;3039:::-;3097:7;3123:5;3127:1;3123;:5;:::i;3382:96::-;3440:7;3466:5;3470:1;3466;:5;:::i;3767:96::-;3825:7;3851:5;3855:1;3851;:5;:::i;6963:318:6:-;7026:7;7077:12;;7066:8;:23;7062:212;;;7112:52;7156:7;7112:39;7138:12;;7112:21;7125:7;7112:8;:12;;:21;;;;:::i;:39::-;:43;;:52::i;:::-;7105:59;;;;7062:212;7211:52;7255:7;7211:39;7241:8;7211:25;7228:7;7211:12;;:16;;:25;;;;:::i;6730:225::-;6775:7;;6862:5;6866:1;6862;:5;:::i;:::-;6850:7;6841:6;6846:1;6841;:6;:::i;:::-;:16;;;;:::i;:::-;6836:22;;:1;:22;:::i;:::-;:31;;;;:::i;:::-;:41;;6870:7;6836:41;:::i;:::-;6820:57;-1:-1:-1;6901:8:6;6937:11;6820:57;6901:8;6937:11;:::i;:::-;6927:21;;:7;:21;:::i;:::-;6920:28;6730:225;-1:-1:-1;;;;6730:225:6:o;6618:105::-;6676:7;6707:1;6702;:6;;:14;;6715:1;6702:14;;;-1:-1:-1;6711:1:6;;6618:105;-1:-1:-1;6618:105:6:o;14:181:7:-;94:13;;147:22;136:34;;126:45;;116:2;;185:1;182;175:12;200:297;;320:2;308:9;299:7;295:23;291:32;288:2;;;341:6;333;326:22;288:2;378:9;372:16;431:5;424:13;417:21;410:5;407:32;397:2;;458:6;450;443:22;502:190;;614:2;602:9;593:7;589:23;585:32;582:2;;;635:6;627;620:22;582:2;-1:-1:-1;663:23:7;;572:120;-1:-1:-1;572:120:7:o;697:194::-;;820:2;808:9;799:7;795:23;791:32;788:2;;;841:6;833;826:22;788:2;-1:-1:-1;869:16:7;;778:113;-1:-1:-1;778:113:7:o;896:487::-;;;;;;1084:3;1072:9;1063:7;1059:23;1055:33;1052:2;;;1106:6;1098;1091:22;1052:2;1134:41;1165:9;1134:41;:::i;:::-;1124:51;;1215:2;1204:9;1200:18;1194:25;1184:35;;1259:2;1248:9;1244:18;1238:25;1228:35;;1303:2;1292:9;1288:18;1282:25;1272:35;;1326:51;1372:3;1361:9;1357:19;1326:51;:::i;:::-;1316:61;;1042:341;;;;;;;;:::o;1388:203::-;-1:-1:-1;;;;;1552:32:7;;;;1534:51;;1522:2;1507:18;;1489:102::o;1596:375::-;-1:-1:-1;;;;;1854:15:7;;;1836:34;;1906:15;;;;1901:2;1886:18;;1879:43;1953:2;1938:18;;1931:34;;;;1786:2;1771:18;;1753:218::o;1976:274::-;-1:-1:-1;;;;;2168:32:7;;;;2150:51;;2232:2;2217:18;;2210:34;2138:2;2123:18;;2105:145::o;2255:187::-;2420:14;;2413:22;2395:41;;2383:2;2368:18;;2350:92::o;2447:349::-;2649:2;2631:21;;;2688:2;2668:18;;;2661:30;2727:27;2722:2;2707:18;;2700:55;2787:2;2772:18;;2621:175::o;2801:350::-;3003:2;2985:21;;;3042:2;3022:18;;;3015:30;3081:28;3076:2;3061:18;;3054:56;3142:2;3127:18;;2975:176::o;3156:355::-;3358:2;3340:21;;;3397:2;3377:18;;;3370:30;3436:33;3431:2;3416:18;;3409:61;3502:2;3487:18;;3330:181::o;3516:177::-;3662:25;;;3650:2;3635:18;;3617:76::o;3698:128::-;;3769:1;3765:6;3762:1;3759:13;3756:2;;;3775:18;;:::i;:::-;-1:-1:-1;3811:9:7;;3746:80::o;3831:217::-;;3897:1;3887:2;;-1:-1:-1;;;3922:31:7;;3976:4;3973:1;3966:15;4004:4;3929:1;3994:15;3887:2;-1:-1:-1;4033:9:7;;3877:171::o;4053:453::-;4149:6;4172:5;4186:314;4235:1;4272:2;4262:8;4259:16;4249:2;;4279:5;;;4249:2;4320:4;4315:3;4311:14;4305:4;4302:24;4299:2;;;4329:18;;:::i;:::-;4379:2;4369:8;4365:17;4362:2;;;4394:16;;;;4362:2;4473:17;;;;;4433:15;;4186:314;;;4130:376;;;;;;;:::o;4511:148::-;;4598:55;-1:-1:-1;;4639:4:7;4625:19;;4619:4;4664:922;4748:8;4738:2;;-1:-1:-1;4789:1:7;4803:5;;4738:2;4837:4;4827:2;;-1:-1:-1;4874:1:7;4888:5;;4827:2;4919:4;4937:1;4932:59;;;;5005:1;5000:183;;;;4912:271;;4932:59;4962:1;4953:10;;4976:5;;;5000:183;5037:3;5027:8;5024:17;5021:2;;;5044:18;;:::i;:::-;5100:1;5090:8;5086:16;5077:25;;5128:3;5121:5;5118:14;5115:2;;;5135:18;;:::i;:::-;5168:5;;;4912:271;;5267:2;5257:8;5254:16;5248:3;5242:4;5239:13;5235:36;5229:2;5219:8;5216:16;5211:2;5205:4;5202:12;5198:35;5195:77;5192:2;;;-1:-1:-1;5304:19:7;;;5339:14;;;5336:2;;;5356:18;;:::i;:::-;5389:5;;5192:2;5436:42;5474:3;5464:8;5458:4;5455:1;5436:42;:::i;:::-;5511:6;5506:3;5502:16;5493:7;5490:29;5487:2;;;5522:18;;:::i;:::-;5560:20;;4728:858;-1:-1:-1;;;;4728:858:7:o;5591:168::-;;5697:1;5693;5689:6;5685:14;5682:1;5679:21;5674:1;5667:9;5660:17;5656:45;5653:2;;;5704:18;;:::i;:::-;-1:-1:-1;5744:9:7;;5643:116::o;5764:125::-;;5832:1;5829;5826:8;5823:2;;;5837:18;;:::i;:::-;-1:-1:-1;5874:9:7;;5813:76::o;5894:127::-;5955:10;5950:3;5946:20;5943:1;5936:31;5986:4;5983:1;5976:15;6010:4;6007:1;6000:15", "language": "Solidity", "natspec": {"kind": "dev", "methods": {}, "version": 1}, "offset": [1261, 7517], "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x120 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0xA14274E8 GT PUSH2 0xAD JUMPI DUP1 PUSH4 0xDDE7BE2C GT PUSH2 0x71 JUMPI DUP1 PUSH4 0xDDE7BE2C EQ PUSH2 0x1E6 JUMPI DUP1 PUSH4 0xF0156E8A EQ PUSH2 0x1EE JUMPI DUP1 PUSH4 0xF06847D6 EQ PUSH2 0x1F6 JUMPI DUP1 PUSH4 0xF4352C57 EQ PUSH2 0x1FE JUMPI DUP1 PUSH4 0xF530C04A EQ PUSH2 0x206 JUMPI PUSH2 0x120 JUMP JUMPDEST DUP1 PUSH4 0xA14274E8 EQ PUSH2 0x19D JUMPI DUP1 PUSH4 0xB75CBE0B EQ PUSH2 0x1B0 JUMPI DUP1 PUSH4 0xC46D4F09 EQ PUSH2 0x1B8 JUMPI DUP1 PUSH4 0xC7E3B124 EQ PUSH2 0x1CB JUMPI DUP1 PUSH4 0xD1EE539D EQ PUSH2 0x1D3 JUMPI PUSH2 0x120 JUMP JUMPDEST DUP1 PUSH4 0x3074FFF7 GT PUSH2 0xF4 JUMPI DUP1 PUSH4 0x3074FFF7 EQ PUSH2 0x15B JUMPI DUP1 PUSH4 0x3A3610BC EQ PUSH2 0x170 JUMPI DUP1 PUSH4 0x6E5D6615 EQ PUSH2 0x178 JUMPI DUP1 PUSH4 0x81C2B29B EQ PUSH2 0x182 JUMPI DUP1 PUSH4 0x9B3075A1 EQ PUSH2 0x18A JUMPI PUSH2 0x120 JUMP JUMPDEST DUP1 PUSH3 0x34B9CC EQ PUSH2 0x125 JUMPI DUP1 PUSH4 0xC3E5343 EQ PUSH2 0x143 JUMPI DUP1 PUSH4 0x14D7C6D2 EQ PUSH2 0x14B JUMPI DUP1 PUSH4 0x157D0129 EQ PUSH2 0x153 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x12D PUSH2 0x219 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x13A SWAP2 SWAP1 PUSH2 0xD81 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x12D PUSH2 0x21F JUMP JUMPDEST PUSH2 0x12D PUSH2 0x225 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x22B JUMP JUMPDEST PUSH2 0x163 PUSH2 0x2B1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x13A SWAP2 SWAP1 PUSH2 0xCD1 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x2BA JUMP JUMPDEST PUSH2 0x180 PUSH2 0x347 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x12D PUSH2 0x3D7 JUMP JUMPDEST PUSH2 0x180 PUSH2 0x198 CALLDATASIZE PUSH1 0x4 PUSH2 0xC01 JUMP JUMPDEST PUSH2 0x413 JUMP JUMPDEST PUSH2 0x180 PUSH2 0x1AB CALLDATASIZE PUSH1 0x4 PUSH2 0xC01 JUMP JUMPDEST PUSH2 0x461 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x5C1 JUMP JUMPDEST PUSH2 0x180 PUSH2 0x1C6 CALLDATASIZE PUSH1 0x4 PUSH2 0xC01 JUMP JUMPDEST PUSH2 0x5C7 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x721 JUMP JUMPDEST PUSH2 0x180 PUSH2 0x1E1 CALLDATASIZE PUSH1 0x4 PUSH2 0xC01 JUMP JUMPDEST PUSH2 0x752 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x8B2 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x8B8 JUMP JUMPDEST PUSH2 0x12D PUSH2 0x8BE JUMP JUMPDEST PUSH2 0x12D PUSH2 0x8EF JUMP JUMPDEST PUSH2 0x180 PUSH2 0x214 CALLDATASIZE PUSH1 0x4 PUSH2 0xC01 JUMP JUMPDEST PUSH2 0x8F5 JUMP JUMPDEST PUSH1 0x5 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0xA SLOAD PUSH1 0x40 MLOAD PUSH4 0x70A08231 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x0 SWAP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 PUSH4 0x70A08231 SWAP1 PUSH2 0x25C SWAP1 CALLER SWAP1 PUSH1 0x4 ADD PUSH2 0xC80 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x274 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x288 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x2AC SWAP2 SWAP1 PUSH2 0xC19 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x9 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH4 0x3FABE5A3 PUSH1 0xE2 SHL DUP2 MSTORE SWAP1 MLOAD PUSH1 0x0 SWAP3 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP2 DUP4 SWAP2 DUP4 SWAP2 PUSH4 0xFEAF968C SWAP2 PUSH1 0x4 DUP1 DUP4 ADD SWAP3 PUSH1 0xA0 SWAP3 SWAP2 SWAP1 DUP3 SWAP1 SUB ADD DUP2 DUP7 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x303 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS STATICCALL ISZERO DUP1 ISZERO PUSH2 0x317 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x33B SWAP2 SWAP1 PUSH2 0xC31 JUMP JUMPDEST POP SWAP2 SWAP6 POP POP POP POP POP POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH2 0x351 PUSH2 0x2BA JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x3 SLOAD GT DUP1 ISZERO PUSH2 0x367 JUMPI POP PUSH1 0x0 PUSH1 0x4 SLOAD GT JUMPDEST ISZERO PUSH2 0x3D2 JUMPI PUSH1 0x0 PUSH2 0x377 DUP3 PUSH2 0xA4F JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x384 DUP4 PUSH2 0xA8D JUMP JUMPDEST SGT ISZERO PUSH2 0x3AF JUMPI PUSH1 0x3 SLOAD PUSH2 0x397 SWAP1 DUP3 PUSH2 0xAAA JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x3A7 SWAP1 DUP3 PUSH2 0xABD JUMP JUMPDEST PUSH1 0x4 SSTORE PUSH2 0x3D0 JUMP JUMPDEST PUSH1 0x3 SLOAD PUSH2 0x3BC SWAP1 DUP3 PUSH2 0xABD JUMP JUMPDEST PUSH1 0x3 SSTORE PUSH1 0x4 SLOAD PUSH2 0x3CC SWAP1 DUP3 PUSH2 0xAAA JUMP JUMPDEST PUSH1 0x4 SSTORE JUMPDEST POP JUMPDEST PUSH1 0x7 SSTORE JUMP JUMPDEST PUSH1 0x0 PUSH1 0x6 SLOAD PUSH1 0x0 EQ PUSH2 0x40C JUMPI PUSH2 0x407 PUSH1 0x6 SLOAD PUSH2 0x401 PUSH3 0xF4240 PUSH1 0x4 SLOAD PUSH2 0xAC9 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 PUSH2 0xAD5 JUMP JUMPDEST PUSH2 0x2AC JUMP JUMPDEST POP PUSH1 0x2 SLOAD SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD PUSH1 0xFF AND ISZERO PUSH2 0x43F JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x436 SWAP1 PUSH2 0xD4A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x448 DUP2 PUSH2 0x8F5 JUMP JUMPDEST PUSH2 0x451 DUP2 PUSH2 0x5C7 JUMP JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE JUMP JUMPDEST PUSH2 0x469 PUSH2 0x347 JUMP JUMPDEST PUSH1 0xB SLOAD PUSH1 0x40 MLOAD PUSH4 0x852CD8D PUSH1 0xE3 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH4 0x42966C68 SWAP1 PUSH2 0x499 SWAP1 DUP5 SWAP1 PUSH1 0x4 ADD PUSH2 0xD81 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x4B3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x4C7 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP PUSH1 0x8 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP2 POP PUSH2 0x4E1 SWAP1 POP PUSH2 0x3D7 JUMP JUMPDEST PUSH1 0x2 DUP2 SWAP1 SSTORE PUSH1 0x0 SWAP1 PUSH2 0x4FD SWAP1 PUSH3 0xF4240 SWAP1 PUSH2 0x401 SWAP1 DUP7 SWAP1 PUSH2 0xAC9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE SWAP1 SWAP2 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x52E SWAP1 CALLER SWAP1 DUP6 SWAP1 PUSH1 0x4 ADD PUSH2 0xCB8 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x548 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x55C JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x580 SWAP2 SWAP1 PUSH2 0xBE1 JUMP JUMPDEST PUSH2 0x59C JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x436 SWAP1 PUSH2 0xCDC JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0x5A9 SWAP1 DUP5 PUSH2 0xABD JUMP JUMPDEST PUSH1 0x6 SSTORE PUSH1 0x4 SLOAD PUSH2 0x5B9 SWAP1 DUP3 PUSH2 0xABD JUMP JUMPDEST PUSH1 0x4 SSTORE POP POP POP JUMP JUMPDEST PUSH1 0x6 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x5CF PUSH2 0x347 JUMP JUMPDEST PUSH1 0xB SLOAD PUSH1 0x40 MLOAD PUSH4 0x140E25AD PUSH1 0xE3 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH4 0xA0712D68 SWAP1 PUSH2 0x5FF SWAP1 DUP5 SWAP1 PUSH1 0x4 ADD PUSH2 0xD81 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x619 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x62D JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP PUSH1 0x8 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP2 POP PUSH2 0x647 SWAP1 POP PUSH2 0x3D7 JUMP JUMPDEST PUSH1 0x2 DUP2 SWAP1 SSTORE PUSH1 0x0 SWAP1 PUSH2 0x663 SWAP1 PUSH3 0xF4240 SWAP1 PUSH2 0x401 SWAP1 DUP7 SWAP1 PUSH2 0xAC9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE SWAP1 SWAP2 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x696 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0xC94 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x6B0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x6C4 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x6E8 SWAP2 SWAP1 PUSH2 0xBE1 JUMP JUMPDEST PUSH2 0x704 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x436 SWAP1 PUSH2 0xD13 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0x711 SWAP1 DUP5 PUSH2 0xAAA JUMP JUMPDEST PUSH1 0x6 SSTORE PUSH1 0x4 SLOAD PUSH2 0x5B9 SWAP1 DUP3 PUSH2 0xAAA JUMP JUMPDEST PUSH1 0xB SLOAD PUSH1 0x40 MLOAD PUSH4 0x70A08231 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x0 SWAP2 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 PUSH4 0x70A08231 SWAP1 PUSH2 0x25C SWAP1 CALLER SWAP1 PUSH1 0x4 ADD PUSH2 0xC80 JUMP JUMPDEST PUSH2 0x75A PUSH2 0x347 JUMP JUMPDEST PUSH1 0xA SLOAD PUSH1 0x40 MLOAD PUSH4 0x852CD8D PUSH1 0xE3 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH4 0x42966C68 SWAP1 PUSH2 0x78A SWAP1 DUP5 SWAP1 PUSH1 0x4 ADD PUSH2 0xD81 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x7A4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x7B8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP PUSH1 0x8 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP2 POP PUSH2 0x7D2 SWAP1 POP PUSH2 0x8BE JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE PUSH1 0x0 SWAP1 PUSH2 0x7EE SWAP1 PUSH3 0xF4240 SWAP1 PUSH2 0x401 SWAP1 DUP7 SWAP1 PUSH2 0xAC9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0xA9059CBB PUSH1 0xE0 SHL DUP2 MSTORE SWAP1 SWAP2 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0xA9059CBB SWAP1 PUSH2 0x81F SWAP1 CALLER SWAP1 DUP6 SWAP1 PUSH1 0x4 ADD PUSH2 0xCB8 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x839 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x84D JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0x871 SWAP2 SWAP1 PUSH2 0xBE1 JUMP JUMPDEST PUSH2 0x88D JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x436 SWAP1 PUSH2 0xCDC JUMP JUMPDEST PUSH1 0x5 SLOAD PUSH2 0x89A SWAP1 DUP5 PUSH2 0xABD JUMP JUMPDEST PUSH1 0x5 SSTORE PUSH1 0x3 SLOAD PUSH2 0x8AA SWAP1 DUP3 PUSH2 0xABD JUMP JUMPDEST PUSH1 0x3 SSTORE POP POP POP JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 SLOAD PUSH1 0x0 EQ PUSH2 0x8E8 JUMPI PUSH2 0x407 PUSH1 0x5 SLOAD PUSH2 0x401 PUSH3 0xF4240 PUSH1 0x3 SLOAD PUSH2 0xAC9 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST POP PUSH1 0x1 SLOAD SWAP1 JUMP JUMPDEST PUSH1 0x7 SLOAD DUP2 JUMP JUMPDEST PUSH2 0x8FD PUSH2 0x347 JUMP JUMPDEST PUSH1 0xA SLOAD PUSH1 0x40 MLOAD PUSH4 0x140E25AD PUSH1 0xE3 SHL DUP2 MSTORE PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND SWAP1 PUSH4 0xA0712D68 SWAP1 PUSH2 0x92D SWAP1 DUP5 SWAP1 PUSH1 0x4 ADD PUSH2 0xD81 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x947 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x95B JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP PUSH1 0x8 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP2 POP PUSH2 0x975 SWAP1 POP PUSH2 0x8BE JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE PUSH1 0x0 SWAP1 PUSH2 0x991 SWAP1 PUSH3 0xF4240 SWAP1 PUSH2 0x401 SWAP1 DUP7 SWAP1 PUSH2 0xAC9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH4 0x23B872DD PUSH1 0xE0 SHL DUP2 MSTORE SWAP1 SWAP2 POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP4 AND SWAP1 PUSH4 0x23B872DD SWAP1 PUSH2 0x9C4 SWAP1 CALLER SWAP1 ADDRESS SWAP1 DUP7 SWAP1 PUSH1 0x4 ADD PUSH2 0xC94 JUMP JUMPDEST PUSH1 0x20 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 PUSH1 0x0 DUP8 DUP1 EXTCODESIZE ISZERO DUP1 ISZERO PUSH2 0x9DE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP GAS CALL ISZERO DUP1 ISZERO PUSH2 0x9F2 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP POP PUSH1 0x40 MLOAD RETURNDATASIZE PUSH1 0x1F NOT PUSH1 0x1F DUP3 ADD AND DUP3 ADD DUP1 PUSH1 0x40 MSTORE POP DUP2 ADD SWAP1 PUSH2 0xA16 SWAP2 SWAP1 PUSH2 0xBE1 JUMP JUMPDEST PUSH2 0xA32 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x436 SWAP1 PUSH2 0xD13 JUMP JUMPDEST PUSH1 0x5 SLOAD PUSH2 0xA3F SWAP1 DUP5 PUSH2 0xAAA JUMP JUMPDEST PUSH1 0x5 SSTORE PUSH1 0x3 SLOAD PUSH2 0x8AA SWAP1 DUP3 PUSH2 0xAAA JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0xA5B DUP4 PUSH2 0xAE1 JUMP JUMPDEST SWAP1 POP PUSH2 0xA84 PUSH3 0xF4240 PUSH2 0x401 PUSH2 0xA70 DUP5 PUSH2 0xB40 JUMP JUMPDEST PUSH2 0xA7E PUSH1 0x3 SLOAD PUSH1 0x4 SLOAD PUSH2 0xBB0 JUMP JUMPDEST SWAP1 PUSH2 0xAC9 JUMP JUMPDEST SWAP2 POP POP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 SLOAD DUP3 GT ISZERO PUSH2 0xAA1 JUMPI POP PUSH1 0x1 PUSH2 0xA88 JUMP JUMPDEST POP PUSH1 0x0 NOT PUSH2 0xA88 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAB6 DUP3 DUP5 PUSH2 0xD8A JUMP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAB6 DUP3 DUP5 PUSH2 0xEF8 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAB6 DUP3 DUP5 PUSH2 0xED9 JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAB6 DUP3 DUP5 PUSH2 0xDA2 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x7 SLOAD DUP3 GT ISZERO PUSH2 0xB1D JUMPI PUSH2 0xB16 PUSH3 0xF4240 PUSH2 0xB10 PUSH1 0x7 SLOAD PUSH2 0x401 PUSH3 0xF4240 DUP8 PUSH2 0xAC9 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST SWAP1 PUSH2 0xABD JUMP JUMPDEST SWAP1 POP PUSH2 0xA88 JUMP JUMPDEST PUSH2 0xB16 PUSH3 0xF4240 PUSH2 0xB10 DUP5 PUSH2 0x401 PUSH3 0xF4240 PUSH1 0x7 SLOAD PUSH2 0xAC9 SWAP1 SWAP2 SWAP1 PUSH4 0xFFFFFFFF AND JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0xB4E DUP4 PUSH1 0x3 PUSH2 0xED9 JUMP JUMPDEST PUSH3 0xF4240 PUSH2 0xB5D PUSH1 0x2 DUP7 PUSH2 0xE08 JUMP JUMPDEST PUSH2 0xB67 SWAP2 SWAP1 PUSH2 0xDA2 JUMP JUMPDEST PUSH2 0xB72 SWAP1 PUSH1 0x9 PUSH2 0xED9 JUMP JUMPDEST PUSH2 0xB7C SWAP2 SWAP1 PUSH2 0xD8A JUMP JUMPDEST PUSH2 0xB89 SWAP1 PUSH3 0xF4240 PUSH2 0xD8A JUMP JUMPDEST SWAP1 POP PUSH5 0xE8D4A51000 PUSH2 0xB9B DUP3 DUP3 PUSH2 0xDA2 JUMP JUMPDEST PUSH2 0xBA8 SWAP1 PUSH3 0xF4240 PUSH2 0xEF8 JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 DUP4 GT ISZERO PUSH2 0xBC0 JUMPI DUP2 PUSH2 0xAB6 JUMP JUMPDEST POP SWAP1 SWAP2 SWAP1 POP JUMP JUMPDEST DUP1 MLOAD PUSH10 0xFFFFFFFFFFFFFFFFFFFF DUP2 AND DUP2 EQ PUSH2 0xA88 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xBF2 JUMPI DUP1 DUP2 REVERT JUMPDEST DUP2 MLOAD DUP1 ISZERO ISZERO DUP2 EQ PUSH2 0xAB6 JUMPI DUP2 DUP3 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xC12 JUMPI DUP1 DUP2 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xC2A JUMPI DUP1 DUP2 REVERT JUMPDEST POP MLOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0xA0 DUP7 DUP9 SUB SLT ISZERO PUSH2 0xC48 JUMPI DUP1 DUP2 REVERT JUMPDEST PUSH2 0xC51 DUP7 PUSH2 0xBC7 JUMP JUMPDEST SWAP5 POP PUSH1 0x20 DUP7 ADD MLOAD SWAP4 POP PUSH1 0x40 DUP7 ADD MLOAD SWAP3 POP PUSH1 0x60 DUP7 ADD MLOAD SWAP2 POP PUSH2 0xC74 PUSH1 0x80 DUP8 ADD PUSH2 0xBC7 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP6 POP SWAP3 SWAP6 SWAP1 SWAP4 POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP2 SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP4 DUP5 AND DUP2 MSTORE SWAP2 SWAP1 SWAP3 AND PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 DUP2 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP3 SWAP1 SWAP3 AND DUP3 MSTORE PUSH1 0x20 DUP3 ADD MSTORE PUSH1 0x40 ADD SWAP1 JUMP JUMPDEST SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x19 SWAP1 DUP3 ADD MSTORE PUSH32 0x4E6F7420656E6F756768207573646320617661696C61626C6500000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x1A SWAP1 DUP3 ADD MSTORE PUSH32 0x596F7520646F6E2774206861766520656E6F7567682055534443000000000000 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE PUSH1 0x1F SWAP1 DUP3 ADD MSTORE PUSH32 0x54686520706F6F6C2077617320616C726561647920696E697469617465642E00 PUSH1 0x40 DUP3 ADD MSTORE PUSH1 0x60 ADD SWAP1 JUMP JUMPDEST SWAP1 DUP2 MSTORE PUSH1 0x20 ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0xD9D JUMPI PUSH2 0xD9D PUSH2 0xF0F JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0xDBD JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL DUP2 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 DUP2 REVERT JUMPDEST POP DIV SWAP1 JUMP JUMPDEST DUP1 DUP3 JUMPDEST PUSH1 0x1 DUP1 DUP7 GT PUSH2 0xDD4 JUMPI POP PUSH2 0xDFF JUMP JUMPDEST DUP2 DUP8 DIV DUP3 GT ISZERO PUSH2 0xDE6 JUMPI PUSH2 0xDE6 PUSH2 0xF0F JUMP JUMPDEST DUP1 DUP7 AND ISZERO PUSH2 0xDF3 JUMPI SWAP2 DUP2 MUL SWAP2 JUMPDEST SWAP5 SWAP1 SWAP5 SHR SWAP4 DUP1 MUL PUSH2 0xDC5 JUMP JUMPDEST SWAP5 POP SWAP5 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xAB6 PUSH1 0x0 NOT PUSH1 0xFF DUP6 AND DUP5 PUSH1 0x0 DUP3 PUSH2 0xE24 JUMPI POP PUSH1 0x1 PUSH2 0xAB6 JUMP JUMPDEST DUP2 PUSH2 0xE31 JUMPI POP PUSH1 0x0 PUSH2 0xAB6 JUMP JUMPDEST DUP2 PUSH1 0x1 DUP2 EQ PUSH2 0xE47 JUMPI PUSH1 0x2 DUP2 EQ PUSH2 0xE51 JUMPI PUSH2 0xE7E JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP PUSH2 0xAB6 JUMP JUMPDEST PUSH1 0xFF DUP5 GT ISZERO PUSH2 0xE62 JUMPI PUSH2 0xE62 PUSH2 0xF0F JUMP JUMPDEST PUSH1 0x1 DUP5 SHL SWAP2 POP DUP5 DUP3 GT ISZERO PUSH2 0xE78 JUMPI PUSH2 0xE78 PUSH2 0xF0F JUMP JUMPDEST POP PUSH2 0xAB6 JUMP JUMPDEST POP PUSH1 0x20 DUP4 LT PUSH2 0x133 DUP4 LT AND PUSH1 0x4E DUP5 LT PUSH1 0xB DUP5 LT AND OR ISZERO PUSH2 0xEB1 JUMPI POP DUP2 DUP2 EXP DUP4 DUP2 GT ISZERO PUSH2 0xEAC JUMPI PUSH2 0xEAC PUSH2 0xF0F JUMP JUMPDEST PUSH2 0xAB6 JUMP JUMPDEST PUSH2 0xEBE DUP5 DUP5 DUP5 PUSH1 0x1 PUSH2 0xDC2 JUMP JUMPDEST DUP1 DUP7 DIV DUP3 GT ISZERO PUSH2 0xED0 JUMPI PUSH2 0xED0 PUSH2 0xF0F JUMP JUMPDEST MUL SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0xEF3 JUMPI PUSH2 0xEF3 PUSH2 0xF0F JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0xF0A JUMPI PUSH2 0xF0A PUSH2 0xF0F JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xEE 0xB3 DIFFICULTY 0xC7 0xB6 SWAP11 PUSH27 0xA3F8193AA66BC93500641544F6DB61A78D49EF52E6268DBCDE6473 PUSH16 0x6C634300080000330000000000000000 ", "pcMap": {"0": {"offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0x80"}, "2": {"fn": null, "offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0x40"}, "4": {"fn": null, "offset": [1261, 7517], "op": "MSTORE", "path": "6"}, "5": {"fn": null, "offset": [1261, 7517], "op": "CALLVALUE", "path": "6"}, "6": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "7": {"fn": null, "offset": [1261, 7517], "op": "ISZERO", "path": "6"}, "8": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x10"}, "11": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "12": {"fn": null, "offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0x0"}, "14": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "15": {"dev": "Cannot send ether to nonpayable function", "fn": null, "offset": [1261, 7517], "op": "REVERT", "path": "6"}, "16": {"fn": null, "offset": [1261, 7517], "op": "JUMPDEST", "path": "6"}, "17": {"fn": null, "offset": [1261, 7517], "op": "POP", "path": "6"}, "18": {"fn": null, "offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0x4"}, "20": {"fn": null, "offset": [1261, 7517], "op": "CALLDATASIZE", "path": "6"}, "21": {"fn": null, "offset": [1261, 7517], "op": "LT", "path": "6"}, "22": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x120"}, "25": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "26": {"fn": null, "offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0x0"}, "28": {"fn": null, "offset": [1261, 7517], "op": "CALLDATALOAD", "path": "6"}, "29": {"fn": null, "offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0xE0"}, "31": {"fn": null, "offset": [1261, 7517], "op": "SHR", "path": "6"}, "32": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "33": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xA14274E8"}, "38": {"fn": null, "offset": [1261, 7517], "op": "GT", "path": "6"}, "39": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0xAD"}, "42": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "43": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "44": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xDDE7BE2C"}, "49": {"fn": null, "offset": [1261, 7517], "op": "GT", "path": "6"}, "50": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x71"}, "53": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "54": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "55": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xDDE7BE2C"}, "60": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "61": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1E6"}, "64": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "65": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "66": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xF0156E8A"}, "71": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "72": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1EE"}, "75": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "76": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "77": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xF06847D6"}, "82": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "83": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1F6"}, "86": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "87": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "88": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xF4352C57"}, "93": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "94": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1FE"}, "97": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "98": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "99": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xF530C04A"}, "104": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "105": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x206"}, "108": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "109": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x120"}, "112": {"fn": null, "offset": [1261, 7517], "op": "JUMP", "path": "6"}, "113": {"fn": null, "offset": [1261, 7517], "op": "JUMPDEST", "path": "6"}, "114": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "115": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xA14274E8"}, "120": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "121": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x19D"}, "124": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "125": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "126": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xB75CBE0B"}, "131": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "132": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1B0"}, "135": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "136": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "137": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xC46D4F09"}, "142": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "143": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1B8"}, "146": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "147": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "148": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xC7E3B124"}, "153": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "154": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1CB"}, "157": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "158": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "159": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xD1EE539D"}, "164": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "165": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x1D3"}, "168": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "169": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x120"}, "172": {"fn": null, "offset": [1261, 7517], "op": "JUMP", "path": "6"}, "173": {"fn": null, "offset": [1261, 7517], "op": "JUMPDEST", "path": "6"}, "174": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "175": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x3074FFF7"}, "180": {"fn": null, "offset": [1261, 7517], "op": "GT", "path": "6"}, "181": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0xF4"}, "184": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "185": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "186": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x3074FFF7"}, "191": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "192": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x15B"}, "195": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "196": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "197": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x3A3610BC"}, "202": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "203": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x170"}, "206": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "207": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "208": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x6E5D6615"}, "213": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "214": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x178"}, "217": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "218": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "219": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x81C2B29B"}, "224": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "225": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x182"}, "228": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "229": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "230": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x9B3075A1"}, "235": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "236": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x18A"}, "239": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "240": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x120"}, "243": {"fn": null, "offset": [1261, 7517], "op": "JUMP", "path": "6"}, "244": {"fn": null, "offset": [1261, 7517], "op": "JUMPDEST", "path": "6"}, "245": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "246": {"fn": null, "offset": [1261, 7517], "op": "PUSH3", "path": "6", "value": "0x34B9CC"}, "250": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "251": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x125"}, "254": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "255": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "256": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0xC3E5343"}, "261": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "262": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x143"}, "265": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "266": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "267": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x14D7C6D2"}, "272": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "273": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x14B"}, "276": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "277": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "278": {"fn": null, "offset": [1261, 7517], "op": "PUSH4", "path": "6", "value": "0x157D0129"}, "283": {"fn": null, "offset": [1261, 7517], "op": "EQ", "path": "6"}, "284": {"fn": null, "offset": [1261, 7517], "op": "PUSH2", "path": "6", "value": "0x153"}, "287": {"fn": null, "offset": [1261, 7517], "op": "JUMPI", "path": "6"}, "288": {"fn": null, "offset": [1261, 7517], "op": "JUMPDEST", "path": "6"}, "289": {"fn": null, "offset": [1261, 7517], "op": "PUSH1", "path": "6", "value": "0x0"}, "291": {"fn": null, "offset": [1261, 7517], "op": "DUP1", "path": "6"}, "292": {"first_revert": true, "fn": null, "offset": [1261, 7517], "op": "REVERT", "path": "6"}, "293": {"offset": [1578, 1608], "op": "JUMPDEST", "path": "6"}, "294": {"fn": null, "offset": [1578, 1608], "op": "PUSH2", "path": "6", "value": "0x12D"}, "297": {"fn": null, "offset": [1578, 1608], "op": "PUSH2", "path": "6", "value": "0x219"}, "300": {"fn": null, "jump": "i", "offset": [1578, 1608], "op": "JUMP", "path": "6"}, "301": {"fn": null, "offset": [1578, 1608], "op": "JUMPDEST", "path": "6"}, "302": {"fn": null, "offset": [1578, 1608], "op": "PUSH1", "path": "6", "value": "0x40"}, "304": {"fn": null, "offset": [1578, 1608], "op": "MLOAD", "path": "6"}, "305": {"fn": null, "offset": [1578, 1608], "op": "PUSH2", "path": "6", "value": "0x13A"}, "308": {"fn": null, "offset": [1578, 1608], "op": "SWAP2", "path": "6"}, "309": {"fn": null, "offset": [1578, 1608], "op": "SWAP1", "path": "6"}, "310": {"fn": null, "offset": [1578, 1608], "op": "PUSH2", "path": "6", "value": "0xD81"}, "313": {"fn": null, "jump": "i", "offset": [1578, 1608], "op": "JUMP", "path": "6"}, "314": {"fn": null, "offset": [1578, 1608], "op": "JUMPDEST", "path": "6"}, "315": {"fn": null, "offset": [1578, 1608], "op": "PUSH1", "path": "6", "value": "0x40"}, "317": {"fn": null, "offset": [1578, 1608], "op": "MLOAD", "path": "6"}, "318": {"fn": null, "offset": [1578, 1608], "op": "DUP1", "path": "6"}, "319": {"fn": null, "offset": [1578, 1608], "op": "SWAP2", "path": "6"}, "320": {"fn": null, "offset": [1578, 1608], "op": "SUB", "path": "6"}, "321": {"fn": null, "offset": [1578, 1608], "op": "SWAP1", "path": "6"}, "322": {"fn": null, "offset": [1578, 1608], "op": "RETURN", "path": "6"}, "323": {"offset": [1408, 1445], "op": "JUMPDEST", "path": "6"}, "324": {"fn": null, "offset": [1408, 1445], "op": "PUSH2", "path": "6", "value": "0x12D"}, "327": {"fn": null, "offset": [1408, 1445], "op": "PUSH2", "path": "6", "value": "0x21F"}, "330": {"fn": null, "jump": "i", "offset": [1408, 1445], "op": "JUMP", "path": "6"}, "331": {"offset": [1535, 1571], "op": "JUMPDEST", "path": "6"}, "332": {"fn": null, "offset": [1535, 1571], "op": "PUSH2", "path": "6", "value": "0x12D"}, "335": {"fn": null, "offset": [1535, 1571], "op": "PUSH2", "path": "6", "value": "0x225"}, "338": {"fn": null, "jump": "i", "offset": [1535, 1571], "op": "JUMP", "path": "6"}, "339": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7288, 7395], "op": "JUMPDEST", "path": "6"}, "340": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7288, 7395], "op": "PUSH2", "path": "6", "value": "0x12D"}, "343": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7288, 7395], "op": "PUSH2", "path": "6", "value": "0x22B"}, "346": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "i", "offset": [7288, 7395], "op": "JUMP", "path": "6"}, "347": {"offset": [1325, 1360], "op": "JUMPDEST", "path": "6"}, "348": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH2", "path": "6", "value": "0x163"}, "351": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH2", "path": "6", "value": "0x2B1"}, "354": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "i", "offset": [1325, 1360], "op": "JUMP", "path": "6"}, "355": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "JUMPDEST", "path": "6"}, "356": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH1", "path": "6", "value": "0x40"}, "358": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "MLOAD", "path": "6"}, "359": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH2", "path": "6", "value": "0x13A"}, "362": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "SWAP2", "path": "6"}, "363": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "SWAP1", "path": "6"}, "364": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH2", "path": "6", "value": "0xCD1"}, "367": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "i", "offset": [1325, 1360], "op": "JUMP", "path": "6"}, "368": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6290, 6607], "op": "JUMPDEST", "path": "6"}, "369": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6290, 6607], "op": "PUSH2", "path": "6", "value": "0x12D"}, "372": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6290, 6607], "op": "PUSH2", "path": "6", "value": "0x2BA"}, "375": {"fn": "LeveragedTrading.getBtcPrice", "jump": "i", "offset": [6290, 6607], "op": "JUMP", "path": "6"}, "376": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4571, 5225], "op": "JUMPDEST", "path": "6"}, "377": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4571, 5225], "op": "PUSH2", "path": "6", "value": "0x180"}, "380": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4571, 5225], "op": "PUSH2", "path": "6", "value": "0x347"}, "383": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [4571, 5225], "op": "JUMP", "path": "6"}, "384": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4571, 5225], "op": "JUMPDEST", "path": "6"}, "385": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4571, 5225], "op": "STOP", "path": "6"}, "386": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6058, 6237], "op": "JUMPDEST", "path": "6"}, "387": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6058, 6237], "op": "PUSH2", "path": "6", "value": "0x12D"}, "390": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6058, 6237], "op": "PUSH2", "path": "6", "value": "0x3D7"}, "393": {"fn": "LeveragedTrading.getBtcDownPrice", "jump": "i", "offset": [6058, 6237], "op": "JUMP", "path": "6"}, "394": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "JUMPDEST", "path": "6"}, "395": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "PUSH2", "path": "6", "value": "0x180"}, "398": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "PUSH2", "path": "6", "value": "0x198"}, "401": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "CALLDATASIZE", "path": "6"}, "402": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "PUSH1", "path": "6", "value": "0x4"}, "404": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "PUSH2", "path": "6", "value": "0xC01"}, "407": {"fn": "LeveragedTrading.initiatePool", "jump": "i", "offset": [2127, 2386], "op": "JUMP", "path": "6"}, "408": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "JUMPDEST", "path": "6"}, "409": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "PUSH2", "path": "6", "value": "0x413"}, "412": {"fn": "LeveragedTrading.initiatePool", "jump": "i", "offset": [2127, 2386], "op": "JUMP", "path": "6"}, "413": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "JUMPDEST", "path": "6"}, "414": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "PUSH2", "path": "6", "value": "0x180"}, "417": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "PUSH2", "path": "6", "value": "0x1AB"}, "420": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "CALLDATASIZE", "path": "6"}, "421": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "PUSH1", "path": "6", "value": "0x4"}, "423": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "PUSH2", "path": "6", "value": "0xC01"}, "426": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4023, 4563], "op": "JUMP", "path": "6"}, "427": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "JUMPDEST", "path": "6"}, "428": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "PUSH2", "path": "6", "value": "0x461"}, "431": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4023, 4563], "op": "JUMP", "path": "6"}, "432": {"offset": [1638, 1670], "op": "JUMPDEST", "path": "6"}, "433": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [1638, 1670], "op": "PUSH2", "path": "6", "value": "0x12D"}, "436": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [1638, 1670], "op": "PUSH2", "path": "6", "value": "0x5C1"}, "439": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [1638, 1670], "op": "JUMP", "path": "6"}, "440": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "JUMPDEST", "path": "6"}, "441": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "PUSH2", "path": "6", "value": "0x180"}, "444": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "PUSH2", "path": "6", "value": "0x1C6"}, "447": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "CALLDATASIZE", "path": "6"}, "448": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "PUSH1", "path": "6", "value": "0x4"}, "450": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "PUSH2", "path": "6", "value": "0xC01"}, "453": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [2938, 3491], "op": "JUMP", "path": "6"}, "454": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "JUMPDEST", "path": "6"}, "455": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "PUSH2", "path": "6", "value": "0x5C7"}, "458": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [2938, 3491], "op": "JUMP", "path": "6"}, "459": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7402, 7513], "op": "JUMPDEST", "path": "6"}, "460": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7402, 7513], "op": "PUSH2", "path": "6", "value": "0x12D"}, "463": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7402, 7513], "op": "PUSH2", "path": "6", "value": "0x721"}, "466": {"fn": "LeveragedTrading.getBtcdownBalance", "jump": "i", "offset": [7402, 7513], "op": "JUMP", "path": "6"}, "467": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "JUMPDEST", "path": "6"}, "468": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "PUSH2", "path": "6", "value": "0x180"}, "471": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "PUSH2", "path": "6", "value": "0x1E1"}, "474": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "CALLDATASIZE", "path": "6"}, "475": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "PUSH1", "path": "6", "value": "0x4"}, "477": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "PUSH2", "path": "6", "value": "0xC01"}, "480": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3499, 4015], "op": "JUMP", "path": "6"}, "481": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "JUMPDEST", "path": "6"}, "482": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "PUSH2", "path": "6", "value": "0x752"}, "485": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3499, 4015], "op": "JUMP", "path": "6"}, "486": {"offset": [1473, 1507], "op": "JUMPDEST", "path": "6"}, "487": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1473, 1507], "op": "PUSH2", "path": "6", "value": "0x12D"}, "490": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1473, 1507], "op": "PUSH2", "path": "6", "value": "0x8B2"}, "493": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [1473, 1507], "op": "JUMP", "path": "6"}, "494": {"offset": [1367, 1402], "op": "JUMPDEST", "path": "6"}, "495": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1367, 1402], "op": "PUSH2", "path": "6", "value": "0x12D"}, "498": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1367, 1402], "op": "PUSH2", "path": "6", "value": "0x8B8"}, "501": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [1367, 1402], "op": "JUMP", "path": "6"}, "502": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5862, 6019], "op": "JUMPDEST", "path": "6"}, "503": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5862, 6019], "op": "PUSH2", "path": "6", "value": "0x12D"}, "506": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5862, 6019], "op": "PUSH2", "path": "6", "value": "0x8BE"}, "509": {"fn": "LeveragedTrading.getBtcUpPrice", "jump": "i", "offset": [5862, 6019], "op": "JUMP", "path": "6"}, "510": {"offset": [1699, 1730], "op": "JUMPDEST", "path": "6"}, "511": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [1699, 1730], "op": "PUSH2", "path": "6", "value": "0x12D"}, "514": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [1699, 1730], "op": "PUSH2", "path": "6", "value": "0x8EF"}, "517": {"fn": "LeveragedTrading.getBtcUpPrice", "jump": "i", "offset": [1699, 1730], "op": "JUMP", "path": "6"}, "518": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "JUMPDEST", "path": "6"}, "519": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "PUSH2", "path": "6", "value": "0x180"}, "522": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "PUSH2", "path": "6", "value": "0x214"}, "525": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "CALLDATASIZE", "path": "6"}, "526": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "PUSH1", "path": "6", "value": "0x4"}, "528": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "PUSH2", "path": "6", "value": "0xC01"}, "531": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2394, 2930], "op": "JUMP", "path": "6"}, "532": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "JUMPDEST", "path": "6"}, "533": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "PUSH2", "path": "6", "value": "0x8F5"}, "536": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2394, 2930], "op": "JUMP", "path": "6"}, "537": {"offset": [1578, 1608], "op": "JUMPDEST", "path": "6"}, "538": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1578, 1608], "op": "PUSH1", "path": "6", "value": "0x5"}, "540": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1578, 1608], "op": "SLOAD", "path": "6"}, "541": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1578, 1608], "op": "DUP2", "path": "6"}, "542": {"fn": "LeveragedTrading.issueBtcUp", "jump": "o", "offset": [1578, 1608], "op": "JUMP", "path": "6"}, "543": {"offset": [1408, 1445], "op": "JUMPDEST", "path": "6"}, "544": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1408, 1445], "op": "PUSH1", "path": "6", "value": "0x2"}, "546": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1408, 1445], "op": "SLOAD", "path": "6"}, "547": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1408, 1445], "op": "DUP2", "path": "6"}, "548": {"fn": "LeveragedTrading.issueBtcUp", "jump": "o", "offset": [1408, 1445], "op": "JUMP", "path": "6"}, "549": {"offset": [1535, 1571], "op": "JUMPDEST", "path": "6"}, "550": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1535, 1571], "op": "PUSH1", "path": "6", "value": "0x4"}, "552": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1535, 1571], "op": "SLOAD", "path": "6"}, "553": {"fn": "LeveragedTrading.issueBtcUp", "offset": [1535, 1571], "op": "DUP2", "path": "6"}, "554": {"fn": "LeveragedTrading.issueBtcUp", "jump": "o", "offset": [1535, 1571], "op": "JUMP", "path": "6"}, "555": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7288, 7395], "op": "JUMPDEST", "path": "6"}, "556": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7366], "op": "PUSH1", "path": "6", "statement": 0, "value": "0xA"}, "558": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7366], "op": "SLOAD", "path": "6"}, "559": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x40"}, "561": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "MLOAD", "path": "6"}, "562": {"op": "PUSH4", "value": "0x70A08231"}, "567": {"op": "PUSH1", "value": "0xE0"}, "569": {"op": "SHL"}, "570": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP2", "path": "6"}, "571": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "MSTORE", "path": "6"}, "572": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7335, 7342], "op": "PUSH1", "path": "6", "value": "0x0"}, "574": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7335, 7342], "op": "SWAP2", "path": "6"}, "575": {"op": "PUSH1", "value": "0x1"}, "577": {"op": "PUSH1", "value": "0x1"}, "579": {"op": "PUSH1", "value": "0xA0"}, "581": {"op": "SHL"}, "582": {"op": "SUB"}, "583": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7366], "op": "AND", "path": "6"}, "584": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7366], "op": "SWAP1", "path": "6"}, "585": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7376], "op": "PUSH4", "path": "6", "value": "0x70A08231"}, "590": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7376], "op": "SWAP1", "path": "6"}, "591": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH2", "path": "6", "value": "0x25C"}, "594": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "SWAP1", "path": "6"}, "595": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7377, 7387], "op": "CALLER", "path": "6"}, "596": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7377, 7387], "op": "SWAP1", "path": "6"}, "597": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x4"}, "599": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ADD", "path": "6"}, "600": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH2", "path": "6", "value": "0xC80"}, "603": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "i", "offset": [7361, 7388], "op": "JUMP", "path": "6"}, "604": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "JUMPDEST", "path": "6"}, "605": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x20"}, "607": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x40"}, "609": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "MLOAD", "path": "6"}, "610": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "611": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP4", "path": "6"}, "612": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "SUB", "path": "6"}, "613": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP2", "path": "6"}, "614": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP7", "path": "6"}, "615": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "616": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "EXTCODESIZE", "path": "6"}, "617": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ISZERO", "path": "6"}, "618": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "619": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ISZERO", "path": "6"}, "620": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH2", "path": "6", "value": "0x274"}, "623": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "JUMPI", "path": "6"}, "624": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x0"}, "626": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "627": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "REVERT", "path": "6"}, "628": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "JUMPDEST", "path": "6"}, "629": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "POP", "path": "6"}, "630": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "GAS", "path": "6"}, "631": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "STATICCALL", "path": "6"}, "632": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ISZERO", "path": "6"}, "633": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "634": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ISZERO", "path": "6"}, "635": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH2", "path": "6", "value": "0x288"}, "638": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "JUMPI", "path": "6"}, "639": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "RETURNDATASIZE", "path": "6"}, "640": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x0"}, "642": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "643": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "RETURNDATACOPY", "path": "6"}, "644": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "RETURNDATASIZE", "path": "6"}, "645": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x0"}, "647": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "REVERT", "path": "6"}, "648": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "JUMPDEST", "path": "6"}, "649": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "POP", "path": "6"}, "650": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "POP", "path": "6"}, "651": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "POP", "path": "6"}, "652": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "POP", "path": "6"}, "653": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x40"}, "655": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "MLOAD", "path": "6"}, "656": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "RETURNDATASIZE", "path": "6"}, "657": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x1F"}, "659": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "NOT", "path": "6"}, "660": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x1F"}, "662": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP3", "path": "6"}, "663": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ADD", "path": "6"}, "664": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "AND", "path": "6"}, "665": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP3", "path": "6"}, "666": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ADD", "path": "6"}, "667": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP1", "path": "6"}, "668": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH1", "path": "6", "value": "0x40"}, "670": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "MSTORE", "path": "6"}, "671": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "POP", "path": "6"}, "672": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "DUP2", "path": "6"}, "673": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "ADD", "path": "6"}, "674": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "SWAP1", "path": "6"}, "675": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH2", "path": "6", "value": "0x2AC"}, "678": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "SWAP2", "path": "6"}, "679": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "SWAP1", "path": "6"}, "680": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "PUSH2", "path": "6", "value": "0xC19"}, "683": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "i", "offset": [7361, 7388], "op": "JUMP", "path": "6"}, "684": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7361, 7388], "op": "JUMPDEST", "path": "6"}, "685": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7354, 7388], "op": "SWAP1", "path": "6"}, "686": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7354, 7388], "op": "POP", "path": "6"}, "687": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [7288, 7395], "op": "SWAP1", "path": "6"}, "688": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "o", "offset": [7288, 7395], "op": "JUMP", "path": "6"}, "689": {"offset": [1325, 1360], "op": "JUMPDEST", "path": "6"}, "690": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH1", "path": "6", "value": "0x0"}, "692": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "SLOAD", "path": "6"}, "693": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "PUSH1", "path": "6", "value": "0xFF"}, "695": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "AND", "path": "6"}, "696": {"fn": "LeveragedTrading.getBtcupBalance", "offset": [1325, 1360], "op": "DUP2", "path": "6"}, "697": {"fn": "LeveragedTrading.getBtcupBalance", "jump": "o", "offset": [1325, 1360], "op": "JUMP", "path": "6"}, "698": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6290, 6607], "op": "JUMPDEST", "path": "6"}, "699": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "PUSH1", "path": "6", "value": "0x9"}, "701": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "SLOAD", "path": "6"}, "702": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x40"}, "704": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "705": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "MLOAD", "path": "6"}, "706": {"op": "PUSH4", "value": "0x3FABE5A3"}, "711": {"op": "PUSH1", "value": "0xE2"}, "713": {"op": "SHL"}, "714": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP2", "path": "6"}, "715": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "MSTORE", "path": "6"}, "716": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP1", "path": "6"}, "717": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "MLOAD", "path": "6"}, "718": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6334, 6341], "op": "PUSH1", "path": "6", "value": "0x0"}, "720": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6334, 6341], "op": "SWAP3", "path": "6"}, "721": {"op": "PUSH1", "value": "0x1"}, "723": {"op": "PUSH1", "value": "0x1"}, "725": {"op": "PUSH1", "value": "0xA0"}, "727": {"op": "SHL"}, "728": {"op": "SUB"}, "729": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "AND", "path": "6"}, "730": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "SWAP2", "path": "6"}, "731": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6334, 6341], "op": "DUP4", "path": "6"}, "732": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6334, 6341], "op": "SWAP2", "path": "6"}, "733": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "DUP4", "path": "6"}, "734": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "SWAP2", "path": "6"}, "735": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6484], "op": "PUSH4", "path": "6", "value": "0xFEAF968C"}, "740": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6484], "op": "SWAP2", "path": "6"}, "741": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x4"}, "743": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "744": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP4", "path": "6"}, "745": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ADD", "path": "6"}, "746": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP3", "path": "6"}, "747": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0xA0"}, "749": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP3", "path": "6"}, "750": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP2", "path": "6"}, "751": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP1", "path": "6"}, "752": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP3", "path": "6"}, "753": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP1", "path": "6"}, "754": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SUB", "path": "6"}, "755": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ADD", "path": "6"}, "756": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP2", "path": "6"}, "757": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6409, 6426], "op": "DUP7", "path": "6"}, "758": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "759": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "EXTCODESIZE", "path": "6"}, "760": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ISZERO", "path": "6"}, "761": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "762": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ISZERO", "path": "6"}, "763": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH2", "path": "6", "value": "0x303"}, "766": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "JUMPI", "path": "6"}, "767": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x0"}, "769": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "770": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "REVERT", "path": "6"}, "771": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "JUMPDEST", "path": "6"}, "772": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "POP", "path": "6"}, "773": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "GAS", "path": "6"}, "774": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "STATICCALL", "path": "6"}, "775": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ISZERO", "path": "6"}, "776": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "777": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ISZERO", "path": "6"}, "778": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH2", "path": "6", "value": "0x317"}, "781": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "JUMPI", "path": "6"}, "782": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "RETURNDATASIZE", "path": "6"}, "783": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x0"}, "785": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "786": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "RETURNDATACOPY", "path": "6"}, "787": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "RETURNDATASIZE", "path": "6"}, "788": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x0"}, "790": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "REVERT", "path": "6"}, "791": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "JUMPDEST", "path": "6"}, "792": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "POP", "path": "6"}, "793": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "POP", "path": "6"}, "794": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "POP", "path": "6"}, "795": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "POP", "path": "6"}, "796": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x40"}, "798": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "MLOAD", "path": "6"}, "799": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "RETURNDATASIZE", "path": "6"}, "800": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x1F"}, "802": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "NOT", "path": "6"}, "803": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x1F"}, "805": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP3", "path": "6"}, "806": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ADD", "path": "6"}, "807": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "AND", "path": "6"}, "808": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP3", "path": "6"}, "809": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ADD", "path": "6"}, "810": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP1", "path": "6"}, "811": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH1", "path": "6", "value": "0x40"}, "813": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "MSTORE", "path": "6"}, "814": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "POP", "path": "6"}, "815": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "DUP2", "path": "6"}, "816": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "ADD", "path": "6"}, "817": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP1", "path": "6"}, "818": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH2", "path": "6", "value": "0x33B"}, "821": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP2", "path": "6"}, "822": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "SWAP1", "path": "6"}, "823": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "PUSH2", "path": "6", "value": "0xC31"}, "826": {"fn": "LeveragedTrading.getBtcPrice", "jump": "i", "offset": [6459, 6486], "op": "JUMP", "path": "6"}, "827": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6459, 6486], "op": "JUMPDEST", "path": "6"}, "828": {"op": "POP"}, "829": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6437, 6486], "op": "SWAP2", "path": "6"}, "830": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6437, 6486], "op": "SWAP6", "path": "6"}, "831": {"op": "POP"}, "832": {"op": "POP"}, "833": {"op": "POP"}, "834": {"op": "POP"}, "835": {"op": "POP"}, "836": {"op": "POP"}, "837": {"fn": "LeveragedTrading.getBtcPrice", "offset": [6290, 6607], "op": "SWAP1", "path": "6"}, "838": {"fn": "LeveragedTrading.getBtcPrice", "jump": "o", "offset": [6290, 6607], "op": "JUMP", "path": "6"}, "839": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4571, 5225], "op": "JUMPDEST", "path": "6"}, "840": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4624, 4640], "op": "PUSH1", "path": "6", "value": "0x0"}, "842": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4643, 4656], "op": "PUSH2", "path": "6", "value": "0x351"}, "845": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4643, 4654], "op": "PUSH2", "path": "6", "value": "0x2BA"}, "848": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [4643, 4656], "op": "JUMP", "path": "6"}, "849": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4643, 4656], "op": "JUMPDEST", "path": "6"}, "850": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4624, 4656], "op": "SWAP1", "path": "6"}, "851": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4624, 4656], "op": "POP", "path": "6"}, "852": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4689, 4690], "op": "PUSH1", "path": "6", "value": "0x0"}, "854": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4671, 4686], "op": "PUSH1", "path": "6", "value": "0x3"}, "856": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4671, 4686], "op": "SLOAD", "path": "6"}, "857": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4671, 4690], "op": "GT", "path": "6"}, "858": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4670, 4718], "op": "DUP1", "path": "6"}, "859": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4670, 4718], "op": "ISZERO", "path": "6"}, "860": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4670, 4718], "op": "PUSH2", "path": "6", "value": "0x367"}, "863": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4670, 4718], "op": "JUMPI", "path": "6"}, "864": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4670, 4718], "op": "POP", "path": "6"}, "865": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4716, 4717], "op": "PUSH1", "path": "6", "value": "0x0"}, "867": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4696, 4713], "op": "PUSH1", "path": "6", "value": "0x4"}, "869": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4696, 4713], "op": "SLOAD", "path": "6"}, "870": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4696, 4717], "op": "GT", "path": "6"}, "871": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4670, 4718], "op": "JUMPDEST", "path": "6"}, "872": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4666, 5185], "op": "ISZERO", "path": "6"}, "873": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4666, 5185], "op": "PUSH2", "path": "6", "value": "0x3D2"}, "876": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4666, 5185], "op": "JUMPI", "path": "6"}, "877": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4734, 4757], "op": "PUSH1", "path": "6", "value": "0x0"}, "879": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4760, 4788], "op": "PUSH2", "path": "6", "value": "0x377"}, "882": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4779, 4787], "op": "DUP3", "path": "6"}, "883": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4760, 4778], "op": "PUSH2", "path": "6", "value": "0xA4F"}, "886": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [4760, 4788], "op": "JUMP", "path": "6"}, "887": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4760, 4788], "op": "JUMPDEST", "path": "6"}, "888": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4734, 4788], "op": "SWAP1", "path": "6"}, "889": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4734, 4788], "op": "POP", "path": "6"}, "890": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4826, 4827], "op": "PUSH1", "path": "6", "value": "0x0"}, "892": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4806, 4823], "op": "PUSH2", "path": "6", "value": "0x384"}, "895": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4814, 4822], "op": "DUP4", "path": "6"}, "896": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4806, 4813], "op": "PUSH2", "path": "6", "value": "0xA8D"}, "899": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [4806, 4823], "op": "JUMP", "path": "6"}, "900": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4806, 4823], "op": "JUMPDEST", "path": "6"}, "901": {"branch": 48, "fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4806, 4827], "op": "SGT", "path": "6"}, "902": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "ISZERO", "path": "6"}, "903": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "PUSH2", "path": "6", "value": "0x3AF"}, "906": {"branch": 48, "fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "JUMPI", "path": "6"}, "907": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4865, 4880], "op": "PUSH1", "path": "6", "statement": 1, "value": "0x3"}, "909": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4865, 4880], "op": "SLOAD", "path": "6"}, "910": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4865, 4901], "op": "PUSH2", "path": "6", "value": "0x397"}, "913": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4865, 4901], "op": "SWAP1", "path": "6"}, "914": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4885, 4900], "op": "DUP3", "path": "6"}, "915": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4865, 4884], "op": "PUSH2", "path": "6", "value": "0xAAA"}, "918": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [4865, 4901], "op": "JUMP", "path": "6"}, "919": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4865, 4901], "op": "JUMPDEST", "path": "6"}, "920": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4847, 4862], "op": "PUSH1", "path": "6", "value": "0x3"}, "922": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4847, 4901], "op": "SSTORE", "path": "6"}, "923": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4939, 4956], "op": "PUSH1", "path": "6", "statement": 2, "value": "0x4"}, "925": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4939, 4956], "op": "SLOAD", "path": "6"}, "926": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4939, 4977], "op": "PUSH2", "path": "6", "value": "0x3A7"}, "929": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4939, 4977], "op": "SWAP1", "path": "6"}, "930": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4961, 4976], "op": "DUP3", "path": "6"}, "931": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4939, 4960], "op": "PUSH2", "path": "6", "value": "0xABD"}, "934": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [4939, 4977], "op": "JUMP", "path": "6"}, "935": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4939, 4977], "op": "JUMPDEST", "path": "6"}, "936": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4919, 4936], "op": "PUSH1", "path": "6", "value": "0x4"}, "938": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4919, 4977], "op": "SSTORE", "path": "6"}, "939": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "PUSH2", "path": "6", "value": "0x3D0"}, "942": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "JUMP", "path": "6"}, "943": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "JUMPDEST", "path": "6"}, "944": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5047, 5062], "op": "PUSH1", "path": "6", "statement": 3, "value": "0x3"}, "946": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5047, 5062], "op": "SLOAD", "path": "6"}, "947": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5047, 5083], "op": "PUSH2", "path": "6", "value": "0x3BC"}, "950": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5047, 5083], "op": "SWAP1", "path": "6"}, "951": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5067, 5082], "op": "DUP3", "path": "6"}, "952": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5047, 5066], "op": "PUSH2", "path": "6", "value": "0xABD"}, "955": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [5047, 5083], "op": "JUMP", "path": "6"}, "956": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5047, 5083], "op": "JUMPDEST", "path": "6"}, "957": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5029, 5044], "op": "PUSH1", "path": "6", "value": "0x3"}, "959": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5029, 5083], "op": "SSTORE", "path": "6"}, "960": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5121, 5138], "op": "PUSH1", "path": "6", "statement": 4, "value": "0x4"}, "962": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5121, 5138], "op": "SLOAD", "path": "6"}, "963": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5121, 5159], "op": "PUSH2", "path": "6", "value": "0x3CC"}, "966": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5121, 5159], "op": "SWAP1", "path": "6"}, "967": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5143, 5158], "op": "DUP3", "path": "6"}, "968": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5121, 5142], "op": "PUSH2", "path": "6", "value": "0xAAA"}, "971": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "i", "offset": [5121, 5159], "op": "JUMP", "path": "6"}, "972": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5121, 5159], "op": "JUMPDEST", "path": "6"}, "973": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5101, 5118], "op": "PUSH1", "path": "6", "value": "0x4"}, "975": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5101, 5159], "op": "SSTORE", "path": "6"}, "976": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4802, 5174], "op": "JUMPDEST", "path": "6"}, "977": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4666, 5185], "op": "POP", "path": "6"}, "978": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [4666, 5185], "op": "JUMPDEST", "path": "6"}, "979": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5195, 5207], "op": "PUSH1", "path": "6", "statement": 5, "value": "0x7"}, "981": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "offset": [5195, 5218], "op": "SSTORE", "path": "6"}, "982": {"fn": "LeveragedTrading.rebalanceLeveragedTokens", "jump": "o", "offset": [4571, 5225], "op": "JUMP", "path": "6"}, "983": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6058, 6237], "op": "JUMPDEST", "path": "6"}, "984": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6106, 6113], "op": "PUSH1", "path": "6", "value": "0x0"}, "986": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6157], "op": "PUSH1", "path": "6", "statement": 6, "value": "0x6"}, "988": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6157], "op": "SLOAD", "path": "6"}, "989": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6161, 6162], "op": "PUSH1", "path": "6", "value": "0x0"}, "991": {"branch": 49, "fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6162], "op": "EQ", "path": "6"}, "992": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6230], "op": "PUSH2", "path": "6", "value": "0x40C"}, "995": {"branch": 49, "fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6230], "op": "JUMPI", "path": "6"}, "996": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6230], "op": "PUSH2", "path": "6", "value": "0x407"}, "999": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6216, 6229], "op": "PUSH1", "path": "6", "value": "0x6"}, "1001": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6216, 6229], "op": "SLOAD", "path": "6"}, "1002": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6211], "op": "PUSH2", "path": "6", "value": "0x401"}, "1005": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6203, 6210], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "1009": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6198], "op": "PUSH1", "path": "6", "value": "0x4"}, "1011": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6198], "op": "SLOAD", "path": "6"}, "1012": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6202], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "1015": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6202], "op": "SWAP1", "path": "6"}, "1016": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6211], "op": "SWAP2", "path": "6"}, "1017": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6211], "op": "SWAP1", "path": "6"}, "1018": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6211], "op": "PUSH4", "path": "6", "value": "0xFFFFFFFF"}, "1023": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6211], "op": "AND", "path": "6"}, "1024": {"fn": "LeveragedTrading.getBtcDownPrice", "jump": "i", "offset": [6181, 6211], "op": "JUMP", "path": "6"}, "1025": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6211], "op": "JUMPDEST", "path": "6"}, "1026": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6215], "op": "SWAP1", "path": "6"}, "1027": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6215], "op": "PUSH2", "path": "6", "value": "0xAD5"}, "1030": {"fn": "LeveragedTrading.getBtcDownPrice", "jump": "i", "offset": [6181, 6230], "op": "JUMP", "path": "6"}, "1031": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6181, 6230], "op": "JUMPDEST", "path": "6"}, "1032": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6230], "op": "PUSH2", "path": "6", "value": "0x2AC"}, "1035": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6230], "op": "JUMP", "path": "6"}, "1036": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6144, 6230], "op": "JUMPDEST", "path": "6"}, "1037": {"op": "POP"}, "1038": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6166, 6178], "op": "PUSH1", "path": "6", "value": "0x2"}, "1040": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6166, 6178], "op": "SLOAD", "path": "6"}, "1041": {"fn": "LeveragedTrading.getBtcDownPrice", "offset": [6166, 6178], "op": "SWAP1", "path": "6"}, "1042": {"fn": "LeveragedTrading.getBtcDownPrice", "jump": "o", "offset": [6058, 6237], "op": "JUMP", "path": "6"}, "1043": {"fn": "LeveragedTrading.initiatePool", "offset": [2127, 2386], "op": "JUMPDEST", "path": "6"}, "1044": {"fn": "LeveragedTrading.initiatePool", "offset": [2206, 2221], "op": "PUSH1", "path": "6", "statement": 7, "value": "0x0"}, "1046": {"fn": "LeveragedTrading.initiatePool", "offset": [2206, 2221], "op": "SLOAD", "path": "6"}, "1047": {"fn": "LeveragedTrading.initiatePool", "offset": [2206, 2221], "op": "PUSH1", "path": "6", "value": "0xFF"}, "1049": {"fn": "LeveragedTrading.initiatePool", "offset": [2206, 2221], "op": "AND", "path": "6"}, "1050": {"branch": 50, "fn": "LeveragedTrading.initiatePool", "offset": [2205, 2221], "op": "ISZERO", "path": "6"}, "1051": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "PUSH2", "path": "6", "value": "0x43F"}, "1054": {"branch": 50, "fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "JUMPI", "path": "6"}, "1055": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "PUSH1", "path": "6", "value": "0x40"}, "1057": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "MLOAD", "path": "6"}, "1058": {"op": "PUSH3", "value": "0x461BCD"}, "1062": {"op": "PUSH1", "value": "0xE5"}, "1064": {"op": "SHL"}, "1065": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "DUP2", "path": "6"}, "1066": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "MSTORE", "path": "6"}, "1067": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "PUSH1", "path": "6", "value": "0x4"}, "1069": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "ADD", "path": "6"}, "1070": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "PUSH2", "path": "6", "value": "0x436"}, "1073": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "SWAP1", "path": "6"}, "1074": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "PUSH2", "path": "6", "value": "0xD4A"}, "1077": {"fn": "LeveragedTrading.initiatePool", "jump": "i", "offset": [2197, 2257], "op": "JUMP", "path": "6"}, "1078": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "JUMPDEST", "path": "6"}, "1079": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "PUSH1", "path": "6", "value": "0x40"}, "1081": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "MLOAD", "path": "6"}, "1082": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "DUP1", "path": "6"}, "1083": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "SWAP2", "path": "6"}, "1084": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "SUB", "path": "6"}, "1085": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "SWAP1", "path": "6"}, "1086": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "REVERT", "optimizer_revert": true, "path": "6"}, "1087": {"fn": "LeveragedTrading.initiatePool", "offset": [2197, 2257], "op": "JUMPDEST", "path": "6"}, "1088": {"fn": "LeveragedTrading.initiatePool", "offset": [2268, 2301], "op": "PUSH2", "path": "6", "statement": 8, "value": "0x448"}, "1091": {"fn": "LeveragedTrading.initiatePool", "offset": [2279, 2300], "op": "DUP2", "path": "6"}, "1092": {"fn": "LeveragedTrading.initiatePool", "offset": [2268, 2278], "op": "PUSH2", "path": "6", "value": "0x8F5"}, "1095": {"fn": "LeveragedTrading.initiatePool", "jump": "i", "offset": [2268, 2301], "op": "JUMP", "path": "6"}, "1096": {"fn": "LeveragedTrading.initiatePool", "offset": [2268, 2301], "op": "JUMPDEST", "path": "6"}, "1097": {"fn": "LeveragedTrading.initiatePool", "offset": [2311, 2346], "op": "PUSH2", "path": "6", "statement": 9, "value": "0x451"}, "1100": {"fn": "LeveragedTrading.initiatePool", "offset": [2324, 2345], "op": "DUP2", "path": "6"}, "1101": {"fn": "LeveragedTrading.initiatePool", "offset": [2311, 2323], "op": "PUSH2", "path": "6", "value": "0x5C7"}, "1104": {"fn": "LeveragedTrading.initiatePool", "jump": "i", "offset": [2311, 2346], "op": "JUMP", "path": "6"}, "1105": {"fn": "LeveragedTrading.initiatePool", "offset": [2311, 2346], "op": "JUMPDEST", "path": "6"}, "1106": {"op": "POP"}, "1107": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2372], "op": "PUSH1", "path": "6", "statement": 10, "value": "0x0"}, "1109": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2379], "op": "DUP1", "path": "6"}, "1110": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2379], "op": "SLOAD", "path": "6"}, "1111": {"op": "PUSH1", "value": "0xFF"}, "1113": {"op": "NOT"}, "1114": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2379], "op": "AND", "path": "6"}, "1115": {"fn": "LeveragedTrading.initiatePool", "offset": [2375, 2379], "op": "PUSH1", "path": "6", "value": "0x1"}, "1117": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2379], "op": "OR", "path": "6"}, "1118": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2379], "op": "SWAP1", "path": "6"}, "1119": {"fn": "LeveragedTrading.initiatePool", "offset": [2357, 2379], "op": "SSTORE", "path": "6"}, "1120": {"fn": "LeveragedTrading.initiatePool", "jump": "o", "offset": [2127, 2386], "op": "JUMP", "path": "6"}, "1121": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4023, 4563], "op": "JUMPDEST", "path": "6"}, "1122": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4094, 4120], "op": "PUSH2", "path": "6", "statement": 11, "value": "0x469"}, "1125": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4094, 4118], "op": "PUSH2", "path": "6", "value": "0x347"}, "1128": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4094, 4120], "op": "JUMP", "path": "6"}, "1129": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4094, 4120], "op": "JUMPDEST", "path": "6"}, "1130": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4137], "op": "PUSH1", "path": "6", "statement": 12, "value": "0xB"}, "1132": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4137], "op": "SLOAD", "path": "6"}, "1133": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x40"}, "1135": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "MLOAD", "path": "6"}, "1136": {"op": "PUSH4", "value": "0x852CD8D"}, "1141": {"op": "PUSH1", "value": "0xE3"}, "1143": {"op": "SHL"}, "1144": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP2", "path": "6"}, "1145": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "MSTORE", "path": "6"}, "1146": {"op": "PUSH1", "value": "0x1"}, "1148": {"op": "PUSH1", "value": "0x1"}, "1150": {"op": "PUSH1", "value": "0xA0"}, "1152": {"op": "SHL"}, "1153": {"op": "SUB"}, "1154": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4137], "op": "SWAP1", "path": "6"}, "1155": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4137], "op": "SWAP2", "path": "6"}, "1156": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4137], "op": "AND", "path": "6"}, "1157": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4137], "op": "SWAP1", "path": "6"}, "1158": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4142], "op": "PUSH4", "path": "6", "value": "0x42966C68"}, "1163": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4142], "op": "SWAP1", "path": "6"}, "1164": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH2", "path": "6", "value": "0x499"}, "1167": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "SWAP1", "path": "6"}, "1168": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4143, 4164], "op": "DUP5", "path": "6"}, "1169": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4143, 4164], "op": "SWAP1", "path": "6"}, "1170": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x4"}, "1172": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "ADD", "path": "6"}, "1173": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH2", "path": "6", "value": "0xD81"}, "1176": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4130, 4165], "op": "JUMP", "path": "6"}, "1177": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "JUMPDEST", "path": "6"}, "1178": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x0"}, "1180": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x40"}, "1182": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "MLOAD", "path": "6"}, "1183": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP1", "path": "6"}, "1184": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP4", "path": "6"}, "1185": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "SUB", "path": "6"}, "1186": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP2", "path": "6"}, "1187": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x0"}, "1189": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP8", "path": "6"}, "1190": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP1", "path": "6"}, "1191": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "EXTCODESIZE", "path": "6"}, "1192": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "ISZERO", "path": "6"}, "1193": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP1", "path": "6"}, "1194": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "ISZERO", "path": "6"}, "1195": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH2", "path": "6", "value": "0x4B3"}, "1198": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "JUMPI", "path": "6"}, "1199": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x0"}, "1201": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP1", "path": "6"}, "1202": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "REVERT", "path": "6"}, "1203": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "JUMPDEST", "path": "6"}, "1204": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "POP", "path": "6"}, "1205": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "GAS", "path": "6"}, "1206": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "CALL", "path": "6"}, "1207": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "ISZERO", "path": "6"}, "1208": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP1", "path": "6"}, "1209": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "ISZERO", "path": "6"}, "1210": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH2", "path": "6", "value": "0x4C7"}, "1213": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "JUMPI", "path": "6"}, "1214": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "RETURNDATASIZE", "path": "6"}, "1215": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x0"}, "1217": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "DUP1", "path": "6"}, "1218": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "RETURNDATACOPY", "path": "6"}, "1219": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "RETURNDATASIZE", "path": "6"}, "1220": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "PUSH1", "path": "6", "value": "0x0"}, "1222": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "REVERT", "path": "6"}, "1223": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4130, 4165], "op": "JUMPDEST", "path": "6"}, "1224": {"op": "POP"}, "1225": {"op": "POP"}, "1226": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4197, 4208], "op": "PUSH1", "path": "6", "value": "0x8"}, "1228": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4197, 4208], "op": "SLOAD", "path": "6"}, "1229": {"op": "PUSH1", "value": "0x1"}, "1231": {"op": "PUSH1", "value": "0x1"}, "1233": {"op": "PUSH1", "value": "0xA0"}, "1235": {"op": "SHL"}, "1236": {"op": "SUB"}, "1237": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4197, 4208], "op": "AND", "path": "6"}, "1238": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4197, 4208], "op": "SWAP2", "path": "6"}, "1239": {"op": "POP"}, "1240": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4234, 4251], "op": "PUSH2", "path": "6", "statement": 13, "value": "0x4E1"}, "1243": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4234, 4251], "op": "SWAP1", "path": "6"}, "1244": {"op": "POP"}, "1245": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4234, 4249], "op": "PUSH2", "path": "6", "value": "0x3D7"}, "1248": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4234, 4251], "op": "JUMP", "path": "6"}, "1249": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4234, 4251], "op": "JUMPDEST", "path": "6"}, "1250": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4219, 4231], "op": "PUSH1", "path": "6", "value": "0x2"}, "1252": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4219, 4251], "op": "DUP2", "path": "6"}, "1253": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4219, 4251], "op": "SWAP1", "path": "6"}, "1254": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4219, 4251], "op": "SSTORE", "path": "6"}, "1255": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4266, 4284], "op": "PUSH1", "path": "6", "value": "0x0"}, "1257": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4266, 4284], "op": "SWAP1", "path": "6"}, "1258": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4339], "op": "PUSH2", "path": "6", "value": "0x4FD"}, "1261": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4339], "op": "SWAP1", "path": "6"}, "1262": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4331, 4338], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "1266": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4331, 4338], "op": "SWAP1", "path": "6"}, "1267": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4326], "op": "PUSH2", "path": "6", "value": "0x401"}, "1270": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4326], "op": "SWAP1", "path": "6"}, "1271": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4308], "op": "DUP7", "path": "6"}, "1272": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4308], "op": "SWAP1", "path": "6"}, "1273": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4312], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "1276": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4287, 4326], "op": "JUMP", "path": "6"}, "1277": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4287, 4339], "op": "JUMPDEST", "path": "6"}, "1278": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "statement": 14, "value": "0x40"}, "1280": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "MLOAD", "path": "6"}, "1281": {"op": "PUSH4", "value": "0xA9059CBB"}, "1286": {"op": "PUSH1", "value": "0xE0"}, "1288": {"op": "SHL"}, "1289": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP2", "path": "6"}, "1290": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "MSTORE", "path": "6"}, "1291": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4266, 4339], "op": "SWAP1", "path": "6"}, "1292": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4266, 4339], "op": "SWAP2", "path": "6"}, "1293": {"op": "POP"}, "1294": {"op": "PUSH1", "value": "0x1"}, "1296": {"op": "PUSH1", "value": "0x1"}, "1298": {"op": "PUSH1", "value": "0xA0"}, "1300": {"op": "SHL"}, "1301": {"op": "SUB"}, "1302": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4370], "op": "DUP4", "path": "6"}, "1303": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4370], "op": "AND", "path": "6"}, "1304": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4370], "op": "SWAP1", "path": "6"}, "1305": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4370], "op": "PUSH4", "path": "6", "value": "0xA9059CBB"}, "1310": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4370], "op": "SWAP1", "path": "6"}, "1311": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH2", "path": "6", "value": "0x52E"}, "1314": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "SWAP1", "path": "6"}, "1315": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4371, 4381], "op": "CALLER", "path": "6"}, "1316": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4371, 4381], "op": "SWAP1", "path": "6"}, "1317": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4266, 4339], "op": "DUP6", "path": "6"}, "1318": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4266, 4339], "op": "SWAP1", "path": "6"}, "1319": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x4"}, "1321": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ADD", "path": "6"}, "1322": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH2", "path": "6", "value": "0xCB8"}, "1325": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4357, 4395], "op": "JUMP", "path": "6"}, "1326": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "JUMPDEST", "path": "6"}, "1327": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x20"}, "1329": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x40"}, "1331": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "MLOAD", "path": "6"}, "1332": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1333": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP4", "path": "6"}, "1334": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "SUB", "path": "6"}, "1335": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP2", "path": "6"}, "1336": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x0"}, "1338": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP8", "path": "6"}, "1339": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1340": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "EXTCODESIZE", "path": "6"}, "1341": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ISZERO", "path": "6"}, "1342": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1343": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ISZERO", "path": "6"}, "1344": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH2", "path": "6", "value": "0x548"}, "1347": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "JUMPI", "path": "6"}, "1348": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x0"}, "1350": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1351": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "REVERT", "path": "6"}, "1352": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "JUMPDEST", "path": "6"}, "1353": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "POP", "path": "6"}, "1354": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "GAS", "path": "6"}, "1355": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "CALL", "path": "6"}, "1356": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ISZERO", "path": "6"}, "1357": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1358": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ISZERO", "path": "6"}, "1359": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH2", "path": "6", "value": "0x55C"}, "1362": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "JUMPI", "path": "6"}, "1363": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "RETURNDATASIZE", "path": "6"}, "1364": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x0"}, "1366": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1367": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "RETURNDATACOPY", "path": "6"}, "1368": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "RETURNDATASIZE", "path": "6"}, "1369": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x0"}, "1371": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "REVERT", "path": "6"}, "1372": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "JUMPDEST", "path": "6"}, "1373": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "POP", "path": "6"}, "1374": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "POP", "path": "6"}, "1375": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "POP", "path": "6"}, "1376": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "POP", "path": "6"}, "1377": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x40"}, "1379": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "MLOAD", "path": "6"}, "1380": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "RETURNDATASIZE", "path": "6"}, "1381": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x1F"}, "1383": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "NOT", "path": "6"}, "1384": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x1F"}, "1386": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP3", "path": "6"}, "1387": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ADD", "path": "6"}, "1388": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "AND", "path": "6"}, "1389": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP3", "path": "6"}, "1390": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ADD", "path": "6"}, "1391": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP1", "path": "6"}, "1392": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH1", "path": "6", "value": "0x40"}, "1394": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "MSTORE", "path": "6"}, "1395": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "POP", "path": "6"}, "1396": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "DUP2", "path": "6"}, "1397": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "ADD", "path": "6"}, "1398": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "SWAP1", "path": "6"}, "1399": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH2", "path": "6", "value": "0x580"}, "1402": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "SWAP2", "path": "6"}, "1403": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "SWAP1", "path": "6"}, "1404": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "PUSH2", "path": "6", "value": "0xBE1"}, "1407": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4357, 4395], "op": "JUMP", "path": "6"}, "1408": {"branch": 51, "fn": "LeveragedTrading.redeemBtcDown", "offset": [4357, 4395], "op": "JUMPDEST", "path": "6"}, "1409": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "PUSH2", "path": "6", "value": "0x59C"}, "1412": {"branch": 51, "fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "JUMPI", "path": "6"}, "1413": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "PUSH1", "path": "6", "value": "0x40"}, "1415": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "MLOAD", "path": "6"}, "1416": {"op": "PUSH3", "value": "0x461BCD"}, "1420": {"op": "PUSH1", "value": "0xE5"}, "1422": {"op": "SHL"}, "1423": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "DUP2", "path": "6"}, "1424": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "MSTORE", "path": "6"}, "1425": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "PUSH1", "path": "6", "value": "0x4"}, "1427": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "ADD", "path": "6"}, "1428": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "PUSH2", "path": "6", "value": "0x436"}, "1431": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "SWAP1", "path": "6"}, "1432": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "PUSH2", "path": "6", "value": "0xCDC"}, "1435": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4349, 4425], "op": "JUMP", "path": "6"}, "1436": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4349, 4425], "op": "JUMPDEST", "path": "6"}, "1437": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4452, 4465], "op": "PUSH1", "path": "6", "statement": 15, "value": "0x6"}, "1439": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4452, 4465], "op": "SLOAD", "path": "6"}, "1440": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4452, 4492], "op": "PUSH2", "path": "6", "value": "0x5A9"}, "1443": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4452, 4492], "op": "SWAP1", "path": "6"}, "1444": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4470, 4491], "op": "DUP5", "path": "6"}, "1445": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4452, 4469], "op": "PUSH2", "path": "6", "value": "0xABD"}, "1448": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4452, 4492], "op": "JUMP", "path": "6"}, "1449": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4452, 4492], "op": "JUMPDEST", "path": "6"}, "1450": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4436, 4449], "op": "PUSH1", "path": "6", "value": "0x6"}, "1452": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4436, 4492], "op": "SSTORE", "path": "6"}, "1453": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4522, 4539], "op": "PUSH1", "path": "6", "statement": 16, "value": "0x4"}, "1455": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4522, 4539], "op": "SLOAD", "path": "6"}, "1456": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4522, 4555], "op": "PUSH2", "path": "6", "value": "0x5B9"}, "1459": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4522, 4555], "op": "SWAP1", "path": "6"}, "1460": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4544, 4554], "op": "DUP3", "path": "6"}, "1461": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4522, 4543], "op": "PUSH2", "path": "6", "value": "0xABD"}, "1464": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "i", "offset": [4522, 4555], "op": "JUMP", "path": "6"}, "1465": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4522, 4555], "op": "JUMPDEST", "path": "6"}, "1466": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4502, 4519], "op": "PUSH1", "path": "6", "value": "0x4"}, "1468": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [4502, 4555], "op": "SSTORE", "path": "6"}, "1469": {"op": "POP"}, "1470": {"op": "POP"}, "1471": {"op": "POP"}, "1472": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "o", "offset": [4023, 4563], "op": "JUMP", "path": "6"}, "1473": {"offset": [1638, 1670], "op": "JUMPDEST", "path": "6"}, "1474": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [1638, 1670], "op": "PUSH1", "path": "6", "value": "0x6"}, "1476": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [1638, 1670], "op": "SLOAD", "path": "6"}, "1477": {"fn": "LeveragedTrading.redeemBtcDown", "offset": [1638, 1670], "op": "DUP2", "path": "6"}, "1478": {"fn": "LeveragedTrading.redeemBtcDown", "jump": "o", "offset": [1638, 1670], "op": "JUMP", "path": "6"}, "1479": {"fn": "LeveragedTrading.issueBtcDown", "offset": [2938, 3491], "op": "JUMPDEST", "path": "6"}, "1480": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3008, 3034], "op": "PUSH2", "path": "6", "statement": 17, "value": "0x5CF"}, "1483": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3008, 3032], "op": "PUSH2", "path": "6", "value": "0x347"}, "1486": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3008, 3034], "op": "JUMP", "path": "6"}, "1487": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3008, 3034], "op": "JUMPDEST", "path": "6"}, "1488": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3051], "op": "PUSH1", "path": "6", "statement": 18, "value": "0xB"}, "1490": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3051], "op": "SLOAD", "path": "6"}, "1491": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x40"}, "1493": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "MLOAD", "path": "6"}, "1494": {"op": "PUSH4", "value": "0x140E25AD"}, "1499": {"op": "PUSH1", "value": "0xE3"}, "1501": {"op": "SHL"}, "1502": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP2", "path": "6"}, "1503": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "MSTORE", "path": "6"}, "1504": {"op": "PUSH1", "value": "0x1"}, "1506": {"op": "PUSH1", "value": "0x1"}, "1508": {"op": "PUSH1", "value": "0xA0"}, "1510": {"op": "SHL"}, "1511": {"op": "SUB"}, "1512": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3051], "op": "SWAP1", "path": "6"}, "1513": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3051], "op": "SWAP2", "path": "6"}, "1514": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3051], "op": "AND", "path": "6"}, "1515": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3051], "op": "SWAP1", "path": "6"}, "1516": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3056], "op": "PUSH4", "path": "6", "value": "0xA0712D68"}, "1521": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3056], "op": "SWAP1", "path": "6"}, "1522": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH2", "path": "6", "value": "0x5FF"}, "1525": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "SWAP1", "path": "6"}, "1526": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3057, 3078], "op": "DUP5", "path": "6"}, "1527": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3057, 3078], "op": "SWAP1", "path": "6"}, "1528": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x4"}, "1530": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "ADD", "path": "6"}, "1531": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH2", "path": "6", "value": "0xD81"}, "1534": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3044, 3079], "op": "JUMP", "path": "6"}, "1535": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "JUMPDEST", "path": "6"}, "1536": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x0"}, "1538": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x40"}, "1540": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "MLOAD", "path": "6"}, "1541": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP1", "path": "6"}, "1542": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP4", "path": "6"}, "1543": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "SUB", "path": "6"}, "1544": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP2", "path": "6"}, "1545": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x0"}, "1547": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP8", "path": "6"}, "1548": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP1", "path": "6"}, "1549": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "EXTCODESIZE", "path": "6"}, "1550": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "ISZERO", "path": "6"}, "1551": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP1", "path": "6"}, "1552": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "ISZERO", "path": "6"}, "1553": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH2", "path": "6", "value": "0x619"}, "1556": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "JUMPI", "path": "6"}, "1557": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x0"}, "1559": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP1", "path": "6"}, "1560": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "REVERT", "path": "6"}, "1561": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "JUMPDEST", "path": "6"}, "1562": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "POP", "path": "6"}, "1563": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "GAS", "path": "6"}, "1564": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "CALL", "path": "6"}, "1565": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "ISZERO", "path": "6"}, "1566": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP1", "path": "6"}, "1567": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "ISZERO", "path": "6"}, "1568": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH2", "path": "6", "value": "0x62D"}, "1571": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "JUMPI", "path": "6"}, "1572": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "RETURNDATASIZE", "path": "6"}, "1573": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x0"}, "1575": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "DUP1", "path": "6"}, "1576": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "RETURNDATACOPY", "path": "6"}, "1577": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "RETURNDATASIZE", "path": "6"}, "1578": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "PUSH1", "path": "6", "value": "0x0"}, "1580": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "REVERT", "path": "6"}, "1581": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3044, 3079], "op": "JUMPDEST", "path": "6"}, "1582": {"op": "POP"}, "1583": {"op": "POP"}, "1584": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3111, 3122], "op": "PUSH1", "path": "6", "value": "0x8"}, "1586": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3111, 3122], "op": "SLOAD", "path": "6"}, "1587": {"op": "PUSH1", "value": "0x1"}, "1589": {"op": "PUSH1", "value": "0x1"}, "1591": {"op": "PUSH1", "value": "0xA0"}, "1593": {"op": "SHL"}, "1594": {"op": "SUB"}, "1595": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3111, 3122], "op": "AND", "path": "6"}, "1596": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3111, 3122], "op": "SWAP2", "path": "6"}, "1597": {"op": "POP"}, "1598": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3148, 3165], "op": "PUSH2", "path": "6", "statement": 19, "value": "0x647"}, "1601": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3148, 3165], "op": "SWAP1", "path": "6"}, "1602": {"op": "POP"}, "1603": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3148, 3163], "op": "PUSH2", "path": "6", "value": "0x3D7"}, "1606": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3148, 3165], "op": "JUMP", "path": "6"}, "1607": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3148, 3165], "op": "JUMPDEST", "path": "6"}, "1608": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3133, 3145], "op": "PUSH1", "path": "6", "value": "0x2"}, "1610": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3133, 3165], "op": "DUP2", "path": "6"}, "1611": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3133, 3165], "op": "SWAP1", "path": "6"}, "1612": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3133, 3165], "op": "SSTORE", "path": "6"}, "1613": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3175, 3193], "op": "PUSH1", "path": "6", "value": "0x0"}, "1615": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3175, 3193], "op": "SWAP1", "path": "6"}, "1616": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3248], "op": "PUSH2", "path": "6", "value": "0x663"}, "1619": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3248], "op": "SWAP1", "path": "6"}, "1620": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3240, 3247], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "1624": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3240, 3247], "op": "SWAP1", "path": "6"}, "1625": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3235], "op": "PUSH2", "path": "6", "value": "0x401"}, "1628": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3235], "op": "SWAP1", "path": "6"}, "1629": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3217], "op": "DUP7", "path": "6"}, "1630": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3217], "op": "SWAP1", "path": "6"}, "1631": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3221], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "1634": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3196, 3235], "op": "JUMP", "path": "6"}, "1635": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3196, 3248], "op": "JUMPDEST", "path": "6"}, "1636": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "statement": 20, "value": "0x40"}, "1638": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "MLOAD", "path": "6"}, "1639": {"op": "PUSH4", "value": "0x23B872DD"}, "1644": {"op": "PUSH1", "value": "0xE0"}, "1646": {"op": "SHL"}, "1647": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP2", "path": "6"}, "1648": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "MSTORE", "path": "6"}, "1649": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3175, 3248], "op": "SWAP1", "path": "6"}, "1650": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3175, 3248], "op": "SWAP2", "path": "6"}, "1651": {"op": "POP"}, "1652": {"op": "PUSH1", "value": "0x1"}, "1654": {"op": "PUSH1", "value": "0x1"}, "1656": {"op": "PUSH1", "value": "0xA0"}, "1658": {"op": "SHL"}, "1659": {"op": "SUB"}, "1660": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3284], "op": "DUP4", "path": "6"}, "1661": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3284], "op": "AND", "path": "6"}, "1662": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3284], "op": "SWAP1", "path": "6"}, "1663": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3284], "op": "PUSH4", "path": "6", "value": "0x23B872DD"}, "1668": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3284], "op": "SWAP1", "path": "6"}, "1669": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH2", "path": "6", "value": "0x696"}, "1672": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "SWAP1", "path": "6"}, "1673": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3285, 3295], "op": "CALLER", "path": "6"}, "1674": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3285, 3295], "op": "SWAP1", "path": "6"}, "1675": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3305, 3309], "op": "ADDRESS", "path": "6"}, "1676": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3305, 3309], "op": "SWAP1", "path": "6"}, "1677": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3175, 3248], "op": "DUP7", "path": "6"}, "1678": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3175, 3248], "op": "SWAP1", "path": "6"}, "1679": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x4"}, "1681": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ADD", "path": "6"}, "1682": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH2", "path": "6", "value": "0xC94"}, "1685": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3267, 3323], "op": "JUMP", "path": "6"}, "1686": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "JUMPDEST", "path": "6"}, "1687": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x20"}, "1689": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x40"}, "1691": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "MLOAD", "path": "6"}, "1692": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1693": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP4", "path": "6"}, "1694": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "SUB", "path": "6"}, "1695": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP2", "path": "6"}, "1696": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x0"}, "1698": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP8", "path": "6"}, "1699": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1700": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "EXTCODESIZE", "path": "6"}, "1701": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ISZERO", "path": "6"}, "1702": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1703": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ISZERO", "path": "6"}, "1704": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH2", "path": "6", "value": "0x6B0"}, "1707": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "JUMPI", "path": "6"}, "1708": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x0"}, "1710": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1711": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "REVERT", "path": "6"}, "1712": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "JUMPDEST", "path": "6"}, "1713": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "POP", "path": "6"}, "1714": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "GAS", "path": "6"}, "1715": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "CALL", "path": "6"}, "1716": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ISZERO", "path": "6"}, "1717": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1718": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ISZERO", "path": "6"}, "1719": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH2", "path": "6", "value": "0x6C4"}, "1722": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "JUMPI", "path": "6"}, "1723": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "RETURNDATASIZE", "path": "6"}, "1724": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x0"}, "1726": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1727": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "RETURNDATACOPY", "path": "6"}, "1728": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "RETURNDATASIZE", "path": "6"}, "1729": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x0"}, "1731": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "REVERT", "path": "6"}, "1732": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "JUMPDEST", "path": "6"}, "1733": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "POP", "path": "6"}, "1734": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "POP", "path": "6"}, "1735": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "POP", "path": "6"}, "1736": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "POP", "path": "6"}, "1737": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x40"}, "1739": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "MLOAD", "path": "6"}, "1740": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "RETURNDATASIZE", "path": "6"}, "1741": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x1F"}, "1743": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "NOT", "path": "6"}, "1744": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x1F"}, "1746": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP3", "path": "6"}, "1747": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ADD", "path": "6"}, "1748": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "AND", "path": "6"}, "1749": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP3", "path": "6"}, "1750": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ADD", "path": "6"}, "1751": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP1", "path": "6"}, "1752": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH1", "path": "6", "value": "0x40"}, "1754": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "MSTORE", "path": "6"}, "1755": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "POP", "path": "6"}, "1756": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "DUP2", "path": "6"}, "1757": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "ADD", "path": "6"}, "1758": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "SWAP1", "path": "6"}, "1759": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH2", "path": "6", "value": "0x6E8"}, "1762": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "SWAP2", "path": "6"}, "1763": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "SWAP1", "path": "6"}, "1764": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "PUSH2", "path": "6", "value": "0xBE1"}, "1767": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3267, 3323], "op": "JUMP", "path": "6"}, "1768": {"branch": 52, "fn": "LeveragedTrading.issueBtcDown", "offset": [3267, 3323], "op": "JUMPDEST", "path": "6"}, "1769": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "PUSH2", "path": "6", "value": "0x704"}, "1772": {"branch": 52, "fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "JUMPI", "path": "6"}, "1773": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "PUSH1", "path": "6", "value": "0x40"}, "1775": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "MLOAD", "path": "6"}, "1776": {"op": "PUSH3", "value": "0x461BCD"}, "1780": {"op": "PUSH1", "value": "0xE5"}, "1782": {"op": "SHL"}, "1783": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "DUP2", "path": "6"}, "1784": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "MSTORE", "path": "6"}, "1785": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "PUSH1", "path": "6", "value": "0x4"}, "1787": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "ADD", "path": "6"}, "1788": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "PUSH2", "path": "6", "value": "0x436"}, "1791": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "SWAP1", "path": "6"}, "1792": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "PUSH2", "path": "6", "value": "0xD13"}, "1795": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3259, 3354], "op": "JUMP", "path": "6"}, "1796": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3259, 3354], "op": "JUMPDEST", "path": "6"}, "1797": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3381, 3394], "op": "PUSH1", "path": "6", "statement": 21, "value": "0x6"}, "1799": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3381, 3394], "op": "SLOAD", "path": "6"}, "1800": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3381, 3421], "op": "PUSH2", "path": "6", "value": "0x711"}, "1803": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3381, 3421], "op": "SWAP1", "path": "6"}, "1804": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3399, 3420], "op": "DUP5", "path": "6"}, "1805": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3381, 3398], "op": "PUSH2", "path": "6", "value": "0xAAA"}, "1808": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3381, 3421], "op": "JUMP", "path": "6"}, "1809": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3381, 3421], "op": "JUMPDEST", "path": "6"}, "1810": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3365, 3378], "op": "PUSH1", "path": "6", "value": "0x6"}, "1812": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3365, 3421], "op": "SSTORE", "path": "6"}, "1813": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3451, 3468], "op": "PUSH1", "path": "6", "statement": 22, "value": "0x4"}, "1815": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3451, 3468], "op": "SLOAD", "path": "6"}, "1816": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3451, 3484], "op": "PUSH2", "path": "6", "value": "0x5B9"}, "1819": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3451, 3484], "op": "SWAP1", "path": "6"}, "1820": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3473, 3483], "op": "DUP3", "path": "6"}, "1821": {"fn": "LeveragedTrading.issueBtcDown", "offset": [3451, 3472], "op": "PUSH2", "path": "6", "value": "0xAAA"}, "1824": {"fn": "LeveragedTrading.issueBtcDown", "jump": "i", "offset": [3451, 3484], "op": "JUMP", "path": "6"}, "1825": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7402, 7513], "op": "JUMPDEST", "path": "6"}, "1826": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7484], "op": "PUSH1", "path": "6", "statement": 23, "value": "0xB"}, "1828": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7484], "op": "SLOAD", "path": "6"}, "1829": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "PUSH1", "path": "6", "value": "0x40"}, "1831": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "MLOAD", "path": "6"}, "1832": {"op": "PUSH4", "value": "0x70A08231"}, "1837": {"op": "PUSH1", "value": "0xE0"}, "1839": {"op": "SHL"}, "1840": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "DUP2", "path": "6"}, "1841": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "MSTORE", "path": "6"}, "1842": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7451, 7458], "op": "PUSH1", "path": "6", "value": "0x0"}, "1844": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7451, 7458], "op": "SWAP2", "path": "6"}, "1845": {"op": "PUSH1", "value": "0x1"}, "1847": {"op": "PUSH1", "value": "0x1"}, "1849": {"op": "PUSH1", "value": "0xA0"}, "1851": {"op": "SHL"}, "1852": {"op": "SUB"}, "1853": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7484], "op": "AND", "path": "6"}, "1854": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7484], "op": "SWAP1", "path": "6"}, "1855": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7494], "op": "PUSH4", "path": "6", "value": "0x70A08231"}, "1860": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7494], "op": "SWAP1", "path": "6"}, "1861": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "PUSH2", "path": "6", "value": "0x25C"}, "1864": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "SWAP1", "path": "6"}, "1865": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7495, 7505], "op": "CALLER", "path": "6"}, "1866": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7495, 7505], "op": "SWAP1", "path": "6"}, "1867": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "PUSH1", "path": "6", "value": "0x4"}, "1869": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "ADD", "path": "6"}, "1870": {"fn": "LeveragedTrading.getBtcdownBalance", "offset": [7477, 7506], "op": "PUSH2", "path": "6", "value": "0xC80"}, "1873": {"fn": "LeveragedTrading.getBtcdownBalance", "jump": "i", "offset": [7477, 7506], "op": "JUMP", "path": "6"}, "1874": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3499, 4015], "op": "JUMPDEST", "path": "6"}, "1875": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3568, 3594], "op": "PUSH2", "path": "6", "statement": 24, "value": "0x75A"}, "1878": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3568, 3592], "op": "PUSH2", "path": "6", "value": "0x347"}, "1881": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3568, 3594], "op": "JUMP", "path": "6"}, "1882": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3568, 3594], "op": "JUMPDEST", "path": "6"}, "1883": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3609], "op": "PUSH1", "path": "6", "statement": 25, "value": "0xA"}, "1885": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3609], "op": "SLOAD", "path": "6"}, "1886": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x40"}, "1888": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "MLOAD", "path": "6"}, "1889": {"op": "PUSH4", "value": "0x852CD8D"}, "1894": {"op": "PUSH1", "value": "0xE3"}, "1896": {"op": "SHL"}, "1897": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP2", "path": "6"}, "1898": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "MSTORE", "path": "6"}, "1899": {"op": "PUSH1", "value": "0x1"}, "1901": {"op": "PUSH1", "value": "0x1"}, "1903": {"op": "PUSH1", "value": "0xA0"}, "1905": {"op": "SHL"}, "1906": {"op": "SUB"}, "1907": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3609], "op": "SWAP1", "path": "6"}, "1908": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3609], "op": "SWAP2", "path": "6"}, "1909": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3609], "op": "AND", "path": "6"}, "1910": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3609], "op": "SWAP1", "path": "6"}, "1911": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3614], "op": "PUSH4", "path": "6", "value": "0x42966C68"}, "1916": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3614], "op": "SWAP1", "path": "6"}, "1917": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH2", "path": "6", "value": "0x78A"}, "1920": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "SWAP1", "path": "6"}, "1921": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3615, 3636], "op": "DUP5", "path": "6"}, "1922": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3615, 3636], "op": "SWAP1", "path": "6"}, "1923": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x4"}, "1925": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "ADD", "path": "6"}, "1926": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH2", "path": "6", "value": "0xD81"}, "1929": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3604, 3637], "op": "JUMP", "path": "6"}, "1930": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "JUMPDEST", "path": "6"}, "1931": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x0"}, "1933": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x40"}, "1935": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "MLOAD", "path": "6"}, "1936": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP1", "path": "6"}, "1937": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP4", "path": "6"}, "1938": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "SUB", "path": "6"}, "1939": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP2", "path": "6"}, "1940": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x0"}, "1942": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP8", "path": "6"}, "1943": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP1", "path": "6"}, "1944": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "EXTCODESIZE", "path": "6"}, "1945": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "ISZERO", "path": "6"}, "1946": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP1", "path": "6"}, "1947": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "ISZERO", "path": "6"}, "1948": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH2", "path": "6", "value": "0x7A4"}, "1951": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "JUMPI", "path": "6"}, "1952": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x0"}, "1954": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP1", "path": "6"}, "1955": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "REVERT", "path": "6"}, "1956": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "JUMPDEST", "path": "6"}, "1957": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "POP", "path": "6"}, "1958": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "GAS", "path": "6"}, "1959": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "CALL", "path": "6"}, "1960": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "ISZERO", "path": "6"}, "1961": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP1", "path": "6"}, "1962": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "ISZERO", "path": "6"}, "1963": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH2", "path": "6", "value": "0x7B8"}, "1966": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "JUMPI", "path": "6"}, "1967": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "RETURNDATASIZE", "path": "6"}, "1968": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x0"}, "1970": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "DUP1", "path": "6"}, "1971": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "RETURNDATACOPY", "path": "6"}, "1972": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "RETURNDATASIZE", "path": "6"}, "1973": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "PUSH1", "path": "6", "value": "0x0"}, "1975": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "REVERT", "path": "6"}, "1976": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3604, 3637], "op": "JUMPDEST", "path": "6"}, "1977": {"op": "POP"}, "1978": {"op": "POP"}, "1979": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3669, 3680], "op": "PUSH1", "path": "6", "value": "0x8"}, "1981": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3669, 3680], "op": "SLOAD", "path": "6"}, "1982": {"op": "PUSH1", "value": "0x1"}, "1984": {"op": "PUSH1", "value": "0x1"}, "1986": {"op": "PUSH1", "value": "0xA0"}, "1988": {"op": "SHL"}, "1989": {"op": "SUB"}, "1990": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3669, 3680], "op": "AND", "path": "6"}, "1991": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3669, 3680], "op": "SWAP2", "path": "6"}, "1992": {"op": "POP"}, "1993": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3704, 3719], "op": "PUSH2", "path": "6", "statement": 26, "value": "0x7D2"}, "1996": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3704, 3719], "op": "SWAP1", "path": "6"}, "1997": {"op": "POP"}, "1998": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3704, 3717], "op": "PUSH2", "path": "6", "value": "0x8BE"}, "2001": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3704, 3719], "op": "JUMP", "path": "6"}, "2002": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3704, 3719], "op": "JUMPDEST", "path": "6"}, "2003": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3691, 3701], "op": "PUSH1", "path": "6", "value": "0x1"}, "2005": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3691, 3719], "op": "DUP2", "path": "6"}, "2006": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3691, 3719], "op": "SWAP1", "path": "6"}, "2007": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3691, 3719], "op": "SSTORE", "path": "6"}, "2008": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3730, 3748], "op": "PUSH1", "path": "6", "value": "0x0"}, "2010": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3730, 3748], "op": "SWAP1", "path": "6"}, "2011": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3801], "op": "PUSH2", "path": "6", "value": "0x7EE"}, "2014": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3801], "op": "SWAP1", "path": "6"}, "2015": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3793, 3800], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2019": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3793, 3800], "op": "SWAP1", "path": "6"}, "2020": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3788], "op": "PUSH2", "path": "6", "value": "0x401"}, "2023": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3788], "op": "SWAP1", "path": "6"}, "2024": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3772], "op": "DUP7", "path": "6"}, "2025": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3772], "op": "SWAP1", "path": "6"}, "2026": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3776], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "2029": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3751, 3788], "op": "JUMP", "path": "6"}, "2030": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3751, 3801], "op": "JUMPDEST", "path": "6"}, "2031": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "statement": 27, "value": "0x40"}, "2033": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "MLOAD", "path": "6"}, "2034": {"op": "PUSH4", "value": "0xA9059CBB"}, "2039": {"op": "PUSH1", "value": "0xE0"}, "2041": {"op": "SHL"}, "2042": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP2", "path": "6"}, "2043": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "MSTORE", "path": "6"}, "2044": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3730, 3801], "op": "SWAP1", "path": "6"}, "2045": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3730, 3801], "op": "SWAP2", "path": "6"}, "2046": {"op": "POP"}, "2047": {"op": "PUSH1", "value": "0x1"}, "2049": {"op": "PUSH1", "value": "0x1"}, "2051": {"op": "PUSH1", "value": "0xA0"}, "2053": {"op": "SHL"}, "2054": {"op": "SUB"}, "2055": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3832], "op": "DUP4", "path": "6"}, "2056": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3832], "op": "AND", "path": "6"}, "2057": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3832], "op": "SWAP1", "path": "6"}, "2058": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3832], "op": "PUSH4", "path": "6", "value": "0xA9059CBB"}, "2063": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3832], "op": "SWAP1", "path": "6"}, "2064": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH2", "path": "6", "value": "0x81F"}, "2067": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "SWAP1", "path": "6"}, "2068": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3833, 3843], "op": "CALLER", "path": "6"}, "2069": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3833, 3843], "op": "SWAP1", "path": "6"}, "2070": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3730, 3801], "op": "DUP6", "path": "6"}, "2071": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3730, 3801], "op": "SWAP1", "path": "6"}, "2072": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x4"}, "2074": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ADD", "path": "6"}, "2075": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH2", "path": "6", "value": "0xCB8"}, "2078": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3819, 3856], "op": "JUMP", "path": "6"}, "2079": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "JUMPDEST", "path": "6"}, "2080": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x20"}, "2082": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x40"}, "2084": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "MLOAD", "path": "6"}, "2085": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2086": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP4", "path": "6"}, "2087": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "SUB", "path": "6"}, "2088": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP2", "path": "6"}, "2089": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x0"}, "2091": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP8", "path": "6"}, "2092": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2093": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "EXTCODESIZE", "path": "6"}, "2094": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ISZERO", "path": "6"}, "2095": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2096": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ISZERO", "path": "6"}, "2097": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH2", "path": "6", "value": "0x839"}, "2100": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "JUMPI", "path": "6"}, "2101": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x0"}, "2103": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2104": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "REVERT", "path": "6"}, "2105": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "JUMPDEST", "path": "6"}, "2106": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "POP", "path": "6"}, "2107": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "GAS", "path": "6"}, "2108": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "CALL", "path": "6"}, "2109": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ISZERO", "path": "6"}, "2110": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2111": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ISZERO", "path": "6"}, "2112": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH2", "path": "6", "value": "0x84D"}, "2115": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "JUMPI", "path": "6"}, "2116": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "RETURNDATASIZE", "path": "6"}, "2117": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x0"}, "2119": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2120": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "RETURNDATACOPY", "path": "6"}, "2121": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "RETURNDATASIZE", "path": "6"}, "2122": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x0"}, "2124": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "REVERT", "path": "6"}, "2125": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "JUMPDEST", "path": "6"}, "2126": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "POP", "path": "6"}, "2127": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "POP", "path": "6"}, "2128": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "POP", "path": "6"}, "2129": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "POP", "path": "6"}, "2130": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x40"}, "2132": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "MLOAD", "path": "6"}, "2133": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "RETURNDATASIZE", "path": "6"}, "2134": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x1F"}, "2136": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "NOT", "path": "6"}, "2137": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x1F"}, "2139": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP3", "path": "6"}, "2140": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ADD", "path": "6"}, "2141": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "AND", "path": "6"}, "2142": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP3", "path": "6"}, "2143": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ADD", "path": "6"}, "2144": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP1", "path": "6"}, "2145": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH1", "path": "6", "value": "0x40"}, "2147": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "MSTORE", "path": "6"}, "2148": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "POP", "path": "6"}, "2149": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "DUP2", "path": "6"}, "2150": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "ADD", "path": "6"}, "2151": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "SWAP1", "path": "6"}, "2152": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH2", "path": "6", "value": "0x871"}, "2155": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "SWAP2", "path": "6"}, "2156": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "SWAP1", "path": "6"}, "2157": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "PUSH2", "path": "6", "value": "0xBE1"}, "2160": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3819, 3856], "op": "JUMP", "path": "6"}, "2161": {"branch": 53, "fn": "LeveragedTrading.redeemBtcUp", "offset": [3819, 3856], "op": "JUMPDEST", "path": "6"}, "2162": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "PUSH2", "path": "6", "value": "0x88D"}, "2165": {"branch": 53, "fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "JUMPI", "path": "6"}, "2166": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "PUSH1", "path": "6", "value": "0x40"}, "2168": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "MLOAD", "path": "6"}, "2169": {"op": "PUSH3", "value": "0x461BCD"}, "2173": {"op": "PUSH1", "value": "0xE5"}, "2175": {"op": "SHL"}, "2176": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "DUP2", "path": "6"}, "2177": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "MSTORE", "path": "6"}, "2178": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "PUSH1", "path": "6", "value": "0x4"}, "2180": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "ADD", "path": "6"}, "2181": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "PUSH2", "path": "6", "value": "0x436"}, "2184": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "SWAP1", "path": "6"}, "2185": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "PUSH2", "path": "6", "value": "0xCDC"}, "2188": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3811, 3886], "op": "JUMP", "path": "6"}, "2189": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3811, 3886], "op": "JUMPDEST", "path": "6"}, "2190": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3911, 3922], "op": "PUSH1", "path": "6", "statement": 28, "value": "0x5"}, "2192": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3911, 3922], "op": "SLOAD", "path": "6"}, "2193": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3911, 3949], "op": "PUSH2", "path": "6", "value": "0x89A"}, "2196": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3911, 3949], "op": "SWAP1", "path": "6"}, "2197": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3927, 3948], "op": "DUP5", "path": "6"}, "2198": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3911, 3926], "op": "PUSH2", "path": "6", "value": "0xABD"}, "2201": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3911, 3949], "op": "JUMP", "path": "6"}, "2202": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3911, 3949], "op": "JUMPDEST", "path": "6"}, "2203": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3897, 3908], "op": "PUSH1", "path": "6", "value": "0x5"}, "2205": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3897, 3949], "op": "SSTORE", "path": "6"}, "2206": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3977, 3992], "op": "PUSH1", "path": "6", "statement": 29, "value": "0x3"}, "2208": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3977, 3992], "op": "SLOAD", "path": "6"}, "2209": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3977, 4008], "op": "PUSH2", "path": "6", "value": "0x8AA"}, "2212": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3977, 4008], "op": "SWAP1", "path": "6"}, "2213": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3997, 4007], "op": "DUP3", "path": "6"}, "2214": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3977, 3996], "op": "PUSH2", "path": "6", "value": "0xABD"}, "2217": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "i", "offset": [3977, 4008], "op": "JUMP", "path": "6"}, "2218": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3977, 4008], "op": "JUMPDEST", "path": "6"}, "2219": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3959, 3974], "op": "PUSH1", "path": "6", "value": "0x3"}, "2221": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [3959, 4008], "op": "SSTORE", "path": "6"}, "2222": {"op": "POP"}, "2223": {"op": "POP"}, "2224": {"op": "POP"}, "2225": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "o", "offset": [3499, 4015], "op": "JUMP", "path": "6"}, "2226": {"offset": [1473, 1507], "op": "JUMPDEST", "path": "6"}, "2227": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1473, 1507], "op": "PUSH1", "path": "6", "value": "0x3"}, "2229": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1473, 1507], "op": "SLOAD", "path": "6"}, "2230": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1473, 1507], "op": "DUP2", "path": "6"}, "2231": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "o", "offset": [1473, 1507], "op": "JUMP", "path": "6"}, "2232": {"offset": [1367, 1402], "op": "JUMPDEST", "path": "6"}, "2233": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1367, 1402], "op": "PUSH1", "path": "6", "value": "0x1"}, "2235": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1367, 1402], "op": "SLOAD", "path": "6"}, "2236": {"fn": "LeveragedTrading.redeemBtcUp", "offset": [1367, 1402], "op": "DUP2", "path": "6"}, "2237": {"fn": "LeveragedTrading.redeemBtcUp", "jump": "o", "offset": [1367, 1402], "op": "JUMP", "path": "6"}, "2238": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5862, 6019], "op": "JUMPDEST", "path": "6"}, "2239": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5908, 5915], "op": "PUSH1", "path": "6", "value": "0x0"}, "2241": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5934, 5945], "op": "PUSH1", "path": "6", "statement": 30, "value": "0x5"}, "2243": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5934, 5945], "op": "SLOAD", "path": "6"}, "2244": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5949, 5950], "op": "PUSH1", "path": "6", "value": "0x0"}, "2246": {"branch": 54, "fn": "LeveragedTrading.getBtcUpPrice", "offset": [5934, 5950], "op": "EQ", "path": "6"}, "2247": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5934, 6012], "op": "PUSH2", "path": "6", "value": "0x8E8"}, "2250": {"branch": 54, "fn": "LeveragedTrading.getBtcUpPrice", "offset": [5934, 6012], "op": "JUMPI", "path": "6"}, "2251": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 6012], "op": "PUSH2", "path": "6", "value": "0x407"}, "2254": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [6000, 6011], "op": "PUSH1", "path": "6", "value": "0x5"}, "2256": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [6000, 6011], "op": "SLOAD", "path": "6"}, "2257": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5995], "op": "PUSH2", "path": "6", "value": "0x401"}, "2260": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5987, 5994], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2264": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5982], "op": "PUSH1", "path": "6", "value": "0x3"}, "2266": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5982], "op": "SLOAD", "path": "6"}, "2267": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5986], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "2270": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5986], "op": "SWAP1", "path": "6"}, "2271": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5995], "op": "SWAP2", "path": "6"}, "2272": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5995], "op": "SWAP1", "path": "6"}, "2273": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5995], "op": "PUSH4", "path": "6", "value": "0xFFFFFFFF"}, "2278": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5967, 5995], "op": "AND", "path": "6"}, "2279": {"fn": "LeveragedTrading.getBtcUpPrice", "jump": "i", "offset": [5967, 5995], "op": "JUMP", "path": "6"}, "2280": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5934, 6012], "op": "JUMPDEST", "path": "6"}, "2281": {"op": "POP"}, "2282": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5954, 5964], "op": "PUSH1", "path": "6", "value": "0x1"}, "2284": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5954, 5964], "op": "SLOAD", "path": "6"}, "2285": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [5954, 5964], "op": "SWAP1", "path": "6"}, "2286": {"fn": "LeveragedTrading.getBtcUpPrice", "jump": "o", "offset": [5862, 6019], "op": "JUMP", "path": "6"}, "2287": {"offset": [1699, 1730], "op": "JUMPDEST", "path": "6"}, "2288": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [1699, 1730], "op": "PUSH1", "path": "6", "value": "0x7"}, "2290": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [1699, 1730], "op": "SLOAD", "path": "6"}, "2291": {"fn": "LeveragedTrading.getBtcUpPrice", "offset": [1699, 1730], "op": "DUP2", "path": "6"}, "2292": {"fn": "LeveragedTrading.getBtcUpPrice", "jump": "o", "offset": [1699, 1730], "op": "JUMP", "path": "6"}, "2293": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2394, 2930], "op": "JUMPDEST", "path": "6"}, "2294": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2462, 2488], "op": "PUSH2", "path": "6", "statement": 31, "value": "0x8FD"}, "2297": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2462, 2486], "op": "PUSH2", "path": "6", "value": "0x347"}, "2300": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2462, 2488], "op": "JUMP", "path": "6"}, "2301": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2462, 2488], "op": "JUMPDEST", "path": "6"}, "2302": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2503], "op": "PUSH1", "path": "6", "statement": 32, "value": "0xA"}, "2304": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2503], "op": "SLOAD", "path": "6"}, "2305": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x40"}, "2307": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "MLOAD", "path": "6"}, "2308": {"op": "PUSH4", "value": "0x140E25AD"}, "2313": {"op": "PUSH1", "value": "0xE3"}, "2315": {"op": "SHL"}, "2316": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP2", "path": "6"}, "2317": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "MSTORE", "path": "6"}, "2318": {"op": "PUSH1", "value": "0x1"}, "2320": {"op": "PUSH1", "value": "0x1"}, "2322": {"op": "PUSH1", "value": "0xA0"}, "2324": {"op": "SHL"}, "2325": {"op": "SUB"}, "2326": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2503], "op": "SWAP1", "path": "6"}, "2327": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2503], "op": "SWAP2", "path": "6"}, "2328": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2503], "op": "AND", "path": "6"}, "2329": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2503], "op": "SWAP1", "path": "6"}, "2330": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2508], "op": "PUSH4", "path": "6", "value": "0xA0712D68"}, "2335": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2508], "op": "SWAP1", "path": "6"}, "2336": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH2", "path": "6", "value": "0x92D"}, "2339": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "SWAP1", "path": "6"}, "2340": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2509, 2530], "op": "DUP5", "path": "6"}, "2341": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2509, 2530], "op": "SWAP1", "path": "6"}, "2342": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x4"}, "2344": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "ADD", "path": "6"}, "2345": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH2", "path": "6", "value": "0xD81"}, "2348": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2498, 2531], "op": "JUMP", "path": "6"}, "2349": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "JUMPDEST", "path": "6"}, "2350": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x0"}, "2352": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x40"}, "2354": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "MLOAD", "path": "6"}, "2355": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP1", "path": "6"}, "2356": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP4", "path": "6"}, "2357": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "SUB", "path": "6"}, "2358": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP2", "path": "6"}, "2359": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x0"}, "2361": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP8", "path": "6"}, "2362": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP1", "path": "6"}, "2363": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "EXTCODESIZE", "path": "6"}, "2364": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "ISZERO", "path": "6"}, "2365": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP1", "path": "6"}, "2366": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "ISZERO", "path": "6"}, "2367": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH2", "path": "6", "value": "0x947"}, "2370": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "JUMPI", "path": "6"}, "2371": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x0"}, "2373": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP1", "path": "6"}, "2374": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "REVERT", "path": "6"}, "2375": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "JUMPDEST", "path": "6"}, "2376": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "POP", "path": "6"}, "2377": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "GAS", "path": "6"}, "2378": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "CALL", "path": "6"}, "2379": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "ISZERO", "path": "6"}, "2380": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP1", "path": "6"}, "2381": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "ISZERO", "path": "6"}, "2382": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH2", "path": "6", "value": "0x95B"}, "2385": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "JUMPI", "path": "6"}, "2386": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "RETURNDATASIZE", "path": "6"}, "2387": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x0"}, "2389": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "DUP1", "path": "6"}, "2390": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "RETURNDATACOPY", "path": "6"}, "2391": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "RETURNDATASIZE", "path": "6"}, "2392": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "PUSH1", "path": "6", "value": "0x0"}, "2394": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "REVERT", "path": "6"}, "2395": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2498, 2531], "op": "JUMPDEST", "path": "6"}, "2396": {"op": "POP"}, "2397": {"op": "POP"}, "2398": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2563, 2574], "op": "PUSH1", "path": "6", "value": "0x8"}, "2400": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2563, 2574], "op": "SLOAD", "path": "6"}, "2401": {"op": "PUSH1", "value": "0x1"}, "2403": {"op": "PUSH1", "value": "0x1"}, "2405": {"op": "PUSH1", "value": "0xA0"}, "2407": {"op": "SHL"}, "2408": {"op": "SUB"}, "2409": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2563, 2574], "op": "AND", "path": "6"}, "2410": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2563, 2574], "op": "SWAP2", "path": "6"}, "2411": {"op": "POP"}, "2412": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2598, 2613], "op": "PUSH2", "path": "6", "statement": 33, "value": "0x975"}, "2415": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2598, 2613], "op": "SWAP1", "path": "6"}, "2416": {"op": "POP"}, "2417": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2598, 2611], "op": "PUSH2", "path": "6", "value": "0x8BE"}, "2420": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2598, 2613], "op": "JUMP", "path": "6"}, "2421": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2598, 2613], "op": "JUMPDEST", "path": "6"}, "2422": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2585, 2595], "op": "PUSH1", "path": "6", "value": "0x1"}, "2424": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2585, 2613], "op": "DUP2", "path": "6"}, "2425": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2585, 2613], "op": "SWAP1", "path": "6"}, "2426": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2585, 2613], "op": "SSTORE", "path": "6"}, "2427": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2624, 2642], "op": "PUSH1", "path": "6", "value": "0x0"}, "2429": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2624, 2642], "op": "SWAP1", "path": "6"}, "2430": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2695], "op": "PUSH2", "path": "6", "value": "0x991"}, "2433": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2695], "op": "SWAP1", "path": "6"}, "2434": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2687, 2694], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2438": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2687, 2694], "op": "SWAP1", "path": "6"}, "2439": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2682], "op": "PUSH2", "path": "6", "value": "0x401"}, "2442": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2682], "op": "SWAP1", "path": "6"}, "2443": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2666], "op": "DUP7", "path": "6"}, "2444": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2666], "op": "SWAP1", "path": "6"}, "2445": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2670], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "2448": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2645, 2682], "op": "JUMP", "path": "6"}, "2449": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2645, 2695], "op": "JUMPDEST", "path": "6"}, "2450": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "statement": 34, "value": "0x40"}, "2452": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "MLOAD", "path": "6"}, "2453": {"op": "PUSH4", "value": "0x23B872DD"}, "2458": {"op": "PUSH1", "value": "0xE0"}, "2460": {"op": "SHL"}, "2461": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP2", "path": "6"}, "2462": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "MSTORE", "path": "6"}, "2463": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2624, 2695], "op": "SWAP1", "path": "6"}, "2464": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2624, 2695], "op": "SWAP2", "path": "6"}, "2465": {"op": "POP"}, "2466": {"op": "PUSH1", "value": "0x1"}, "2468": {"op": "PUSH1", "value": "0x1"}, "2470": {"op": "PUSH1", "value": "0xA0"}, "2472": {"op": "SHL"}, "2473": {"op": "SUB"}, "2474": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2731], "op": "DUP4", "path": "6"}, "2475": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2731], "op": "AND", "path": "6"}, "2476": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2731], "op": "SWAP1", "path": "6"}, "2477": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2731], "op": "PUSH4", "path": "6", "value": "0x23B872DD"}, "2482": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2731], "op": "SWAP1", "path": "6"}, "2483": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH2", "path": "6", "value": "0x9C4"}, "2486": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "SWAP1", "path": "6"}, "2487": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2732, 2742], "op": "CALLER", "path": "6"}, "2488": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2732, 2742], "op": "SWAP1", "path": "6"}, "2489": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2752, 2756], "op": "ADDRESS", "path": "6"}, "2490": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2752, 2756], "op": "SWAP1", "path": "6"}, "2491": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2624, 2695], "op": "DUP7", "path": "6"}, "2492": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2624, 2695], "op": "SWAP1", "path": "6"}, "2493": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x4"}, "2495": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ADD", "path": "6"}, "2496": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH2", "path": "6", "value": "0xC94"}, "2499": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2714, 2770], "op": "JUMP", "path": "6"}, "2500": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "JUMPDEST", "path": "6"}, "2501": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x20"}, "2503": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x40"}, "2505": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "MLOAD", "path": "6"}, "2506": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2507": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP4", "path": "6"}, "2508": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "SUB", "path": "6"}, "2509": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP2", "path": "6"}, "2510": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x0"}, "2512": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP8", "path": "6"}, "2513": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2514": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "EXTCODESIZE", "path": "6"}, "2515": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ISZERO", "path": "6"}, "2516": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2517": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ISZERO", "path": "6"}, "2518": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH2", "path": "6", "value": "0x9DE"}, "2521": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "JUMPI", "path": "6"}, "2522": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x0"}, "2524": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2525": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "REVERT", "path": "6"}, "2526": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "JUMPDEST", "path": "6"}, "2527": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "POP", "path": "6"}, "2528": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "GAS", "path": "6"}, "2529": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "CALL", "path": "6"}, "2530": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ISZERO", "path": "6"}, "2531": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2532": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ISZERO", "path": "6"}, "2533": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH2", "path": "6", "value": "0x9F2"}, "2536": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "JUMPI", "path": "6"}, "2537": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "RETURNDATASIZE", "path": "6"}, "2538": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x0"}, "2540": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2541": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "RETURNDATACOPY", "path": "6"}, "2542": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "RETURNDATASIZE", "path": "6"}, "2543": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x0"}, "2545": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "REVERT", "path": "6"}, "2546": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "JUMPDEST", "path": "6"}, "2547": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "POP", "path": "6"}, "2548": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "POP", "path": "6"}, "2549": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "POP", "path": "6"}, "2550": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "POP", "path": "6"}, "2551": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x40"}, "2553": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "MLOAD", "path": "6"}, "2554": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "RETURNDATASIZE", "path": "6"}, "2555": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x1F"}, "2557": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "NOT", "path": "6"}, "2558": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x1F"}, "2560": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP3", "path": "6"}, "2561": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ADD", "path": "6"}, "2562": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "AND", "path": "6"}, "2563": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP3", "path": "6"}, "2564": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ADD", "path": "6"}, "2565": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP1", "path": "6"}, "2566": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH1", "path": "6", "value": "0x40"}, "2568": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "MSTORE", "path": "6"}, "2569": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "POP", "path": "6"}, "2570": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "DUP2", "path": "6"}, "2571": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "ADD", "path": "6"}, "2572": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "SWAP1", "path": "6"}, "2573": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH2", "path": "6", "value": "0xA16"}, "2576": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "SWAP2", "path": "6"}, "2577": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "SWAP1", "path": "6"}, "2578": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "PUSH2", "path": "6", "value": "0xBE1"}, "2581": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2714, 2770], "op": "JUMP", "path": "6"}, "2582": {"branch": 55, "fn": "LeveragedTrading.issueBtcUp", "offset": [2714, 2770], "op": "JUMPDEST", "path": "6"}, "2583": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "PUSH2", "path": "6", "value": "0xA32"}, "2586": {"branch": 55, "fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "JUMPI", "path": "6"}, "2587": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "PUSH1", "path": "6", "value": "0x40"}, "2589": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "MLOAD", "path": "6"}, "2590": {"op": "PUSH3", "value": "0x461BCD"}, "2594": {"op": "PUSH1", "value": "0xE5"}, "2596": {"op": "SHL"}, "2597": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "DUP2", "path": "6"}, "2598": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "MSTORE", "path": "6"}, "2599": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "PUSH1", "path": "6", "value": "0x4"}, "2601": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "ADD", "path": "6"}, "2602": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "PUSH2", "path": "6", "value": "0x436"}, "2605": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "SWAP1", "path": "6"}, "2606": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "PUSH2", "path": "6", "value": "0xD13"}, "2609": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2706, 2801], "op": "JUMP", "path": "6"}, "2610": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2706, 2801], "op": "JUMPDEST", "path": "6"}, "2611": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2826, 2837], "op": "PUSH1", "path": "6", "statement": 35, "value": "0x5"}, "2613": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2826, 2837], "op": "SLOAD", "path": "6"}, "2614": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2826, 2864], "op": "PUSH2", "path": "6", "value": "0xA3F"}, "2617": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2826, 2864], "op": "SWAP1", "path": "6"}, "2618": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2842, 2863], "op": "DUP5", "path": "6"}, "2619": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2826, 2841], "op": "PUSH2", "path": "6", "value": "0xAAA"}, "2622": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2826, 2864], "op": "JUMP", "path": "6"}, "2623": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2826, 2864], "op": "JUMPDEST", "path": "6"}, "2624": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2812, 2823], "op": "PUSH1", "path": "6", "value": "0x5"}, "2626": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2812, 2864], "op": "SSTORE", "path": "6"}, "2627": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2892, 2907], "op": "PUSH1", "path": "6", "statement": 36, "value": "0x3"}, "2629": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2892, 2907], "op": "SLOAD", "path": "6"}, "2630": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2892, 2923], "op": "PUSH2", "path": "6", "value": "0x8AA"}, "2633": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2892, 2923], "op": "SWAP1", "path": "6"}, "2634": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2912, 2922], "op": "DUP3", "path": "6"}, "2635": {"fn": "LeveragedTrading.issueBtcUp", "offset": [2892, 2911], "op": "PUSH2", "path": "6", "value": "0xAAA"}, "2638": {"fn": "LeveragedTrading.issueBtcUp", "jump": "i", "offset": [2892, 2923], "op": "JUMP", "path": "6"}, "2639": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5601, 5825], "op": "JUMPDEST", "path": "6"}, "2640": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5670, 5677], "op": "PUSH1", "path": "6", "value": "0x0"}, "2642": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5688, 5705], "op": "DUP1", "path": "6"}, "2643": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5708, 5730], "op": "PUSH2", "path": "6", "value": "0xA5B"}, "2646": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5721, 5729], "op": "DUP4", "path": "6"}, "2647": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5708, 5720], "op": "PUSH2", "path": "6", "value": "0xAE1"}, "2650": {"fn": "LeveragedTrading.getRebalanceAmount", "jump": "i", "offset": [5708, 5730], "op": "JUMP", "path": "6"}, "2651": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5708, 5730], "op": "JUMPDEST", "path": "6"}, "2652": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5688, 5730], "op": "SWAP1", "path": "6"}, "2653": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5688, 5730], "op": "POP", "path": "6"}, "2654": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5818], "op": "PUSH2", "path": "6", "statement": 37, "value": "0xA84"}, "2657": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5810, 5817], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2661": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5805], "op": "PUSH2", "path": "6", "value": "0x401"}, "2664": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5792, 5804], "op": "PUSH2", "path": "6", "value": "0xA70"}, "2667": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5794, 5803], "op": "DUP5", "path": "6"}, "2668": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5792, 5793], "op": "PUSH2", "path": "6", "value": "0xB40"}, "2671": {"fn": "LeveragedTrading.getRebalanceAmount", "jump": "i", "offset": [5792, 5804], "op": "JUMP", "path": "6"}, "2672": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5792, 5804], "op": "JUMPDEST", "path": "6"}, "2673": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5787], "op": "PUSH2", "path": "6", "value": "0xA7E"}, "2676": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5752, 5767], "op": "PUSH1", "path": "6", "value": "0x3"}, "2678": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5752, 5767], "op": "SLOAD", "path": "6"}, "2679": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5769, 5786], "op": "PUSH1", "path": "6", "value": "0x4"}, "2681": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5769, 5786], "op": "SLOAD", "path": "6"}, "2682": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5751], "op": "PUSH2", "path": "6", "value": "0xBB0"}, "2685": {"fn": "LeveragedTrading.getRebalanceAmount", "jump": "i", "offset": [5748, 5787], "op": "JUMP", "path": "6"}, "2686": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5787], "op": "JUMPDEST", "path": "6"}, "2687": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5791], "op": "SWAP1", "path": "6"}, "2688": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5791], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "2691": {"fn": "LeveragedTrading.getRebalanceAmount", "jump": "i", "offset": [5748, 5805], "op": "JUMP", "path": "6"}, "2692": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5748, 5818], "op": "JUMPDEST", "path": "6"}, "2693": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5741, 5818], "op": "SWAP2", "path": "6"}, "2694": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5741, 5818], "op": "POP", "path": "6"}, "2695": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5741, 5818], "op": "POP", "path": "6"}, "2696": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5601, 5825], "op": "JUMPDEST", "path": "6"}, "2697": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5601, 5825], "op": "SWAP2", "path": "6"}, "2698": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5601, 5825], "op": "SWAP1", "path": "6"}, "2699": {"fn": "LeveragedTrading.getRebalanceAmount", "offset": [5601, 5825], "op": "POP", "path": "6"}, "2700": {"fn": "LeveragedTrading.getRebalanceAmount", "jump": "o", "offset": [5601, 5825], "op": "JUMP", "path": "6"}, "2701": {"fn": "LeveragedTrading.getSign", "offset": [5402, 5593], "op": "JUMPDEST", "path": "6"}, "2702": {"fn": "LeveragedTrading.getSign", "offset": [5460, 5466], "op": "PUSH1", "path": "6", "value": "0x0"}, "2704": {"fn": "LeveragedTrading.getSign", "offset": [5492, 5504], "op": "PUSH1", "path": "6", "value": "0x7"}, "2706": {"fn": "LeveragedTrading.getSign", "offset": [5492, 5504], "op": "SLOAD", "path": "6"}, "2707": {"fn": "LeveragedTrading.getSign", "offset": [5481, 5489], "op": "DUP3", "path": "6"}, "2708": {"branch": 56, "fn": "LeveragedTrading.getSign", "offset": [5481, 5504], "op": "GT", "path": "6"}, "2709": {"fn": "LeveragedTrading.getSign", "offset": [5477, 5587], "op": "ISZERO", "path": "6"}, "2710": {"fn": "LeveragedTrading.getSign", "offset": [5477, 5587], "op": "PUSH2", "path": "6", "value": "0xAA1"}, "2713": {"branch": 56, "fn": "LeveragedTrading.getSign", "offset": [5477, 5587], "op": "JUMPI", "path": "6"}, "2714": {"op": "POP"}, "2715": {"fn": "LeveragedTrading.getSign", "offset": [5527, 5528], "op": "PUSH1", "path": "6", "statement": 38, "value": "0x1"}, "2717": {"fn": "LeveragedTrading.getSign", "offset": [5520, 5528], "op": "PUSH2", "path": "6", "value": "0xA88"}, "2720": {"fn": "LeveragedTrading.getSign", "offset": [5520, 5528], "op": "JUMP", "path": "6"}, "2721": {"fn": "LeveragedTrading.getSign", "offset": [5477, 5587], "op": "JUMPDEST", "path": "6"}, "2722": {"op": "POP"}, "2723": {"op": "PUSH1", "value": "0x0"}, "2725": {"op": "NOT"}, "2726": {"fn": "LeveragedTrading.getSign", "offset": [5567, 5576], "op": "PUSH2", "path": "6", "statement": 39, "value": "0xA88"}, "2729": {"fn": "LeveragedTrading.getSign", "offset": [5567, 5576], "op": "JUMP", "path": "6"}, "2730": {"fn": "SafeMath.add", "offset": [2672, 2768], "op": "JUMPDEST", "path": "4"}, "2731": {"fn": "SafeMath.add", "offset": [2730, 2737], "op": "PUSH1", "path": "4", "value": "0x0"}, "2733": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "4", "statement": 40, "value": "0xAB6"}, "2736": {"fn": "SafeMath.add", "offset": [2760, 2761], "op": "DUP3", "path": "4"}, "2737": {"fn": "SafeMath.add", "offset": [2756, 2757], "op": "DUP5", "path": "4"}, "2738": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "PUSH2", "path": "4", "value": "0xD8A"}, "2741": {"fn": "SafeMath.add", "jump": "i", "offset": [2756, 2761], "op": "JUMP", "path": "4"}, "2742": {"fn": "SafeMath.add", "offset": [2756, 2761], "op": "JUMPDEST", "path": "4"}, "2743": {"fn": "SafeMath.add", "offset": [2749, 2761], "op": "SWAP4", "path": "4"}, "2744": {"fn": "SafeMath.add", "offset": [2672, 2768], "op": "SWAP3", "path": "4"}, "2745": {"op": "POP"}, "2746": {"op": "POP"}, "2747": {"op": "POP"}, "2748": {"fn": "SafeMath.add", "jump": "o", "offset": [2672, 2768], "op": "JUMP", "path": "4"}, "2749": {"fn": "SafeMath.sub", "offset": [3039, 3135], "op": "JUMPDEST", "path": "4"}, "2750": {"fn": "SafeMath.sub", "offset": [3097, 3104], "op": "PUSH1", "path": "4", "value": "0x0"}, "2752": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "4", "statement": 41, "value": "0xAB6"}, "2755": {"fn": "SafeMath.sub", "offset": [3127, 3128], "op": "DUP3", "path": "4"}, "2756": {"fn": "SafeMath.sub", "offset": [3123, 3124], "op": "DUP5", "path": "4"}, "2757": {"fn": "SafeMath.sub", "offset": [3123, 3128], "op": "PUSH2", "path": "4", "value": "0xEF8"}, "2760": {"fn": "SafeMath.sub", "jump": "i", "offset": [3123, 3128], "op": "JUMP", "path": "4"}, "2761": {"fn": "SafeMath.mul", "offset": [3382, 3478], "op": "JUMPDEST", "path": "4"}, "2762": {"fn": "SafeMath.mul", "offset": [3440, 3447], "op": "PUSH1", "path": "4", "value": "0x0"}, "2764": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "4", "statement": 42, "value": "0xAB6"}, "2767": {"fn": "SafeMath.mul", "offset": [3470, 3471], "op": "DUP3", "path": "4"}, "2768": {"fn": "SafeMath.mul", "offset": [3466, 3467], "op": "DUP5", "path": "4"}, "2769": {"fn": "SafeMath.mul", "offset": [3466, 3471], "op": "PUSH2", "path": "4", "value": "0xED9"}, "2772": {"fn": "SafeMath.mul", "jump": "i", "offset": [3466, 3471], "op": "JUMP", "path": "4"}, "2773": {"fn": "SafeMath.div", "offset": [3767, 3863], "op": "JUMPDEST", "path": "4"}, "2774": {"fn": "SafeMath.div", "offset": [3825, 3832], "op": "PUSH1", "path": "4", "value": "0x0"}, "2776": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "4", "statement": 43, "value": "0xAB6"}, "2779": {"fn": "SafeMath.div", "offset": [3855, 3856], "op": "DUP3", "path": "4"}, "2780": {"fn": "SafeMath.div", "offset": [3851, 3852], "op": "DUP5", "path": "4"}, "2781": {"fn": "SafeMath.div", "offset": [3851, 3856], "op": "PUSH2", "path": "4", "value": "0xDA2"}, "2784": {"fn": "SafeMath.div", "jump": "i", "offset": [3851, 3856], "op": "JUMP", "path": "4"}, "2785": {"fn": "LeveragedTrading.getPriceDiff", "offset": [6963, 7281], "op": "JUMPDEST", "path": "6"}, "2786": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7026, 7033], "op": "PUSH1", "path": "6", "value": "0x0"}, "2788": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7077, 7089], "op": "PUSH1", "path": "6", "value": "0x7"}, "2790": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7077, 7089], "op": "SLOAD", "path": "6"}, "2791": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7066, 7074], "op": "DUP3", "path": "6"}, "2792": {"branch": 57, "fn": "LeveragedTrading.getPriceDiff", "offset": [7066, 7089], "op": "GT", "path": "6"}, "2793": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7062, 7274], "op": "ISZERO", "path": "6"}, "2794": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7062, 7274], "op": "PUSH2", "path": "6", "value": "0xB1D"}, "2797": {"branch": 57, "fn": "LeveragedTrading.getPriceDiff", "offset": [7062, 7274], "op": "JUMPI", "path": "6"}, "2798": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7164], "op": "PUSH2", "path": "6", "statement": 44, "value": "0xB16"}, "2801": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7156, 7163], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2805": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7151], "op": "PUSH2", "path": "6", "value": "0xB10"}, "2808": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7138, 7150], "op": "PUSH1", "path": "6", "value": "0x7"}, "2810": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7138, 7150], "op": "SLOAD", "path": "6"}, "2811": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7133], "op": "PUSH2", "path": "6", "value": "0x401"}, "2814": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7125, 7132], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2818": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7120], "op": "DUP8", "path": "6"}, "2819": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7124], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "2822": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7124], "op": "SWAP1", "path": "6"}, "2823": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7133], "op": "SWAP2", "path": "6"}, "2824": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7133], "op": "SWAP1", "path": "6"}, "2825": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7133], "op": "PUSH4", "path": "6", "value": "0xFFFFFFFF"}, "2830": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7133], "op": "AND", "path": "6"}, "2831": {"fn": "LeveragedTrading.getPriceDiff", "jump": "i", "offset": [7112, 7133], "op": "JUMP", "path": "6"}, "2832": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7151], "op": "JUMPDEST", "path": "6"}, "2833": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7155], "op": "SWAP1", "path": "6"}, "2834": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7155], "op": "PUSH2", "path": "6", "value": "0xABD"}, "2837": {"fn": "LeveragedTrading.getPriceDiff", "jump": "i", "offset": [7112, 7164], "op": "JUMP", "path": "6"}, "2838": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7112, 7164], "op": "JUMPDEST", "path": "6"}, "2839": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7105, 7164], "op": "SWAP1", "path": "6"}, "2840": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7105, 7164], "op": "POP", "path": "6"}, "2841": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7105, 7164], "op": "PUSH2", "path": "6", "value": "0xA88"}, "2844": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7105, 7164], "op": "JUMP", "path": "6"}, "2845": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7062, 7274], "op": "JUMPDEST", "path": "6"}, "2846": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7263], "op": "PUSH2", "path": "6", "statement": 45, "value": "0xB16"}, "2849": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7255, 7262], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2853": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7250], "op": "PUSH2", "path": "6", "value": "0xB10"}, "2856": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7241, 7249], "op": "DUP5", "path": "6"}, "2857": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7236], "op": "PUSH2", "path": "6", "value": "0x401"}, "2860": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7228, 7235], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2864": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7223], "op": "PUSH1", "path": "6", "value": "0x7"}, "2866": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7223], "op": "SLOAD", "path": "6"}, "2867": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7227], "op": "PUSH2", "path": "6", "value": "0xAC9"}, "2870": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7227], "op": "SWAP1", "path": "6"}, "2871": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7236], "op": "SWAP2", "path": "6"}, "2872": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7236], "op": "SWAP1", "path": "6"}, "2873": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7236], "op": "PUSH4", "path": "6", "value": "0xFFFFFFFF"}, "2878": {"fn": "LeveragedTrading.getPriceDiff", "offset": [7211, 7236], "op": "AND", "path": "6"}, "2879": {"fn": "LeveragedTrading.getPriceDiff", "jump": "i", "offset": [7211, 7236], "op": "JUMP", "path": "6"}, "2880": {"fn": "LeveragedTrading.L", "offset": [6730, 6955], "op": "JUMPDEST", "path": "6"}, "2881": {"fn": "LeveragedTrading.L", "offset": [6775, 6782], "op": "PUSH1", "path": "6", "value": "0x0"}, "2883": {"fn": "LeveragedTrading.L", "offset": [6775, 6782], "op": "DUP1", "path": "6"}, "2884": {"fn": "LeveragedTrading.L", "offset": [6862, 6867], "op": "PUSH2", "path": "6", "value": "0xB4E"}, "2887": {"fn": "LeveragedTrading.L", "offset": [6866, 6867], "op": "DUP4", "path": "6"}, "2888": {"fn": "LeveragedTrading.L", "offset": [6862, 6863], "op": "PUSH1", "path": "6", "value": "0x3"}, "2890": {"fn": "LeveragedTrading.L", "offset": [6862, 6867], "op": "PUSH2", "path": "6", "value": "0xED9"}, "2893": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6862, 6867], "op": "JUMP", "path": "6"}, "2894": {"fn": "LeveragedTrading.L", "offset": [6862, 6867], "op": "JUMPDEST", "path": "6"}, "2895": {"fn": "LeveragedTrading.L", "offset": [6850, 6857], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2899": {"fn": "LeveragedTrading.L", "offset": [6841, 6847], "op": "PUSH2", "path": "6", "value": "0xB5D"}, "2902": {"fn": "LeveragedTrading.L", "offset": [6846, 6847], "op": "PUSH1", "path": "6", "value": "0x2"}, "2904": {"fn": "LeveragedTrading.L", "offset": [6841, 6842], "op": "DUP7", "path": "6"}, "2905": {"fn": "LeveragedTrading.L", "offset": [6841, 6847], "op": "PUSH2", "path": "6", "value": "0xE08"}, "2908": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6841, 6847], "op": "JUMP", "path": "6"}, "2909": {"fn": "LeveragedTrading.L", "offset": [6841, 6847], "op": "JUMPDEST", "path": "6"}, "2910": {"fn": "LeveragedTrading.L", "offset": [6841, 6857], "op": "PUSH2", "path": "6", "value": "0xB67"}, "2913": {"fn": "LeveragedTrading.L", "offset": [6841, 6857], "op": "SWAP2", "path": "6"}, "2914": {"fn": "LeveragedTrading.L", "offset": [6841, 6857], "op": "SWAP1", "path": "6"}, "2915": {"fn": "LeveragedTrading.L", "offset": [6841, 6857], "op": "PUSH2", "path": "6", "value": "0xDA2"}, "2918": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6841, 6857], "op": "JUMP", "path": "6"}, "2919": {"fn": "LeveragedTrading.L", "offset": [6841, 6857], "op": "JUMPDEST", "path": "6"}, "2920": {"fn": "LeveragedTrading.L", "offset": [6836, 6858], "op": "PUSH2", "path": "6", "value": "0xB72"}, "2923": {"fn": "LeveragedTrading.L", "offset": [6836, 6858], "op": "SWAP1", "path": "6"}, "2924": {"fn": "LeveragedTrading.L", "offset": [6836, 6837], "op": "PUSH1", "path": "6", "value": "0x9"}, "2926": {"fn": "LeveragedTrading.L", "offset": [6836, 6858], "op": "PUSH2", "path": "6", "value": "0xED9"}, "2929": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6836, 6858], "op": "JUMP", "path": "6"}, "2930": {"fn": "LeveragedTrading.L", "offset": [6836, 6858], "op": "JUMPDEST", "path": "6"}, "2931": {"fn": "LeveragedTrading.L", "offset": [6836, 6867], "op": "PUSH2", "path": "6", "value": "0xB7C"}, "2934": {"fn": "LeveragedTrading.L", "offset": [6836, 6867], "op": "SWAP2", "path": "6"}, "2935": {"fn": "LeveragedTrading.L", "offset": [6836, 6867], "op": "SWAP1", "path": "6"}, "2936": {"fn": "LeveragedTrading.L", "offset": [6836, 6867], "op": "PUSH2", "path": "6", "value": "0xD8A"}, "2939": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6836, 6867], "op": "JUMP", "path": "6"}, "2940": {"fn": "LeveragedTrading.L", "offset": [6836, 6867], "op": "JUMPDEST", "path": "6"}, "2941": {"fn": "LeveragedTrading.L", "offset": [6836, 6877], "op": "PUSH2", "path": "6", "value": "0xB89"}, "2944": {"fn": "LeveragedTrading.L", "offset": [6836, 6877], "op": "SWAP1", "path": "6"}, "2945": {"fn": "LeveragedTrading.L", "offset": [6870, 6877], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2949": {"fn": "LeveragedTrading.L", "offset": [6836, 6877], "op": "PUSH2", "path": "6", "value": "0xD8A"}, "2952": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6836, 6877], "op": "JUMP", "path": "6"}, "2953": {"fn": "LeveragedTrading.L", "offset": [6836, 6877], "op": "JUMPDEST", "path": "6"}, "2954": {"fn": "LeveragedTrading.L", "offset": [6820, 6877], "op": "SWAP1", "path": "6"}, "2955": {"op": "POP"}, "2956": {"fn": "LeveragedTrading.L", "offset": [6901, 6909], "op": "PUSH5", "path": "6", "value": "0xE8D4A51000"}, "2962": {"fn": "LeveragedTrading.L", "offset": [6937, 6948], "op": "PUSH2", "path": "6", "statement": 46, "value": "0xB9B"}, "2965": {"fn": "LeveragedTrading.L", "offset": [6820, 6877], "op": "DUP3", "path": "6"}, "2966": {"fn": "LeveragedTrading.L", "offset": [6901, 6909], "op": "DUP3", "path": "6"}, "2967": {"fn": "LeveragedTrading.L", "offset": [6937, 6948], "op": "PUSH2", "path": "6", "value": "0xDA2"}, "2970": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6937, 6948], "op": "JUMP", "path": "6"}, "2971": {"fn": "LeveragedTrading.L", "offset": [6937, 6948], "op": "JUMPDEST", "path": "6"}, "2972": {"fn": "LeveragedTrading.L", "offset": [6927, 6948], "op": "PUSH2", "path": "6", "value": "0xBA8"}, "2975": {"fn": "LeveragedTrading.L", "offset": [6927, 6948], "op": "SWAP1", "path": "6"}, "2976": {"fn": "LeveragedTrading.L", "offset": [6927, 6934], "op": "PUSH3", "path": "6", "value": "0xF4240"}, "2980": {"fn": "LeveragedTrading.L", "offset": [6927, 6948], "op": "PUSH2", "path": "6", "value": "0xEF8"}, "2983": {"fn": "LeveragedTrading.L", "jump": "i", "offset": [6927, 6948], "op": "JUMP", "path": "6"}, "2984": {"fn": "LeveragedTrading.L", "offset": [6927, 6948], "op": "JUMPDEST", "path": "6"}, "2985": {"fn": "LeveragedTrading.L", "offset": [6920, 6948], "op": "SWAP5", "path": "6"}, "2986": {"fn": "LeveragedTrading.L", "offset": [6730, 6955], "op": "SWAP4", "path": "6"}, "2987": {"op": "POP"}, "2988": {"op": "POP"}, "2989": {"op": "POP"}, "2990": {"op": "POP"}, "2991": {"fn": "LeveragedTrading.L", "jump": "o", "offset": [6730, 6955], "op": "JUMP", "path": "6"}, "2992": {"fn": "LeveragedTrading.min", "offset": [6618, 6723], "op": "JUMPDEST", "path": "6"}, "2993": {"fn": "LeveragedTrading.min", "offset": [6676, 6683], "op": "PUSH1", "path": "6", "value": "0x0"}, "2995": {"fn": "LeveragedTrading.min", "offset": [6707, 6708], "op": "DUP2", "path": "6", "statement": 47}, "2996": {"fn": "LeveragedTrading.min", "offset": [6702, 6703], "op": "DUP4", "path": "6"}, "2997": {"fn": "LeveragedTrading.min", "offset": [6702, 6708], "op": "GT", "path": "6"}, "2998": {"branch": 58, "fn": "LeveragedTrading.min", "offset": [6702, 6708], "op": "ISZERO", "path": "6"}, "2999": {"fn": "LeveragedTrading.min", "offset": [6702, 6716], "op": "PUSH2", "path": "6", "value": "0xBC0"}, "3002": {"branch": 58, "fn": "LeveragedTrading.min", "offset": [6702, 6716], "op": "JUMPI", "path": "6"}, "3003": {"fn": "LeveragedTrading.min", "offset": [6715, 6716], "op": "DUP2", "path": "6"}, "3004": {"fn": "LeveragedTrading.min", "offset": [6702, 6716], "op": "PUSH2", "path": "6", "value": "0xAB6"}, "3007": {"fn": "LeveragedTrading.min", "offset": [6702, 6716], "op": "JUMP", "path": "6"}, "3008": {"fn": "LeveragedTrading.min", "offset": [6702, 6716], "op": "JUMPDEST", "path": "6"}, "3009": {"op": "POP"}, "3010": {"fn": "LeveragedTrading.min", "offset": [6711, 6712], "op": "SWAP1", "path": "6"}, "3011": {"fn": "LeveragedTrading.min", "offset": [6711, 6712], "op": "SWAP2", "path": "6"}, "3012": {"fn": "LeveragedTrading.min", "offset": [6618, 6723], "op": "SWAP1", "path": "6"}, "3013": {"op": "POP"}, "3014": {"fn": "LeveragedTrading.min", "jump": "o", "offset": [6618, 6723], "op": "JUMP", "path": "6"}, "3015": {"op": "JUMPDEST"}, "3016": {"op": "DUP1"}, "3017": {"op": "MLOAD"}, "3018": {"op": "PUSH10", "value": "0xFFFFFFFFFFFFFFFFFFFF"}, "3029": {"op": "DUP2"}, "3030": {"op": "AND"}, "3031": {"op": "DUP2"}, "3032": {"op": "EQ"}, "3033": {"op": "PUSH2", "value": "0xA88"}, "3036": {"op": "JUMPI"}, "3037": {"op": "PUSH1", "value": "0x0"}, "3039": {"op": "DUP1"}, "3040": {"op": "REVERT"}, "3041": {"op": "JUMPDEST"}, "3042": {"op": "PUSH1", "value": "0x0"}, "3044": {"op": "PUSH1", "value": "0x20"}, "3046": {"op": "DUP3"}, "3047": {"op": "DUP5"}, "3048": {"op": "SUB"}, "3049": {"op": "SLT"}, "3050": {"op": "ISZERO"}, "3051": {"op": "PUSH2", "value": "0xBF2"}, "3054": {"op": "JUMPI"}, "3055": {"op": "DUP1"}, "3056": {"op": "DUP2"}, "3057": {"op": "REVERT"}, "3058": {"op": "JUMPDEST"}, "3059": {"op": "DUP2"}, "3060": {"op": "MLOAD"}, "3061": {"op": "DUP1"}, "3062": {"op": "ISZERO"}, "3063": {"op": "ISZERO"}, "3064": {"op": "DUP2"}, "3065": {"op": "EQ"}, "3066": {"op": "PUSH2", "value": "0xAB6"}, "3069": {"op": "JUMPI"}, "3070": {"op": "DUP2"}, "3071": {"op": "DUP3"}, "3072": {"op": "REVERT"}, "3073": {"op": "JUMPDEST"}, "3074": {"op": "PUSH1", "value": "0x0"}, "3076": {"op": "PUSH1", "value": "0x20"}, "3078": {"op": "DUP3"}, "3079": {"op": "DUP5"}, "3080": {"op": "SUB"}, "3081": {"op": "SLT"}, "3082": {"op": "ISZERO"}, "3083": {"op": "PUSH2", "value": "0xC12"}, "3086": {"op": "JUMPI"}, "3087": {"op": "DUP1"}, "3088": {"op": "DUP2"}, "3089": {"op": "REVERT"}, "3090": {"op": "JUMPDEST"}, "3091": {"op": "POP"}, "3092": {"op": "CALLDATALOAD"}, "3093": {"op": "SWAP2"}, "3094": {"op": "SWAP1"}, "3095": {"op": "POP"}, "3096": {"jump": "o", "op": "JUMP"}, "3097": {"op": "JUMPDEST"}, "3098": {"op": "PUSH1", "value": "0x0"}, "3100": {"op": "PUSH1", "value": "0x20"}, "3102": {"op": "DUP3"}, "3103": {"op": "DUP5"}, "3104": {"op": "SUB"}, "3105": {"op": "SLT"}, "3106": {"op": "ISZERO"}, "3107": {"op": "PUSH2", "value": "0xC2A"}, "3110": {"op": "JUMPI"}, "3111": {"op": "DUP1"}, "3112": {"op": "DUP2"}, "3113": {"op": "REVERT"}, "3114": {"op": "JUMPDEST"}, "3115": {"op": "POP"}, "3116": {"op": "MLOAD"}, "3117": {"op": "SWAP2"}, "3118": {"op": "SWAP1"}, "3119": {"op": "POP"}, "3120": {"jump": "o", "op": "JUMP"}, "3121": {"op": "JUMPDEST"}, "3122": {"op": "PUSH1", "value": "0x0"}, "3124": {"op": "DUP1"}, "3125": {"op": "PUSH1", "value": "0x0"}, "3127": {"op": "DUP1"}, "3128": {"op": "PUSH1", "value": "0x0"}, "3130": {"op": "PUSH1", "value": "0xA0"}, "3132": {"op": "DUP7"}, "3133": {"op": "DUP9"}, "3134": {"op": "SUB"}, "3135": {"op": "SLT"}, "3136": {"op": "ISZERO"}, "3137": {"op": "PUSH2", "value": "0xC48"}, "3140": {"op": "JUMPI"}, "3141": {"op": "DUP1"}, "3142": {"op": "DUP2"}, "3143": {"op": "REVERT"}, "3144": {"op": "JUMPDEST"}, "3145": {"op": "PUSH2", "value": "0xC51"}, "3148": {"op": "DUP7"}, "3149": {"op": "PUSH2", "value": "0xBC7"}, "3152": {"jump": "i", "op": "JUMP"}, "3153": {"op": "JUMPDEST"}, "3154": {"op": "SWAP5"}, "3155": {"op": "POP"}, "3156": {"op": "PUSH1", "value": "0x20"}, "3158": {"op": "DUP7"}, "3159": {"op": "ADD"}, "3160": {"op": "MLOAD"}, "3161": {"op": "SWAP4"}, "3162": {"op": "POP"}, "3163": {"op": "PUSH1", "value": "0x40"}, "3165": {"op": "DUP7"}, "3166": {"op": "ADD"}, "3167": {"op": "MLOAD"}, "3168": {"op": "SWAP3"}, "3169": {"op": "POP"}, "3170": {"op": "PUSH1", "value": "0x60"}, "3172": {"op": "DUP7"}, "3173": {"op": "ADD"}, "3174": {"op": "MLOAD"}, "3175": {"op": "SWAP2"}, "3176": {"op": "POP"}, "3177": {"op": "PUSH2", "value": "0xC74"}, "3180": {"op": "PUSH1", "value": "0x80"}, "3182": {"op": "DUP8"}, "3183": {"op": "ADD"}, "3184": {"op": "PUSH2", "value": "0xBC7"}, "3187": {"jump": "i", "op": "JUMP"}, "3188": {"op": "JUMPDEST"}, "3189": {"op": "SWAP1"}, "3190": {"op": "POP"}, "3191": {"op": "SWAP3"}, "3192": {"op": "SWAP6"}, "3193": {"op": "POP"}, "3194": {"op": "SWAP3"}, "3195": {"op": "SWAP6"}, "3196": {"op": "SWAP1"}, "3197": {"op": "SWAP4"}, "3198": {"op": "POP"}, "3199": {"jump": "o", "op": "JUMP"}, "3200": {"op": "JUMPDEST"}, "3201": {"op": "PUSH1", "value": "0x1"}, "3203": {"op": "PUSH1", "value": "0x1"}, "3205": {"op": "PUSH1", "value": "0xA0"}, "3207": {"op": "SHL"}, "3208": {"op": "SUB"}, "3209": {"op": "SWAP2"}, "3210": {"op": "SWAP1"}, "3211": {"op": "SWAP2"}, "3212": {"op": "AND"}, "3213": {"op": "DUP2"}, "3214": {"op": "MSTORE"}, "3215": {"op": "PUSH1", "value": "0x20"}, "3217": {"op": "ADD"}, "3218": {"op": "SWAP1"}, "3219": {"jump": "o", "op": "JUMP"}, "3220": {"op": "JUMPDEST"}, "3221": {"op": "PUSH1", "value": "0x1"}, "3223": {"op": "PUSH1", "value": "0x1"}, "3225": {"op": "PUSH1", "value": "0xA0"}, "3227": {"op": "SHL"}, "3228": {"op": "SUB"}, "3229": {"op": "SWAP4"}, "3230": {"op": "DUP5"}, "3231": {"op": "AND"}, "3232": {"op": "DUP2"}, "3233": {"op": "MSTORE"}, "3234": {"op": "SWAP2"}, "3235": {"op": "SWAP1"}, "3236": {"op": "SWAP3"}, "3237": {"op": "AND"}, "3238": {"op": "PUSH1", "value": "0x20"}, "3240": {"op": "DUP3"}, "3241": {"op": "ADD"}, "3242": {"op": "MSTORE"}, "3243": {"op": "PUSH1", "value": "0x40"}, "3245": {"op": "DUP2"}, "3246": {"op": "ADD"}, "3247": {"op": "SWAP2"}, "3248": {"op": "SWAP1"}, "3249": {"op": "SWAP2"}, "3250": {"op": "MSTORE"}, "3251": {"op": "PUSH1", "value": "0x60"}, "3253": {"op": "ADD"}, "3254": {"op": "SWAP1"}, "3255": {"jump": "o", "op": "JUMP"}, "3256": {"op": "JUMPDEST"}, "3257": {"op": "PUSH1", "value": "0x1"}, "3259": {"op": "PUSH1", "value": "0x1"}, "3261": {"op": "PUSH1", "value": "0xA0"}, "3263": {"op": "SHL"}, "3264": {"op": "SUB"}, "3265": {"op": "SWAP3"}, "3266": {"op": "SWAP1"}, "3267": {"op": "SWAP3"}, "3268": {"op": "AND"}, "3269": {"op": "DUP3"}, "3270": {"op": "MSTORE"}, "3271": {"op": "PUSH1", "value": "0x20"}, "3273": {"op": "DUP3"}, "3274": {"op": "ADD"}, "3275": {"op": "MSTORE"}, "3276": {"op": "PUSH1", "value": "0x40"}, "3278": {"op": "ADD"}, "3279": {"op": "SWAP1"}, "3280": {"jump": "o", "op": "JUMP"}, "3281": {"op": "JUMPDEST"}, "3282": {"op": "SWAP1"}, "3283": {"op": "ISZERO"}, "3284": {"op": "ISZERO"}, "3285": {"op": "DUP2"}, "3286": {"op": "MSTORE"}, "3287": {"op": "PUSH1", "value": "0x20"}, "3289": {"op": "ADD"}, "3290": {"op": "SWAP1"}, "3291": {"jump": "o", "op": "JUMP"}, "3292": {"op": "JUMPDEST"}, "3293": {"op": "PUSH1", "value": "0x20"}, "3295": {"op": "DUP1"}, "3296": {"op": "DUP3"}, "3297": {"op": "MSTORE"}, "3298": {"op": "PUSH1", "value": "0x19"}, "3300": {"op": "SWAP1"}, "3301": {"op": "DUP3"}, "3302": {"op": "ADD"}, "3303": {"op": "MSTORE"}, "3304": {"op": "PUSH32", "value": "0x4E6F7420656E6F756768207573646320617661696C61626C6500000000000000"}, "3337": {"op": "PUSH1", "value": "0x40"}, "3339": {"op": "DUP3"}, "3340": {"op": "ADD"}, "3341": {"op": "MSTORE"}, "3342": {"op": "PUSH1", "value": "0x60"}, "3344": {"op": "ADD"}, "3345": {"op": "SWAP1"}, "3346": {"jump": "o", "op": "JUMP"}, "3347": {"op": "JUMPDEST"}, "3348": {"op": "PUSH1", "value": "0x20"}, "3350": {"op": "DUP1"}, "3351": {"op": "DUP3"}, "3352": {"op": "MSTORE"}, "3353": {"op": "PUSH1", "value": "0x1A"}, "3355": {"op": "SWAP1"}, "3356": {"op": "DUP3"}, "3357": {"op": "ADD"}, "3358": {"op": "MSTORE"}, "3359": {"op": "PUSH32", "value": "0x596F7520646F6E2774206861766520656E6F7567682055534443000000000000"}, "3392": {"op": "PUSH1", "value": "0x40"}, "3394": {"op": "DUP3"}, "3395": {"op": "ADD"}, "3396": {"op": "MSTORE"}, "3397": {"op": "PUSH1", "value": "0x60"}, "3399": {"op": "ADD"}, "3400": {"op": "SWAP1"}, "3401": {"jump": "o", "op": "JUMP"}, "3402": {"op": "JUMPDEST"}, "3403": {"op": "PUSH1", "value": "0x20"}, "3405": {"op": "DUP1"}, "3406": {"op": "DUP3"}, "3407": {"op": "MSTORE"}, "3408": {"op": "PUSH1", "value": "0x1F"}, "3410": {"op": "SWAP1"}, "3411": {"op": "DUP3"}, "3412": {"op": "ADD"}, "3413": {"op": "MSTORE"}, "3414": {"op": "PUSH32", "value": "0x54686520706F6F6C2077617320616C726561647920696E697469617465642E00"}, "3447": {"op": "PUSH1", "value": "0x40"}, "3449": {"op": "DUP3"}, "3450": {"op": "ADD"}, "3451": {"op": "MSTORE"}, "3452": {"op": "PUSH1", "value": "0x60"}, "3454": {"op": "ADD"}, "3455": {"op": "SWAP1"}, "3456": {"jump": "o", "op": "JUMP"}, "3457": {"op": "JUMPDEST"}, "3458": {"op": "SWAP1"}, "3459": {"op": "DUP2"}, "3460": {"op": "MSTORE"}, "3461": {"op": "PUSH1", "value": "0x20"}, "3463": {"op": "ADD"}, "3464": {"op": "SWAP1"}, "3465": {"jump": "o", "op": "JUMP"}, "3466": {"op": "JUMPDEST"}, "3467": {"op": "PUSH1", "value": "0x0"}, "3469": {"op": "DUP3"}, "3470": {"op": "NOT"}, "3471": {"op": "DUP3"}, "3472": {"op": "GT"}, "3473": {"op": "ISZERO"}, "3474": {"op": "PUSH2", "value": "0xD9D"}, "3477": {"op": "JUMPI"}, "3478": {"op": "PUSH2", "value": "0xD9D"}, "3481": {"op": "PUSH2", "value": "0xF0F"}, "3484": {"jump": "i", "op": "JUMP"}, "3485": {"op": "JUMPDEST"}, "3486": {"op": "POP"}, "3487": {"op": "ADD"}, "3488": {"op": "SWAP1"}, "3489": {"jump": "o", "op": "JUMP"}, "3490": {"op": "JUMPDEST"}, "3491": {"op": "PUSH1", "value": "0x0"}, "3493": {"op": "DUP3"}, "3494": {"op": "PUSH2", "value": "0xDBD"}, "3497": {"op": "JUMPI"}, "3498": {"op": "PUSH4", "value": "0x4E487B71"}, "3503": {"op": "PUSH1", "value": "0xE0"}, "3505": {"op": "SHL"}, "3506": {"op": "DUP2"}, "3507": {"op": "MSTORE"}, "3508": {"op": "PUSH1", "value": "0x12"}, "3510": {"op": "PUSH1", "value": "0x4"}, "3512": {"op": "MSTORE"}, "3513": {"op": "PUSH1", "value": "0x24"}, "3515": {"op": "DUP2"}, "3516": {"op": "REVERT"}, "3517": {"op": "JUMPDEST"}, "3518": {"op": "POP"}, "3519": {"op": "DIV"}, "3520": {"op": "SWAP1"}, "3521": {"jump": "o", "op": "JUMP"}, "3522": {"op": "JUMPDEST"}, "3523": {"op": "DUP1"}, "3524": {"op": "DUP3"}, "3525": {"op": "JUMPDEST"}, "3526": {"op": "PUSH1", "value": "0x1"}, "3528": {"op": "DUP1"}, "3529": {"op": "DUP7"}, "3530": {"op": "GT"}, "3531": {"op": "PUSH2", "value": "0xDD4"}, "3534": {"op": "JUMPI"}, "3535": {"op": "POP"}, "3536": {"op": "PUSH2", "value": "0xDFF"}, "3539": {"op": "JUMP"}, "3540": {"op": "JUMPDEST"}, "3541": {"op": "DUP2"}, "3542": {"op": "DUP8"}, "3543": {"op": "DIV"}, "3544": {"op": "DUP3"}, "3545": {"op": "GT"}, "3546": {"op": "ISZERO"}, "3547": {"op": "PUSH2", "value": "0xDE6"}, "3550": {"op": "JUMPI"}, "3551": {"op": "PUSH2", "value": "0xDE6"}, "3554": {"op": "PUSH2", "value": "0xF0F"}, "3557": {"jump": "i", "op": "JUMP"}, "3558": {"op": "JUMPDEST"}, "3559": {"op": "DUP1"}, "3560": {"op": "DUP7"}, "3561": {"op": "AND"}, "3562": {"op": "ISZERO"}, "3563": {"op": "PUSH2", "value": "0xDF3"}, "3566": {"op": "JUMPI"}, "3567": {"op": "SWAP2"}, "3568": {"op": "DUP2"}, "3569": {"op": "MUL"}, "3570": {"op": "SWAP2"}, "3571": {"op": "JUMPDEST"}, "3572": {"op": "SWAP5"}, "3573": {"op": "SWAP1"}, "3574": {"op": "SWAP5"}, "3575": {"op": "SHR"}, "3576": {"op": "SWAP4"}, "3577": {"op": "DUP1"}, "3578": {"op": "MUL"}, "3579": {"op": "PUSH2", "value": "0xDC5"}, "3582": {"op": "JUMP"}, "3583": {"op": "JUMPDEST"}, "3584": {"op": "SWAP5"}, "3585": {"op": "POP"}, "3586": {"op": "SWAP5"}, "3587": {"op": "SWAP3"}, "3588": {"op": "POP"}, "3589": {"op": "POP"}, "3590": {"op": "POP"}, "3591": {"jump": "o", "op": "JUMP"}, "3592": {"op": "JUMPDEST"}, "3593": {"op": "PUSH1", "value": "0x0"}, "3595": {"op": "PUSH2", "value": "0xAB6"}, "3598": {"op": "PUSH1", "value": "0x0"}, "3600": {"op": "NOT"}, "3601": {"op": "PUSH1", "value": "0xFF"}, "3603": {"op": "DUP6"}, "3604": {"op": "AND"}, "3605": {"op": "DUP5"}, "3606": {"op": "PUSH1", "value": "0x0"}, "3608": {"op": "DUP3"}, "3609": {"op": "PUSH2", "value": "0xE24"}, "3612": {"op": "JUMPI"}, "3613": {"op": "POP"}, "3614": {"op": "PUSH1", "value": "0x1"}, "3616": {"op": "PUSH2", "value": "0xAB6"}, "3619": {"op": "JUMP"}, "3620": {"op": "JUMPDEST"}, "3621": {"op": "DUP2"}, "3622": {"op": "PUSH2", "value": "0xE31"}, "3625": {"op": "JUMPI"}, "3626": {"op": "POP"}, "3627": {"op": "PUSH1", "value": "0x0"}, "3629": {"op": "PUSH2", "value": "0xAB6"}, "3632": {"op": "JUMP"}, "3633": {"op": "JUMPDEST"}, "3634": {"op": "DUP2"}, "3635": {"op": "PUSH1", "value": "0x1"}, "3637": {"op": "DUP2"}, "3638": {"op": "EQ"}, "3639": {"op": "PUSH2", "value": "0xE47"}, "3642": {"op": "JUMPI"}, "3643": {"op": "PUSH1", "value": "0x2"}, "3645": {"op": "DUP2"}, "3646": {"op": "EQ"}, "3647": {"op": "PUSH2", "value": "0xE51"}, "3650": {"op": "JUMPI"}, "3651": {"op": "PUSH2", "value": "0xE7E"}, "3654": {"op": "JUMP"}, "3655": {"op": "JUMPDEST"}, "3656": {"op": "PUSH1", "value": "0x1"}, "3658": {"op": "SWAP2"}, "3659": {"op": "POP"}, "3660": {"op": "POP"}, "3661": {"op": "PUSH2", "value": "0xAB6"}, "3664": {"op": "JUMP"}, "3665": {"op": "JUMPDEST"}, "3666": {"op": "PUSH1", "value": "0xFF"}, "3668": {"op": "DUP5"}, "3669": {"op": "GT"}, "3670": {"op": "ISZERO"}, "3671": {"op": "PUSH2", "value": "0xE62"}, "3674": {"op": "JUMPI"}, "3675": {"op": "PUSH2", "value": "0xE62"}, "3678": {"op": "PUSH2", "value": "0xF0F"}, "3681": {"jump": "i", "op": "JUMP"}, "3682": {"op": "JUMPDEST"}, "3683": {"op": "PUSH1", "value": "0x1"}, "3685": {"op": "DUP5"}, "3686": {"op": "SHL"}, "3687": {"op": "SWAP2"}, "3688": {"op": "POP"}, "3689": {"op": "DUP5"}, "3690": {"op": "DUP3"}, "3691": {"op": "GT"}, "3692": {"op": "ISZERO"}, "3693": {"op": "PUSH2", "value": "0xE78"}, "3696": {"op": "JUMPI"}, "3697": {"op": "PUSH2", "value": "0xE78"}, "3700": {"op": "PUSH2", "value": "0xF0F"}, "3703": {"jump": "i", "op": "JUMP"}, "3704": {"op": "JUMPDEST"}, "3705": {"op": "POP"}, "3706": {"op": "PUSH2", "value": "0xAB6"}, "3709": {"op": "JUMP"}, "3710": {"op": "JUMPDEST"}, "3711": {"op": "POP"}, "3712": {"op": "PUSH1", "value": "0x20"}, "3714": {"op": "DUP4"}, "3715": {"op": "LT"}, "3716": {"op": "PUSH2", "value": "0x133"}, "3719": {"op": "DUP4"}, "3720": {"op": "LT"}, "3721": {"op": "AND"}, "3722": {"op": "PUSH1", "value": "0x4E"}, "3724": {"op": "DUP5"}, "3725": {"op": "LT"}, "3726": {"op": "PUSH1", "value": "0xB"}, "3728": {"op": "DUP5"}, "3729": {"op": "LT"}, "3730": {"op": "AND"}, "3731": {"op": "OR"}, "3732": {"op": "ISZERO"}, "3733": {"op": "PUSH2", "value": "0xEB1"}, "3736": {"op": "JUMPI"}, "3737": {"op": "POP"}, "3738": {"op": "DUP2"}, "3739": {"op": "DUP2"}, "3740": {"op": "EXP"}, "3741": {"op": "DUP4"}, "3742": {"op": "DUP2"}, "3743": {"op": "GT"}, "3744": {"op": "ISZERO"}, "3745": {"op": "PUSH2", "value": "0xEAC"}, "3748": {"op": "JUMPI"}, "3749": {"op": "PUSH2", "value": "0xEAC"}, "3752": {"op": "PUSH2", "value": "0xF0F"}, "3755": {"jump": "i", "op": "JUMP"}, "3756": {"op": "JUMPDEST"}, "3757": {"op": "PUSH2", "value": "0xAB6"}, "3760": {"op": "JUMP"}, "3761": {"op": "JUMPDEST"}, "3762": {"op": "PUSH2", "value": "0xEBE"}, "3765": {"op": "DUP5"}, "3766": {"op": "DUP5"}, "3767": {"op": "DUP5"}, "3768": {"op": "PUSH1", "value": "0x1"}, "3770": {"op": "PUSH2", "value": "0xDC2"}, "3773": {"jump": "i", "op": "JUMP"}, "3774": {"op": "JUMPDEST"}, "3775": {"op": "DUP1"}, "3776": {"op": "DUP7"}, "3777": {"op": "DIV"}, "3778": {"op": "DUP3"}, "3779": {"op": "GT"}, "3780": {"op": "ISZERO"}, "3781": {"op": "PUSH2", "value": "0xED0"}, "3784": {"op": "JUMPI"}, "3785": {"op": "PUSH2", "value": "0xED0"}, "3788": {"op": "PUSH2", "value": "0xF0F"}, "3791": {"jump": "i", "op": "JUMP"}, "3792": {"op": "JUMPDEST"}, "3793": {"op": "MUL"}, "3794": {"op": "SWAP5"}, "3795": {"op": "SWAP4"}, "3796": {"op": "POP"}, "3797": {"op": "POP"}, "3798": {"op": "POP"}, "3799": {"op": "POP"}, "3800": {"jump": "o", "op": "JUMP"}, "3801": {"op": "JUMPDEST"}, "3802": {"op": "PUSH1", "value": "0x0"}, "3804": {"op": "DUP2"}, "3805": {"op": "PUSH1", "value": "0x0"}, "3807": {"op": "NOT"}, "3808": {"op": "DIV"}, "3809": {"op": "DUP4"}, "3810": {"op": "GT"}, "3811": {"op": "DUP3"}, "3812": {"op": "ISZERO"}, "3813": {"op": "ISZERO"}, "3814": {"op": "AND"}, "3815": {"op": "ISZERO"}, "3816": {"op": "PUSH2", "value": "0xEF3"}, "3819": {"op": "JUMPI"}, "3820": {"op": "PUSH2", "value": "0xEF3"}, "3823": {"op": "PUSH2", "value": "0xF0F"}, "3826": {"jump": "i", "op": "JUMP"}, "3827": {"op": "JUMPDEST"}, "3828": {"op": "POP"}, "3829": {"op": "MUL"}, "3830": {"op": "SWAP1"}, "3831": {"jump": "o", "op": "JUMP"}, "3832": {"op": "JUMPDEST"}, "3833": {"op": "PUSH1", "value": "0x0"}, "3835": {"op": "DUP3"}, "3836": {"op": "DUP3"}, "3837": {"op": "LT"}, "3838": {"op": "ISZERO"}, "3839": {"op": "PUSH2", "value": "0xF0A"}, "3842": {"op": "JUMPI"}, "3843": {"op": "PUSH2", "value": "0xF0A"}, "3846": {"op": "PUSH2", "value": "0xF0F"}, "3849": {"jump": "i", "op": "JUMP"}, "3850": {"op": "JUMPDEST"}, "3851": {"op": "POP"}, "3852": {"op": "SUB"}, "3853": {"op": "SWAP1"}, "3854": {"jump": "o", "op": "JUMP"}, "3855": {"op": "JUMPDEST"}, "3856": {"op": "PUSH4", "value": "0x4E487B71"}, "3861": {"op": "PUSH1", "value": "0xE0"}, "3863": {"op": "SHL"}, "3864": {"op": "PUSH1", "value": "0x0"}, "3866": {"op": "MSTORE"}, "3867": {"op": "PUSH1", "value": "0x11"}, "3869": {"op": "PUSH1", "value": "0x4"}, "3871": {"op": "MSTORE"}, "3872": {"op": "PUSH1", "value": "0x24"}, "3874": {"op": "PUSH1", "value": "0x0"}, "3876": {"op": "REVERT"}}, "sha1": "ef8400ab034f36d3923b0347fe9c8cd78244a9e0", "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport { ERC20 } from \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\";\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\n\n\ninterface IERC20 {\n    function transfer(address recipient, uint256 amount) external returns (bool);\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\ncontract BTCUP is ERC20 {\n    constructor() ERC20(\"Bitcoin Up\", \"BTCUP\") {\n      \n    }\n\n    function mint(uint256 quantity) public {\n        _mint(tx.origin, quantity);\n    }\n\n    function burn(uint256 quantity) public {\n        _burn(tx.origin, quantity);\n    }\n\n    function decimals() public view override returns (uint8) {\n        return 6;\n    }\n}\n\n\ncontract BTCDOWN is ERC20 {\n    constructor() ERC20(\"Bitcoin Down\", \"BTCDOWN\") {\n    }\n\n    function mint(uint256 quantity) public {\n        _mint(tx.origin, quantity);\n    }\n\n    function burn(uint256 quantity) public {\n        _burn(tx.origin, quantity);\n    }\n\n    function decimals() public view override returns (uint8) {\n        return 6;\n    }\n}\n\n\ncontract LeveragedTrading{\n    using SafeMath for uint256;\n\n    bool public poolIsInitiated = false;\n\n    uint256 public priceBtcUp = 10 ** 6;\n    uint256 public priceBtcDown = 10 ** 6;        // 6 decimals\n\n    uint256 public collateralBtcUp = 0;          //6 decimals\n    uint256 public collateralBtcDown = 0;\n\n    uint256 public amountBtcUp = 0;           // 6 decimals\n    uint256 public amountBtcDown = 0;         // 6 decimals\n\n    uint256 public lastBtcPrice = 0;       // 8 decimals, chainlink conventions\n\n    address addressUsdc = 0xb7a4F3E9097C08dA09517b5aB877F7a917224ede;  // <- Kovan  //0xeb8f08a975Ab53E34D8a0330E0D34de942C95926;\n    address addressBtcUSDFeed =  0x6135b13325bfC4B00278B4abC5e20bbce2D6580e; // <- Kovan          // 0xECe365B379E1dD183B20fc5f022230C044d51404;\n\n\n    BTCUP btcUp = new BTCUP();\n    BTCDOWN btcDown = new BTCDOWN();\n\n\n    function initiatePool(uint256 amountLeveragedTokens) public {\n        require(!poolIsInitiated, \"The pool was already initiated.\");\n\n        issueBtcUp(amountLeveragedTokens);\n        issueBtcDown(amountLeveragedTokens);\n\n        poolIsInitiated = true;\n    }\n\n\n\n    function issueBtcUp(uint256 amountLeveragedTokens) public {\n        rebalanceLeveragedTokens();\n        btcUp.mint(amountLeveragedTokens);\n\n        IERC20 usdc = IERC20(addressUsdc);\n        priceBtcUp = getBtcUpPrice();\n\n        uint256 amountUsdc = amountLeveragedTokens.mul(priceBtcUp).div(10 ** 6);\n\n        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), \"You don't have enough USDC\");\n\n        amountBtcUp = amountBtcUp.add(amountLeveragedTokens);\n        collateralBtcUp = collateralBtcUp.add(amountUsdc);\n    }\n\n\n\n    function issueBtcDown(uint256 amountLeveragedTokens) public {\n        rebalanceLeveragedTokens();\n        btcDown.mint(amountLeveragedTokens);\n\n        IERC20 usdc = IERC20(addressUsdc);\n        priceBtcDown = getBtcDownPrice();\n        uint256 amountUsdc = amountLeveragedTokens.mul(priceBtcDown).div(10 ** 6);\n\n        require(usdc.transferFrom(msg.sender, address(this), amountUsdc), \"You don't have enough USDC\");\n\n        amountBtcDown = amountBtcDown.add(amountLeveragedTokens);\n        collateralBtcDown = collateralBtcDown.add(amountUsdc);\n    }\n\n\n\n    function redeemBtcUp(uint256 amountLeveragedTokens) public {\n        rebalanceLeveragedTokens();\n        btcUp.burn(amountLeveragedTokens);\n\n        IERC20 usdc = IERC20(addressUsdc);\n        priceBtcUp = getBtcUpPrice();\n\n        uint256 amountUsdc = amountLeveragedTokens.mul(priceBtcUp).div(10 ** 6);\n        require(usdc.transfer(msg.sender, amountUsdc), \"Not enough usdc available\");\n\n        amountBtcUp = amountBtcUp.sub(amountLeveragedTokens);\n        collateralBtcUp = collateralBtcUp.sub(amountUsdc);\n    }\n\n\n\n    function redeemBtcDown(uint256 amountLeveragedTokens) public {\n        rebalanceLeveragedTokens();\n        btcDown.burn(amountLeveragedTokens);\n\n        IERC20 usdc = IERC20(addressUsdc);\n        priceBtcDown = getBtcDownPrice();\n    \n        uint256 amountUsdc = amountLeveragedTokens.mul(priceBtcDown).div(10 ** 6);\n        require(usdc.transfer(msg.sender,  amountUsdc), \"Not enough usdc available\");\n\n        amountBtcDown = amountBtcDown.sub(amountLeveragedTokens);\n        collateralBtcDown = collateralBtcDown.sub(amountUsdc);\n\n    }\n\n\n\n    function rebalanceLeveragedTokens() public {\n        uint256 btcPrice = getBtcPrice();\n        if ((collateralBtcUp > 0) && (collateralBtcDown > 0)) {\n            uint256 rebalanceAmount = getRebalanceAmount(btcPrice);\n            if (getSign(btcPrice) > 0) {\n                collateralBtcUp = collateralBtcUp.add(rebalanceAmount);\n                collateralBtcDown = collateralBtcDown.sub(rebalanceAmount);\n            }\n\n            else {\n                collateralBtcUp = collateralBtcUp.sub(rebalanceAmount);\n                collateralBtcDown = collateralBtcDown.add(rebalanceAmount);\n            }\n\n        }\n\n        lastBtcPrice = btcPrice;\n    }\n\n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n    function getSign(uint256 btcPrice) internal view returns (int256){\n        if (btcPrice > lastBtcPrice) {\n            return 1;\n        }\n        else {\n            return -1;\n        }\n    }\n\n \n    function getRebalanceAmount(uint256 priceBtc) internal view returns (uint256){\n        uint256 priceDiff = getPriceDiff(priceBtc);\n\n        return min(collateralBtcUp, collateralBtcDown).mul(L(priceDiff)).div(10 ** 6);\n    }\n\n\n// getBtcUpPrice() 6 decimals\n    function getBtcUpPrice() public view returns (uint256) {\n        return amountBtcUp == 0 ?  priceBtcUp : collateralBtcUp.mul(10 ** 6).div(amountBtcUp);\n    }\n\n\n// getBtcDownPrice() 6 decimals\n    function getBtcDownPrice() public view returns (uint256) {//6 decimals\n        return amountBtcDown == 0 ?  priceBtcDown : collateralBtcDown.mul(10 ** 6).div(amountBtcDown);\n    }\n\n\n// get the price of our asset with 8 decimals\n    function getBtcPrice() public view returns (uint256) {\n        AggregatorV3Interface priceFeed = AggregatorV3Interface(addressBtcUSDFeed);\n        (,int256 answer,,,) = priceFeed.latestRoundData();\n\n         return uint256(answer);             // we call chainlink oracle to get the price of the asset\n         \n    }\n\n    \n    function min(uint256 a, uint256 b) internal pure returns (uint256) {\n        return a <= b ? a : b;\n    }\n\n\n    function L(uint256 x) internal pure returns (uint256) {            //6  decimals\n\n        uint256 denom = 9 * (x ** 2 / 10 ** 6)  + 3 * x + 10 ** 6;\n        uint256 num = 10 ** 12;\n\n        return 10 ** 6 - num / denom;\n    } \n\n\n    function getPriceDiff(uint256 btcPrice) internal view returns (uint256) {     //6 decimals\n        if (btcPrice > lastBtcPrice) {\n            return btcPrice.mul(10 ** 6).div(lastBtcPrice).sub(10 ** 6);\n        }\n\n        else {\n            return lastBtcPrice.mul(10 ** 6).div(btcPrice).sub(10 ** 6);\n        }\n\n    }\n\n\n    function getBtcupBalance() public view returns(uint256) {\n        return btcUp.balanceOf(msg.sender);\n    }\n\n\n    function getBtcdownBalance() public view returns(uint256) {\n        return btcDown.balanceOf(msg.sender);\n    }\n\n\n}", "sourceMap": "1261:6256:6:-:0;;;;;1355:5;1325:35;;-1:-1:-1;;1325:35:6;;;1395:7;1325:35;1367;;;1408:37;;1473:34;;;;1535:36;;;;1578:30;;;;1638:32;;;;1699:31;;1780:64;;;-1:-1:-1;;;;;;1780:64:6;;;1802:42;1780:64;;;;1910:71;;;;;;1939:42;1910:71;;;2071:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2057:25:6;;;-1:-1:-1;;;;;;2057:25:6;-1:-1:-1;;;;;2057:25:6;;;;;;;;;;2106:13;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2088:31:6;;;-1:-1:-1;;;;;;2088:31:6;-1:-1:-1;;;;;2088:31:6;;;;;;;;;;1261:6256;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;", "sourcePath": "contracts/LeveragedTrading.sol", "type": "contract", "deployment": {"address": "0xab7724612fa346F7407D2B94b865DD3c4AA86771", "chainid": "42", "blockHeight": 32304662}}
},{}],2:[function(require,module,exports){
module.exports={
"serverUrl" : "https://rjfi3tltmxvh.usemoralis.com:2053/server",
"appId" : "97wagl7iRrfE4SiHD8Y0aR77PrX5Btie0sisKP26"
}
},{}],3:[function(require,module,exports){
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBigNumberWithDecimals = getBigNumberWithDecimals;

const BigNumber = require('bignumber.js');

function getBigNumberWithDecimals(x, numberDecimals) {
  let xAsBigNumber = new BigNumber(x);
  let yAsBigNumberWithDecimals = new BigNumber("1".concat("0".repeat(numberDecimals)));
  return xAsBigNumber.multipliedBy(yAsBigNumberWithDecimals);
}

},{"bignumber.js":2}],2:[function(require,module,exports){
;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2021 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                       // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',        // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
      alphabetHasNormalDecimalDigits = true;


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10 && alphabetHasNormalDecimalDigits) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if less than two characters,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
              alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10 && alphabetHasNormalDecimalDigits) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (typeof define == 'function' && define.amd) {
    define(function () { return BigNumber; });

  // Node.js and other environments that support module.exports.
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = BigNumber;

  // Browser.
  } else {
    if (!globalObject) {
      globalObject = typeof self != 'undefined' && self ? self : window;
    }

    globalObject.BigNumber = BigNumber;
  }
})(this);

},{}]},{},[1]);

},{"bignumber.js":5}],4:[function(require,module,exports){
"use strict";

var _bundle = require("./dist/bundle2.js");

//a = require("./dist/bundle_secondary_functions.js")
const BigNumber = require('bignumber.js'); //import {BigNumber} from 'bignumber.js';
//import BigNumber from 'https://unpkg.com/bignumber.js@latest/bignumber.mjs';
//leverageTradingInfo = fetch("../build/deployments/42/0xab7724612fa346F7407D2B94b865DD3c4AA86771.json").then(response => response.json()).then(json => console.log(json));


const leverageTradingInfo = require("../build/deployments/42/0xab7724612fa346F7407D2B94b865DD3c4AA86771.json"); //change name
//import abi as leverageTradingAbi  from "../build/deployments/42/0xab7724612fa346F7407D2B94b865DD3c4AA86771.json";


const leverageTradingAbi = leverageTradingInfo["abi"];
const leverageTradingContractAddress = leverageTradingInfo["deployment"]["address"]; //btcupContractAddress = "0x86e892136f11531712b60914879351097448706b";
//btcupAbi = require("../build/contracts/BTCUP.json")["abi"];
//btcdownContractAddress = "0x3a37F3751BAF93442a24CAfC28a1419B73163B00";
//btcdownAbi = require("../build/contracts/BTCDOWN.json")["abi"];
//usdcContractAddress = "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede";
//usdcAbi = require("../build/contracts/IERC20.json")["abi"];
//import * as config from "../build/deployments/42/0xab7724612fa346F7407D2B94b865DD3c4AA86771.json";

const config = require("./.config.json");

const serverUrl = config["serverUrl"];
const appId = config["appId"];
Moralis.start({
  serverUrl,
  appId
});

async function connect() {
  if (!Moralis.User.current()) {
    await Moralis.authenticate({
      signingMessage: "Log in using Moralis"
    });
  }
}

async function issueBtcUp() {
  const moneyForInvestment = parseFloat(document.getElementById("amount-btcup-issue").value);
  const moneyForInvestmentMaxAllowedStr = (0, _bundle.getBigNumberWithDecimals)(moneyForInvestment * 1.1, 6).toString();
  const tx = await approve(moneyForInvestmentMaxAllowedStr, leverageTradingContractAddress, usdcContractAddress, usdcAbi);
  tx.wait(1);
  const priceBtcUp = await getBtcUpPrice();
  console.log("price btc up is: " + priceBtcUp);
  console.log("max allowed investment 6 decimals: " + moneyForInvestmentMaxAllowedStr);
  const amountLeveragedTokensStr = (0, _bundle.getBigNumberWithDecimals)(moneyForInvestment * 10 ** 6 / priceBtcUp, 6).toString(); //console.log(amountLeveragedTokensStr);

  const writeOptionsIssueBtcUp = {
    contractAddress: leverageTradingContractAddress,
    functionName: "issueBtcUp",
    abi: leverageTradingAbi,
    params: {
      amountLeveragedTokens: amountLeveragedTokensStr
    }
  };
  await Moralis.executeFunction(writeOptionsIssueBtcUp);
}

document.getElementById("connect-btn").onclick = connect;
document.getElementById("issue-btcup-btn").onclick = issueBtcUp;

},{"../build/deployments/42/0xab7724612fa346F7407D2B94b865DD3c4AA86771.json":1,"./.config.json":2,"./dist/bundle2.js":3,"bignumber.js":5}],5:[function(require,module,exports){
;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.2
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2021 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                       // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',        // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz',
      alphabetHasNormalDecimalDigits = true;


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10 && alphabetHasNormalDecimalDigits) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if less than two characters,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
              alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10 && alphabetHasNormalDecimalDigits) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (typeof define == 'function' && define.amd) {
    define(function () { return BigNumber; });

  // Node.js and other environments that support module.exports.
  } else if (typeof module != 'undefined' && module.exports) {
    module.exports = BigNumber;

  // Browser.
  } else {
    if (!globalObject) {
      globalObject = typeof self != 'undefined' && self ? self : window;
    }

    globalObject.BigNumber = BigNumber;
  }
})(this);

},{}]},{},[4]);
