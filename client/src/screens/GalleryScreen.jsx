import { Container, Row, Col } from 'react-bootstrap'

export default function GalleryScreen() {
  const images = [
    'images/img-1.png',
    'images/img-2.png',
    'images/img-3.png',
    'images/img-4.png',
    'images/img-5.png',
    'images/img-6.png',
    'images/img-7.png',
    'images/img-8.png',
    'images/img-9.png'
  ]

  return (
    <section className='py-5'>
      <Container>
        <div className='text-center mb-4'>
          <h1 className='fw-bold'>Our Gallery</h1>
          <p>
            Explore moments captured at our shop. From cozy corners to special
            events, our gallery showcases the heart of our coffee experience.
          </p>
        </div>
        <Row>
          {images.map((src, index) => (
            <Col md={4} className='mb-4' key={index}>
              <div className='position-relative overflow-hidden'>
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className='img-fluid rounded'
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
