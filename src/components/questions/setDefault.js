export const setDefault = () => {
    localStorage.setItem(
        "gamestats",
        JSON.stringify({ friendlyBiomePoints: 15, unFriendlyBiomePoints: 85, activityPerformed: 0, activityOngoing: false })
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
