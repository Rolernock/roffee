import { Container, Row, Col } from 'react-bootstrap'

export default function ServiceScreen() {
  const services = [
    {
      icon: 'images/icon1.png',
      title: 'Original Coffee',
      description:
        'Enjoy the rich aroma and authentic taste of our freshly brewed coffee, made from the finest beans.'
    },
    {
      icon: 'images/icon2.png',
      title: '20 Coffee Flavors',
      description:
        'Explore a variety of coffee flavors, from classic brews to innovative blends, tailored to your taste.'
    },
    {
      icon: 'images/icon3.png',
      title: 'Pleasant Ambience',
      description:
        'Relax in our cozy space designed for comfort, with a warm and welcoming atmosphere.'
    }
  ]

  return (
    <section className='py-5'>
      <Container>
        <div className='text-center mb-4'>
          <h1 className='fw-bold'>Services</h1>
          <p>
            Discover what makes our coffee shop special, from premium brews to
            an inviting setting.
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} sm={12} className='mb-4' key={index}>
              <div
                className={`p-4 text-center rounded shadow ${
                  index === 0 ? 'bg-light' : ''
                }`}
              >
                <div className='mb-3'>
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className='img-fluid mb-2'
                    style={{ maxHeight: '50px' }}
                  />
                </div>
                <h3 className='fw-bold mb-3'>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
