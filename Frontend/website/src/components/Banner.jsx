
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headerImg from '../assets/img/banner.png';
import TypingEffect from "./TypingEffect";

function BannerExample(){
    return(
        <section id='home' className='banner'>
            <Container>
                <Row className="Row-Container">
                    <Col>
                        <h1><TypingEffect /></h1>
                        <br />
                        <h2>Seit langem ist eine Investitions-Simulation mithilfe modernster Methoden auf unserem Quanten-Computer moeglich.</h2>
                        <br />
                        <a href="#invest"><button>investieren sie jetzt</button></a>
                        
                    </Col>
                    <Col>
                    
                        <div className="imgcontainer">
                            <img className='bannerimg' src={headerImg} alt="" />
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
}

export default BannerExample;