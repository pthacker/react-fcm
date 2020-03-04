importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "381220402916"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
        console.log('PAYLOAD-->'+payload.data.message);
      }
    })
    .then(() => {
      var options={
        body: "This is notification body",

        //icons are supported in browser
        icon: "/favicon.ico",
  
        //images are supported in android
        image: "/logo192.png",
  
        //direction of text ltr-left to right
        dir: "ltr",
  
        //lang should be BCP 47 compliant
        lang: "en-US",
  
        //vibrate is supported in selected devices
        vibrate: [100, 50, 200], //[vibrate Pause vibrate]
  
        //badges are supported in android
        badge: "/favicon.ico",
  
        //tag acts line an ID to stack similar notifications
        tag: "task-id",
  
        //vibrate and alert the user with notifications with same tag if set to true
        renotify: true,
  
        //action:"confirm" inside actions acts as an ID for button
        //icon:"/public/favicon.ico" might not support in all devices
        actions: [
          { action: "confirm", title: "Confirm", icon: "favicon.ico" },
          { action: "cancel", title: "Cancel", icon: "favicon.ico" }
        ]
      }
      return registration.showNotification(payload.data.message,options);
    });
  return promiseChain;
});

self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...

  var notification = event.notification;
  var action = event.action;

  console.log('clicked on notification')

  if(action === 'confirm'){
  console.log("confirm clicked");
  notification.close();
  }
  else {
console.log("action-->"+action);
notification.close();
  }
});
