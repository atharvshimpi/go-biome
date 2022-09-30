import Logo from "../../assets/images/logo.png"

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
        const maxVisibleActions = Notification.maxActions
        console.log("maxVisibleActions", maxVisibleActions)
        Notification.requestPermission((result) => {
            if (result === "granted") {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.showNotification("Go-Go Biome", {
                        body: "Demo Testing",
                        icon: Logo,
                        badge: Logo,
                        vibrate: [
                            500, 110, 500, 110, 450, 110, 200, 110, 170, 40,
                            450, 110, 200, 110, 170, 40, 500,
                        ],
                        timestamp: Date.parse("01 Jan 2000 00:00:00"),
                        // vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: "vibration-sample",
                        renotify: true,
                        requireInteraction: true,
                        actions: [
                            {
                                action: "coffee-action",
                                title: "Coffee Action"
                            },
                        ],
                    })
                })
            } else {
                console.error("Notification Access Not Granted!")
            }
        })
    }
    askPermission()
}
