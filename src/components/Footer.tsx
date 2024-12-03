import { Col, Container } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <Col className="text-center">
        Department of Information and Computer Sciences
        <br />
        University of Hawaii
        <br />
        Honolulu, HI 96822
      </Col>
    </Container>
  </footer>
);

export default Footer;
