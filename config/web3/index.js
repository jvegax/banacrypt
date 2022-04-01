import web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

const ETH_NET_ID = 1;
const RINKEBY_NET_ID = 4;
const KOVAN_NET_ID = 42;
const ROBPSTEN_NET_ID = 3;

export const connector = new InjectedConnector({
    supportedChainIds : [ ETH_NET_ID ,RINKEBY_NET_ID, KOVAN_NET_ID, ROBPSTEN_NET_ID ]
})

export const getLibrary = (provider) => {
    const library = new web3(provider);
    return library;
}