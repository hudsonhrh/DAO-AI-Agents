import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
    const [provider, setProvider] = useState(null);
    const [address, setAddress] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(loaded) return;
        const init = async () => {
            if (window.ethereum) {
                try {
                    await window.eth_requestAccounts;
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const address = await signer.getAddress();
                    setProvider(provider);
                    setAddress(address);
                    console.log('Account: ', address)
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.error('Please install MetaMask!');
            }
        };
        init();
    }, [loaded]);



    return (
        <Web3Context.Provider value={{loaded, setLoaded, provider, address }}>
            {children}
        </Web3Context.Provider>
    );
};

export const useWeb3 = () => useContext(Web3Context);
