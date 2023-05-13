import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function About({ about }) {
    return (
        <Card>
      <div>
        <h2>{about.name}</h2>
        <h3>{about.email}</h3>
        <p>{about.bio}</p>
      </div>
      </Card>
    );
  }
  
  export default About;