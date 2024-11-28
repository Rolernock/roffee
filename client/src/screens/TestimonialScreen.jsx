import { Container, Row, Col, Carousel } from 'react-bootstrap'

const testimonials = [
  {
    name: 'Monila',
    icon: 'images/quick-icon.png',
    feedback:
      'This platform has been a game-changer for our team. The support and functionality provided exceeded our expectations. Highly recommended for professionals looking to elevate their work!'
  },
  {
    name: 'John Doe',
    icon: 'images/quick-icon.png',
    feedback:
      'I have been using this service for over a year now, and it has consistently delivered outstanding results. The team behind it clearly values customer satisfaction.'
  },
  {
    name: 'Jane Smith',
    icon: 'images/quick-icon.png',
    feedback:
      'The user-friendly design and seamless experience made it incredibly easy to get started. I appreciate how much this platform has helped streamline my workflow.'
  }
]

export default function TestimonialScreen() {
  return (
    <section className='py-5'>
      <Container>
        <Row className='text-center mb-4'>
          <Col>
            <h1 className='fw-bold'>What Our Customers Say</h1>
            <p>
              Discover why thousands trust us to make their lives easier and
              their businesses better.
            </p>
          </Col>
        </Row>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Container>
                <Row className='justify-content-center'>
                  <Col md={8}>
                    <div className='p-4 text-center shadow rounded bg-light'>
                      <h4 className='mb-3'>
                        {testimonial.name}{' '}
                        <img
                          src={testimonial.icon}
                          alt={`${testimonial.name} icon`}
                          style={{ maxHeight: '30px', verticalAlign: 'middle' }}
                        />
                      </h4>
                      <p>{testimonial.feedback}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
