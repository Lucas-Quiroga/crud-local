import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "react-bootstrap";

const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className="d-flex mx-auto">
      <Button onClick={() => loginWithRedirect()} variant="light">
        Log In
      </Button>
    </Container>
  );
};

export default LoginAuth0;
