import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

export function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <div className="h5">
        <h5>Reset</h5>
      </div>
      <div className="main">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100 reset-pass" type="submit">
                Reset Password
            </Button>
            </Form>
            <div className="w-100 text-center mt-3 logout-login-btn">
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
        <div className="w-100 text-center mt-2" id="reset-signup-btn">
          Need an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
      <Footer />
    </>
  )
}