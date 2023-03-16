<script setup>
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
} from '@ionic/vue';
// import Onboard from '@web3-onboard/core';
// import walletConnectModule from '@web3-onboard/walletconnect';

// const wcV1InitOptions = {
//   bridge: 'https://j.bridge.walletconnect.org',
//   qrcodeModalOptions: {
//     mobileLinks: ['metamask', 'trust'],
//   },
//   connectFirstChainId: true,
// };

// const wcV2InitOptions = {
//   version: 2,
//   /**
//    * Project ID associated with [WalletConnect account](https://cloud.walletconnect.com)
//    */
//   projectId: 'd9894c6da1bf6c7b3d5c59d277d1f332',
// };

// // initialize the module with options
// // If version isn't set it will default to V1 until V1 sunset
// const walletConnect = walletConnectModule(wcV2InitOptions || wcV1InitOptions);

// // can also initialize with no options...
// // Defaults to V1 until V1 sunset
// // const walletConnect = walletConnectModule()

// const onboard = Onboard({
//   // ... other Onboard options
//   wallets: [
//     walletConnect,
//     //... other wallets
//   ],
// });

// const connectedWallets = async () => await onboard.connectWallet();
// console.log(connectedWallets);

// const router = useRouter();
import { init, useOnboard } from '@web3-onboard/vue';
import injectedModule from '@web3-onboard/injected-wallets';

const injected = injectedModule();
// const infuraKey = '<INFURA_KEY>'
const rpcUrl = `https://rpc.ankr.com/eth`;

const web3Onboard = init({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl,
    },
  ],
});

const { wallets, connectWallet, disconnectConnectedWallet, connectedWallet } =
  useOnboard();

const connect = async () => connectWallet();
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="text-center">
        <div class="text-amber-200 text-9xl font-bold my-5">Web3</div>
        <div class="flex flex-row justify-center space-x-4">
          <!-- <Suspense> -->
          <ion-button @click="connect" class="btn btn-secondary my-5">
            Connect
          </ion-button>
          <!-- </Suspense> -->
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
