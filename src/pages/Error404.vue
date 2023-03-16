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

const router = useRouter();
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="text-center">
        <div class="text-primary-600 text-9xl font-bold my-5">404</div>
        <div class="text-2xl text-gray-500 my-5">Oops. Page not found...</div>
        <div class="flex flex-row justify-center space-x-4">
          <ion-button @click="router.go(-1)" class="btn btn-primary my-5"
            >Back</ion-button
          >
          <ion-button @click="router.push('/')" class="btn btn-secondary my-5">
            Home
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
