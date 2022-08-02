import React from "react"

export const changeUsername = ({ user, setUser, loading, setLoading, setOpen }) => {

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify(user))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false)
        }, 1000)
    }

    return (
        <div className="change-input-container">
            <input 
                className="change-input" 
                value={user.username}
                onChange={(e) => setUser({...user, username : e.target.value})}
            />
            <button onClick={handleSubmit} className="change-button">{loading ? "Loading..." : "Update"}</button>
        </div>
    )
}