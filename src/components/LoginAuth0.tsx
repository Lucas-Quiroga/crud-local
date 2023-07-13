import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "react-bootstrap";

const LoginAuth0 = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Container className="d-flex justify-content-center mx-auto align-items-center vh-100">
        <Button onClick={() => loginWithRedirect()}>Sign In</Button>
      </Container>
    )
  );
};

export default LoginAuth0;
