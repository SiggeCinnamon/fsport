import {
  Card,
  CardDeck,
  Container,
  Alert,
  Button,
  CardHeader,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./MessageCard.module.scss";
import ReactTextCollapse from "react-text-collapse";

const MessageCard = (data) => {
  const [show, setShow] = useState(true);
  const [readMore, setReadMore] = useState(false);
  let date = new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(data.timestamp);

  useEffect(() => {
    if (data.state === 1) {
      setShow(false);
    }
  }, []);

  return (
    <>
      {show && (
        <Card id={data.id} className={style.card}>
          <Card.Header>
            <Container fluid>
              <Card.Title className={style.cardTitle}>
                {data.title}
                <Col>
                  <div
                    className={style.markAsRead}
                    onClick={() => setShow(false)}
                  >
                    Mark as read
                  </div>
                </Col>
              </Card.Title>
            </Container>
          </Card.Header>
          <Card.Body className={style.cardBody}>
            <div className={style.readMore}>
              <p>
                {data.body.length > 150
                  ? `${data.body.substring(0, 150)}...`
                  : data.body}
              </p>
            </div>
            <Card.Footer className={style.cardFooter}>
              <Container fluid>
                <Row>
                  <Col>
                    <div className={style.timestamp}>{date}</div>
                  </Col>
                </Row>
              </Container>
            </Card.Footer>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default MessageCard;
