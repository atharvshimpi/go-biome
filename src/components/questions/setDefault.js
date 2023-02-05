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
            prevDate: new Date(new Date().setUTCHours(0, 0, 0, 0)), // gives nearest midnight in the past
            gameState: 0
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
            active: "DB1.1",
            chars: [
                // biomeName: isUnlocked
                {FB1: false},
                {FB2: false},
                {FB3: false},
                {FB4: false},
                {FB5: false},
                {FB6: false},
                {FB7: false},
                {FB8: false},
                {FB9: false},
                {FB10: false},
                {FB11: false},
                {FB12: false},
                {FB13: false},
            ],
            defaults: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        })
    )
    localStorage.setItem("game-analytics", JSON.stringify({
        activityCategoryFirstTouched: -1,
        shuffleButtonPressFreq: 0, 
    }))
}
