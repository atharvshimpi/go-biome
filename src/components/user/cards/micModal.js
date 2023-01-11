import React, { useState } from "react"
import { ReactMic } from "react-mic"
import MicRecorder from "mic-recorder-to-mp3"

import { BsPlayFill, BsFillStopFill, BsFillPauseFill } from "react-icons/bs"

const categoryTags = [
    {
        category: "Environment",
        color: "#94B394",
        avatarColor: "#619461"
    },
    {
        category: "Physical Activity",
        color: "#FED966",
        avatarColor: "#ffc100"
    },
    {
        category: "Social",
        color: "#B886C1",
        avatarColor: "#a560b1"
    },
    {
        category: "Zen",
        color: "#F2A1A0",
        avatarColor: "#e97170"
    },
]

const MicModal = ({ setMicData, categoryId }) => {
    const [isRecord, setIsRecord] = useState(false)
    const [isPause, setIsPause] = useState(false)

    // New Instance of the MicRecorderToMP3
    const recorder = new MicRecorder({
        bitRate: 128
    })

    const handleStartRec = () => {
        setIsRecord(true)
        setIsPause(!isPause)

        // Start recording in MicRecorderToMP3
        recorder
            .start().then(() => {
                // something else
            }).catch((e) => {
                console.error("MicRecorderToMP3 Start Error: ", e)
            })
    }

    const handleStopRec = () => {
        setIsRecord(false)
        setIsPause(false)
    }

    const onData = (recordedBlob) => {
        console.log("chunk of real-time data is: ", recordedBlob)
    }
    
    const onStop = (recordedBlob) => {
        // console.log("recordedBlob is: ", recordedBlob)

        // Once you are done singing your best song, stop and get the mp3.
        recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
            // do what ever you want with buffer and blob
            // Example: Create a mp3 file and play
                console.log("MicRecorderToMP3 Recorded Data: ", buffer)
                setMicData(buffer)
        
            }).catch((e) => {
                alert("We could not retrieve your message")
                console.log("MicRecorderToMP3 Start Error: ", e)
            })
    }
    
    return (
        <div 
            className="mic-modal-container" 
            style={{ backgroundColor: categoryTags[categoryId].color }}
        >
            <div className="mic-modal-heading" style={{ fontSize: "1.2rem" }}>
                Record Something
            </div>
            <ReactMic
                record={isRecord}
                className="mic-modal-sound-wave"
                onStop={onStop}
                onData={onData}
                strokeColor="#000000"
                backgroundColor="#FF4081"
                mimeType="audio/mp3"
            />
            <div className="mic-modal-btn-grp">
                <button 
                    className="mic-modal-btn"
                    onClick={handleStartRec}
                >
                    {isPause ? <BsFillPauseFill /> : <BsPlayFill />}
                </button>
                <button onClick={handleStopRec} className="mic-modal-btn">
                    <BsFillStopFill />
                </button>
            </div>
        </div>
    )
}

export default MicModal