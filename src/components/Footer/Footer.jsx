import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { StyledFooter } from './StyledFooter';
import './footer.css';


const AppFooter = () => {
    return (
        <React.Fragment>
            <div id="footer"> 
            <Container>
            

                    <Row>

                        <Col>

                        <img 
                            src='https://www.alfredorafael.com/wp-content/uploads/2020/07/AlfredoTridentLogoWhite.png' 
                            style={{float: 'left', marginRight: '1%', marginTop: '-4.3%'}}
                            alt='Trident Logo' />

                            <strong className="store-name">Trident Booksellers & Cafe </strong>

                        </Col>

                        

                        <Col style={{float: 'left'}} className='store-info'>
                        338 Newbury Street Boston, MA 02115 <br/> 617-267-8688
                        </Col>


                    </Row>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default AppFooter;

