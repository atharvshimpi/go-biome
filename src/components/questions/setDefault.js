export const setDefault = () => {
    localStorage.setItem(
        "gamestats",
        JSON.stringify({
            friendlyBiomePoints: 15,
            unFriendlyBiomePoints: 85,
            /* index :- 
                0 = envi
                1 = phy act
                2 = social
                3 = zen
            */
            activityPerformed: [0, 0, 0, 0],
            activityOngoing: false,
            activityPreStart: false,
            activityBiomePointsModal: false,
            activityBiomeMovementModal: false,
            activityBiomeCongMsg: false,
            currentActivity: null,
            prevDate: new Date(new Date().setUTCHours(0, 0, 0, 0)) // gives nearest midnight in the past
        })
    )
    localStorage.setItem("mapstats", JSON.stringify({
        friendlyBiomePoints: 15,
        unFriendlyBiomePoints: 85,
    }))
    localStorage.setItem("activity-user-cards", JSON.stringify([]))
    localStorage.setItem("activity-history", JSON.stringify([]))
    localStorage.setItem("biome-pool", JSON.stringify([]))
    localStorage.setItem(
        "biome-garden",
        JSON.stringify({
            active: "shield.png",
            chars: ["shield.png"],
            prevPtr: [0, 0, 0, 0],
            currPtr: [0, 0, 0, 0],
        })
    )
}
