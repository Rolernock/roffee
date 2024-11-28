import { Carousel } from 'react-bootstrap'

export default function HomeScreen() {
  const slides = [
    {
      heading: 'Outstanding',
      subheading: 'Coffee Shop',
      text: 'Discover the finest coffee blends and an inviting ambiance. Our coffee shop offers an exceptional experience with each sip.',
      background: 'images/img-10.png'
    },
    {
      heading: 'Freshly Brewed',
      subheading: 'Every Day',
      text: 'Experience the aroma of freshly brewed coffee, crafted to perfection just for you.',
      background: 'images/img-9.png'
    },
    {
      heading: 'Cozy Spaces',
      subheading: 'Perfect for You',
      text: 'Relax and unwind in our cozy and welcoming spaces, designed for your comfort.',
      background: 'images/img-8.png'
    }
  ]

  return (
    <Carousel id='main_slider' indicators={false} controls={true} fade>
      {slides.map((slide, index) => (
        <Carousel.Item
          key={index}
          style={{
            backgroundImage: `url(${slide.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Full-screen height
            color: 'white' // Ensure text is visible
          }}
        >
          <div
            className='d-flex flex-column justify-content-center align-items-center h-100 text-center'
            style={{ background: 'rgba(0, 0, 0, 0.5)' }} // Optional dark overlay for better text readability
          >
            <h1 className='text-uppercase fw-bold'>{slide.heading}</h1>
            <h2 className='text-warning'>{slide.subheading}</h2>
            <p>{slide.text}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
