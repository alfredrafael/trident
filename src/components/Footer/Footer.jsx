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
                            <span style={{float: 'right', marginRight: '10%', marginTop: '-4.3%'}}> Trident Booksellers & Cafe <br/> 338 Newbury Street <br/> Boston, MA 02115 | 617-267-8688</span>
                        </Col>

                        <Col>
                            <img 
                            src='https://www.alfredorafael.com/wp-content/uploads/2020/07/AlfredoTridentLogoWhite.png' 
                            style={{float: 'right', marginRight: '10%', marginTop: '-4.3%'}}
                            alt='Trident Logo' />
                            
                        </Col>

                    </Row>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default AppFooter;

