export const demoNotification = () => {
    // Service Worker isn't supported on this browser, disable or hide UI.
    if (!("serviceWorker" in navigator)) {
        return
    }

    // Push isn't supported on this browser, disable or hide UI.
    if (!("PushManager" in window)) {
        return
    }

    function askPermission() {
        Notification.requestPermission((result) => {
            if (result === "granted") {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.showNotification("Vibration Sample", {
                        body: "Buzz! Buzz!",
                        icon: "../../../public/images/logo.png",
                        vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: "vibration-sample",
                    })
                })
            } else {
                console.error("Notification Access Not Granted!")
            }
        })
    }
    askPermission()
}
