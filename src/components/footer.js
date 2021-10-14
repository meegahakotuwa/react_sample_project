import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () =>{
return(
<footer>
<div>
<Container>
  <Row>
    <Col>
    <div className="social">
    
    <a href="https://www.facebook.com/Bitzify-107652901014217" target="_blank" class="facebook"><i class="fab fa-facebook"></i></a>
    <a href="https://www.linkedin.com/company/bitzify-software-private-limited/" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
    <a href="https://www.twitter.com" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>

    </div>
</Col>
    <Col>
    <div className="copyright">
    Copyright &copy; 2021 Bitzify
    </div>
    </Col>
  </Row>

  </Container>

    
 </div>
</footer>

)

}
export default Footer;