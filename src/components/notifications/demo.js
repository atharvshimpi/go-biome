import Logo from "../../assets/images/logo.png"

export const demoNotification = (username, biomename, points) => {
    // Service Worker isn't supported on this browser, disable or hide UI.
    if (!("serviceWorker" in navigator)) {
        return
    }

    // Push isn't supported on this browser, disable or hide UI.
    if (!("PushManager" in window)) {
        return
    }

    const bodyTemplate = `Congratulations ${username} on completing the activity!\n${biomename} has grown by ${points} points!`

    function askPermission() {
        Notification.requestPermission((result) => {
            if (result === "granted") {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.showNotification("Go-Go Biome", {
                        body: bodyTemplate,
                        icon: Logo,
                        badge: Logo,
                        vibrate: [
                            500, 110, 500, 110, 450, 110, 200, 110, 170, 40,
                            450, 110, 200, 110, 170, 40, 500,
                        ],
                        timestamp: Date.parse(Date.now()),
                        // vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: "vibration-sample",
                        renotify: true,
                        requireInteraction: true,
                    })
                })
            } else {
                console.error("Notification Access Not Granted!")
            }
        })
    }
    askPermission()
}
