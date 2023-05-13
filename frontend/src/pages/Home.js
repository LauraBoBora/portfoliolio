import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap'; 

function Home(props) {
    return (
        <Card className = "mb-3" style={{color: "#000"}}>
            <Card.Img src=""/>
            <Card.Body>
                <Card.Title>
                    Laura Ostering
                </Card.Title>
                <Card.Img fluid src="https://imgur.com/BRqI5So.png" />
                <Card.Text>
                    please peruse 
                </Card.Text>
            </Card.Body>
        </Card>
    )
  }
  
  export default Home;