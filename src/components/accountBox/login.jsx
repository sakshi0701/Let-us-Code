import React, { useContext,useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export default function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dash")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <BoxContainer>
      {error && <Alert variant="danger">{error}</Alert>}
      <FormContainer>
        <Input type="email" placeholder="Email" ref={emailRef} required/>
        <Input type="password" placeholder="Password" ref={passwordRef} required />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="/forgot-password">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleSubmit}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
