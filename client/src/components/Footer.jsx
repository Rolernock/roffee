import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='text-center'>
          <p>RolerCoffee &copy; {currentYear}</p>
        </Col>
      </Row>
    </Container>
  )
}
