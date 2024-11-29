'use client';

import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function AuthError() {
  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <h1 className="text-center">Authentication Error</h1>
            <Card>
              <Card.Body>
                <Card.Title className="text-danger mb-4">Access Denied</Card.Title>
                <Card.Text>
                  Only UH students with @hawaii.edu email addresses can access this application.
                </Card.Text>
                <Card.Text>
                  Please sign in with your UH email address or contact support if you believe this is an error.
                </Card.Text>
                <Link href="/" passHref>
                  <Button variant="primary" className="w-100">
                    Return to Home
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}