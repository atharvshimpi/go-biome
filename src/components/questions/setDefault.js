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
            currentActivity: null,
        })
    )
    localStorage.setItem("activity-user-cards", JSON.stringify([]))
    localStorage.setItem("activity-history", JSON.stringify([]))
    localStorage.setItem(
        "biome-garden",
        JSON.stringify({
            active: "shield.png",
            chars: [
                "shield.png",
                "ant.png",
                "bugsy.png",
                "fluff.png",
                "oval.png",
                "sponge.png",
                "tube.png",
                "twin.png",
            ],
        })
    )
}
