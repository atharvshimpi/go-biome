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
            /*
                Make an array of these elements to simplify things
                0 = activityOngoing
                1 = activityPreStart
                2 = activityPostTask
            */
            activityOngoing: false,
            activityPreStart: false,
            activityBiomePointsModal: false,
            activityBiomeMovementModal: false,
            activityBiomeCongMsg: false,
            currentActivity: null,
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
