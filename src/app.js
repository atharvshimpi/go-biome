import React, { useState } from "react"
import "./styles.css"

const App = () => {
    const [username, setUsername] = useState("")
    const [agreedTerms, setAgreedTerms] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleClick = () => {
        setIsButtonClicked(!isButtonClicked)
    }

    return (
        <div className="app-container">
            <div className="input-container">
                {isButtonClicked ? (
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", alignItems: "center", marginTop: "8rem" }}>
                        <h1 style={{ textAlign: "center" }}>Hello <u>{username}</u></h1>
                        <button className="submit" onClick={handleClick}>Go Back</button>
                    </div>
                ) : (
                    <>
                        <div className="username-section">
                            <div className="username-input-container">
                                <input 
                                    placeholder="Enter Username" 
                                    type="text" 
                                    required
                                    className="username-input"
                                    value={username}
                                    onChange={(e) => {setUsername(e.target.value)}}
                                />
                            </div>
                            <div className="privacy-container">
                                <input 
                                    required 
                                    type="checkbox" 
                                    className="privacy-checkbox" 
                                    checked={agreedTerms}
                                    onChange={() => setAgreedTerms(!agreedTerms)}
                                />
                                <label>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. Click here to allow us collect your data.</label>
                            </div>
                            <div className="submit-container">
                                <button onClick={handleClick} className="submit">Submit</button>
                            </div>
                        </div>
                        <hr className="break-line" />
                        <div className="details-section">
                            <h1 className="about-us">About us</h1><br />

                            <div className="about-us">This game is made to understand the human-microbial interactions and the activities that influence this relationship.</div>

                            <div className="about-us">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default App
