// change file name to notifTemplate
import Logo from "../../assets/images/logo.png"

export const demoNotification = (msgTemplate) => {
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
                    registration.showNotification("Go-Go Biome", {
                        body: msgTemplate,
                        icon: Logo,
                        badge: Logo,
                        vibrate: [
                            500, 110, 500, 110, 450, 110, 200, 110, 170, 40,
                            450, 110, 200, 110, 170, 40, 500,
                        ],
                        timestamp: Date.parse(Date.now()),
                        // vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: "go-go-biome",
                        renotify: true,
                    })
                })
            } else {
                console.error("Notification Access Not Granted!")
            }
        })
    }
    askPermission()
}
