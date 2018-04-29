<template>
  <container class="mt-5">
    <column>
      <card cascade narrow>
        <view-wrapper gradient="peach">
          <h2 class="h2-responsive">
            National Security
          </h2>
          <p><fa icon="lock-alt" /> 04.29.2018</p>
        </view-wrapper>
        <card-body class="text-center">
          <card-text></card-text>
          <!--<btn tag="button" role="button" @click="pushNotification" color="primary" rounded>-->
            <!--Send Notification-->
          <!--</btn>-->
          <button @click="pushNotification" class="">
            Send Notification
          </button>
        </card-body>
      </card>
    </column>
  </container>
</template>

<script>
  import { Btn, BtnGroup, BtnFixed, Card, CardHeader, CardBody, CardTitle, CardText, Container, Column, Fa, ViewWrapper } from '../index'
  
  export default {
    name: "AweberDashboard",
    components: {
      Btn,
      BtnGroup,
      BtnFixed,
      Card,
      CardBody,
      CardText,
      Container,
      Column,
      Fa,
      ViewWrapper
    },
    methods: {
      pushNotification: () => {
        console.log('\n*** Sending Push Notification ***');
  
        // if ('Notification' in window) {
        //   Notification.requestPermission(result => {
        //     console.log('Notification Permission: ', result);
        //
        //     if (result !== 'granted') {
        //       console.log('No Notification permission granted');
        //     } else {
        //       this.displayConfirmNotification();
        //     }
        //   });
        // } else {
        //   console.log('Notification was not found in window');
        // }
      },
      displayConfirmNotification () {
        if ('serviceWorker' in navigator) {
          console.log('[Service Worker]: in navigator on HomePage');
      
          let options = {
            body: `National Security`,
            icon: '../../static/img/icons/8w-globe-color-96x96.png',
            dir: 'ltr',
            lang: 'en-US'
          };
      
          const notification = new Notification('Successfully subscribed!', options);
      
          notification.addEventListener('click', function (event) {
            console.log('[Service Worker] Notification click Received.', event);
        
            notification.close();
        
            $.post(
              'http://localhost:8888/1.0/accounts/1245628/lists/5009490/subscribers?ws.op=create',
              {
                email: 'rdrock7147@gmail.com',
                tags: ['national_security']
              }
            );
            
          });
        }
      }
    }
  }
</script>
