import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Card, Button, Image } from 'react-bootstrap';

function Projects({ projects }) {
    return (
        projects.map((project) => (
            <Container className="mb-3 mt-3">
                <Card>
                    <Card.Title style={{fontSize: "50px"}}>{project.name}</Card.Title>
                    <Image rounded thumbnail fluid src={project.image} />
                    <Button href={project.live} target="_blank" variant="secondary" size="lg">Live Link</Button>
                    <Button href={project.git} target="_blank" variant="primary" size="lg">Github</Button>
                </Card>
            </Container>
    )))
  }
  
  export default Projects;