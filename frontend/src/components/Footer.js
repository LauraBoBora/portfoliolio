import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Footer(props) {
    return (
        <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Thanks for reading my blog.</Card.Title>
          <Card.Text>
            Copyright © 2023 Laura Ostering
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
  
export default Footer;