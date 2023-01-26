import React, { useState } from "react"
import BiomeVariants from "./biomeVariants"
import { Box, Modal } from "@material-ui/core"

/* Distinct Friendly Biome Characters 
 * FB 1.1 - 1.7
 * till
 * FB 13.1 - 13.7
 * and
 * DB 1.1 - 1.3
*/

const BiomeGarden = ({ biomeGarden, setBiomeGarden, loading }) => {
    const [biomeNum, setBiomeNum] = useState(null)
    const [isBiomeVariantModalOpen, setIsBiomeVariantModalOpen] = useState(false)

    const handleClick = (bNum) => {
        setBiomeNum(bNum)
        setIsBiomeVariantModalOpen(true)
    }

    return (
        <>
            <Modal
                open={isBiomeVariantModalOpen}
                onClose={() => setIsBiomeVariantModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-container biome-variant-modal-container bgGameState"
            >
                <Box className="modal-content">
                    <BiomeVariants
                        biomeGarden={biomeGarden}
                        setBiomeGarden={setBiomeGarden}
                        biomeNum={biomeNum}
                        loading={loading}
                        setIsBiomeVariantModalOpen={setIsBiomeVariantModalOpen}
                    />
                </Box>
            </Modal>
            {/* Default Character */}
            <div className="biome-default-container">
                <img
                    style={{ maxWidth: "50%" }}
                    src={require(`../../../assets/images/biome/biomeBg.png`)}
                    alt={"biomeBg"}
                />
                <img
                    className="biome-char"
                    style={{ maxWidth: "50%" }}
                    src={require(`../../../assets/images/biome/${biomeGarden.active}.png`)}
                    alt={biomeGarden.active}
                />
            </div>
            {biomeGarden.chars?.map((biome, key) => (
                <div
                    key={key}
                    className="biome-image"
                >
                    {loading ? (
                        "Loading..."
                    ) : (
                        // All Biomes
                        <div>
                            <img
                                src={require(`../../../assets/images/biome/biomeBg.png`)}
                                alt={"biomeBg"}
                            />
                            <img
                                className="biome-char"
                                onClick={() => handleClick(key + 1)}
                                src={require(`../../../assets/images/biome/FB${key + 1}.${biomeGarden.defaults[key]}.png`)}
                                alt={`FB${key + 1}`}
                            />
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default BiomeGarden