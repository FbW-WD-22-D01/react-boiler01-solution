import './App.css';
import {data} from './data.js'
import CardComponent from './CardComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  return (
    <div className="App">
      <h1>Übung für Komponenten</h1>
        <Row xs={1} sm={2} md={3} xl={4} >
            {data.map((el,index) =>{
              return(
                <Col>
                  <CardComponent key={`meinKey-${index}`} info={el} /> 
                </Col>)
            })}
        </Row>
    </div>
  );
}

export default App;
