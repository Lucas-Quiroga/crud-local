import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const url = "https://crud-dash.netlify.app/";

const LogoutAuth0 = () => {
  const { logout } = useAuth0();
  return (
    <Container className="d-flex mx-auto ">
      <Button
        variant="secondary"
        onClick={() => logout({ logoutParams: { returnTo: url } })}
      >
        Log Out
      </Button>
    </Container>
  );
};

export default LogoutAuth0;
