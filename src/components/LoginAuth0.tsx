import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginAuth0 = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Sign In</Button>
    )
  );
};

export default LoginAuth0;
