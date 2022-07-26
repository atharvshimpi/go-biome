import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [agreedTerms, setAgreedTerms] = useState(false)
    const [loading, setLoading] = useState(false)
    // eslint-disable-next-line
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // // eslint-disable-next-line
        localStorage.setItem(
            "user",
            JSON.stringify({ username: username, agreedTerms: agreedTerms })
        )
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            window.location.reload()
        }, 1000)
    }

    return (
        <div className="app-container">
            <div className="input-container">
                <form onSubmit={handleSubmit} className="username-section">
                    <h1 className="heading">Enter Username</h1>
                    <div className="username-input-container">
                        <input
                            required
                            placeholder="Enter Username"
                            type="text"
                            className="username-input"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
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
                        <label>
                            When you use our services, you&apos;re trusting us
                            with your information. We understand this is a big
                            responsibility and work hard to protect your
                            information and put you in control. Click here to
                            allow us collect your data.
                        </label>
                    </div>
                    <div className="submit-container">
                        <button type="submit" className="submit">
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

/*
<hr className="break-line" />
<div className="details-section">
    <h1 className="about-us">About us</h1>
    <br />

    <div className="about-us">
        This game is made to understand the
        human-microbial interactions and the activities
        that influence this relationship.
    </div>

    <div className="about-us">
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been
        the industry&apos;s standard dummy text ever
        since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type
        specimen book. It has survived not only five
        centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing
        software like Aldus PageMaker including versions
        of Lorem Ipsum.
    </div>
</div>
*/
