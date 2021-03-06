import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
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
          Resources
        </button>
        <button class="btn">
          Code
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
        <button className="logout-btn" variant="link" onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <Footer />
    </>
  )
}