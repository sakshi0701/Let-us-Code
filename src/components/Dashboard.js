import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./dash.css";
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer";

export function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Navbar />
      <div class="main">
        <button class="btn">
          <a href="/resources">
            Resources
          </a>
        </button>
        <button class="btn">
          <a href="/code">
            Start Coding!
          </a>
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p><strong>Email:</strong> {currentUser.email} </p>
          <Link to="/update-profile" className="update-btn">
            Update Profile
          </Link>
        </div>
      </div>
      <div className="profile w-100 text-center mt-2 mb-10">
        <button className="logout-login-btn" variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <Footer />
    </>
  )
}