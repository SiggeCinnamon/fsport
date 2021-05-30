import NavBar from "../../componets/navbar/Navbar";
import style from "./Account.module.scss";
import { Jumbotron, Container } from "react-bootstrap";

const Account = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
      <Jumbotron>Account</Jumbotron>
      </Container>
    </>
  );
};
export default Account;
