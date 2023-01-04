import React from "react"

/* Distinct Friendly Biome Characters 
 * FB 1.1 - 1.7
 * till
 * FB 13.1 - 13.7
 * and
 * DB 1.1 - 1.3
*/

const BiomeGarden = ({ biomeGarden, loading }) => {
    const biomeActiveChar = biomeGarden.active

    return (
        <>
            {biomeGarden.chars?.map((biome, key) => (
                <div
                    key={key}
                    className={`biome-image ${
                        biomeActiveChar === biome ? "biome-active-image" : ""
                    }`}
                >
                    {loading ? (
                        "Loading..."
                    ) : (
                        <img
                            src={require(`../../../assets/images/biome/${biomeActiveChar}.png`)}
                            alt={biome.split(".")[0]}
                        />
                    )}
                </div>
            ))}
        </>
    )
}

export default BiomeGarden