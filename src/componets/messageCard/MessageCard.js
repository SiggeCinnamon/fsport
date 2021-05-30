import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import style from "./MessageCard.css";

const MessageCard = (data) => {
  const [show, setShow] = useState(true);
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
      {data && (
        <Card id={data.id} className="cardMain">
          <Card.Header className="cardHeader">
            <Container fluid>
              <Row>
                <Col className="cardTitle">
                  <Card.Title>
                    <h4>{data.title}</h4>
                  </Card.Title>
                </Col>
                <Col xs lg="3" className="fancyBox">
                  <div
                    className={style.markAsRead}
                    onClick={() => setShow(false)}
                  >
                    Mark as read
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Body className="cardBody">
            <div className="readMore">
              <p>
                {data.body.length > 150
                  ? `${data.body.substring(0, 150)}...`
                  : data.body}
              </p>
            </div>
            <Card.Footer className="cardFooter">
              <Container fluid>
                <div className="cardFooter">{date}</div>
              </Container>
            </Card.Footer>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
export default MessageCard;
