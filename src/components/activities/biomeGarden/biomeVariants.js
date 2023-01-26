import { Box, Modal } from "@material-ui/core"
import React, { useState } from "react"

// Biome Digest Logic
// tempArr elems must be between 1 to 7 
// tempArr[biomeNum] = (tempArr[biomeNum] + 1) % 7 + 1

const BiomeVariants = ({ biomeGarden, setBiomeGarden, biomeNum, loading, setIsBiomeVariantModalOpen }) => {
    const [isSetAsDefaultModalOpen, setIsSetAsDefaultModalOpen] = useState(false)
    const [variantNum, setVariantNum] = useState(1)
    const handleSetDefault = (e) => {
        e.stopPropagation()
        setIsSetAsDefaultModalOpen(true)
    }

    const handleYes = () => {
        const tempArr = biomeGarden.defaults
        tempArr[biomeNum - 1] = variantNum
        
        setBiomeGarden({
            ...biomeGarden,
            defaults: tempArr,
            active: `FB${biomeNum}`
        })
        localStorage.setItem("biome-garden", JSON.stringify({
            ...biomeGarden,
            defaults: tempArr,
            active: `FB${biomeNum}`
        }))
    }

    const handleCustomClose = (e) => {
        e.stopPropagation()
        setIsSetAsDefaultModalOpen(false)
    }

    return (
        <div className="biome-variant-image" onClick={() => setIsBiomeVariantModalOpen(false)}>
            <Modal
                open={isSetAsDefaultModalOpen}
                onClose={(e) => handleCustomClose(e)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal-container biome-variant-modal-container bgGameState"
            >
                <Box className="modal-content">
                    <div className="activity-progress-container">
                        <div className="activity-progress-heading">
                            Set as your primary game character?
                        </div>
                        <button 
                            onClick={handleYes} 
                            className="activity-progress-btn"
                        >
                            YES
                        </button>
                        <button 
                            onClick={(e) => handleCustomClose(e)}
                            className="activity-progress-cancel-btn"
                        >
                            NO
                        </button>
                    </div>
                </Box>
            </Modal>
            {loading ? (
                "Loading..."
            ) : (
                <>
                    {/* default character */}
                    <div className="biome-variant-default-img-container">
                        <img
                            className="biome-variant-bg"
                            src={require(`../../../assets/images/biome/biomeBg.png`)}
                            alt={"biomeBg"}
                        />
                        <img
                            className="biome-variant-default-char"
                            src={require(`../../../assets/images/biome/FB${biomeNum}.${biomeGarden.defaults[biomeNum - 1]}.png`)}
                            alt={`FB${biomeNum}`}
                        />
                    </div>

                    {/* respective biome pool */}
                    <div className="biome-variant-img-container">
                        {[1, 2, 3, 4, 5, 6, 7].map(elem => (
                            <img
                                key={elem}
                                onClick={(e) => {
                                    setVariantNum(elem)
                                    handleSetDefault(e)
                                }}
                                className="biome-variant-char"
                                src={require(`../../../assets/images/biome/FB${biomeNum}.${elem}.png`)}
                                alt={`FB${biomeNum}.${elem}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default BiomeVariants