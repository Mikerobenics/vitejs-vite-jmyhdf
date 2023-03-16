<script setup>
import { SplashScreen } from '@capacitor/splash-screen';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/vue';
import { cube, ellipse, square, triangle } from 'ionicons/icons';
import { defineComponent, onMounted } from 'vue';
import { sleep } from './helpers';

onMounted(() => {
  sleep(5000).then(() => {
    SplashScreen.hide();
    console.log('yay');
  });
});
</script>

<template>
  <IonApp>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home">
          <IonIcon :icon="triangle" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/detail">
          <IonIcon :icon="ellipse" />
          <IonLabel>Detail</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/web3">
          <IonIcon :icon="square" />
          <IonLabel>Web3</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab4" href="/error">
          <IonIcon :icon="cube" />
          <IonLabel>Error 404</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonApp>
</template>
