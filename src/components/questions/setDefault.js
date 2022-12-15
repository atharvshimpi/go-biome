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
    localStorage.setItem("liked-cards", JSON.stringify([]))
    localStorage.setItem("biome-pool", JSON.stringify([]))
    localStorage.setItem(
        "biome-garden",
        JSON.stringify({
            active: "fb11.4",
            chars: {
                fb1: 0,
                fb2: 0,
                fb3: 0,
                fb4: 0,
                fb5: 0,
                fb6: 0,
                fb7: 0,
                fb8: 0,
                fb9: 0,
                fb10: 0,
                fb11: 0,
                fb12: 0,
                fb13: 0,
            }
        })
    )
}
