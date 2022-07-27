import React from "react"
import { motion } from "framer-motion"
import { Dialog } from "@headlessui/react"

// eslint-disable-next-line
const SettingsDetails = ({ children, onClose }) => {
    return (
        <Dialog className="fixed inset-0 z-10" onClose={onClose} open={true}>
            <div className="flex flex-col justify-center h-full pt-4 text-center sm:block sm:p-0">
                <Dialog.Overlay
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                        },
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.3,
                            ease: "easeIn",
                        },
                    }}
                    className="fixed inset-0 bg-black/40"
                />

                <motion.div
                    initial={{ y: "100%" }}
                    animate={{
                        // ask whether to lock in portrait mode or not
                        y: `${window.orientation === 90 ? "40vh" : "50vh"}`,
                        transition: {
                            duration: 0.4,
                            ease: "easeOut",
                        },
                    }}
                    exit={{
                        y: "100%",
                        transition: {
                            duration: 0.3,
                            ease: "easeIn",
                        },
                    }}
                    className="z-0 flex flex-col w-full h-full bg-white rounded-t-lg shadow-xl"
                    style={{ backgroundColor: "#ffbc58" }}
                >
                    {children}
                </motion.div>
            </div>
        </Dialog>
    )
}

export default SettingsDetails
