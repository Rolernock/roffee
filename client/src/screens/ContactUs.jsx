import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { sendMessage } from '../slices/messageSlice'

export default function ContactScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState = { name: '', email: '', phone: '', message: '' }
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({}) // For storing error messages

  const { name, email, phone, message } = formData

  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const data = await dispatch(sendMessage(formData)).unwrap()

      data.msg && navigate('/')
    } catch (error) {
      if (error && error.length) {
        const errorMessages = error.reduce((acc, err) => {
          acc[err.path] = err.msg
          return acc
        }, {})
        setErrors(errorMessages)
      }
    }
  }

  return (
    <section className='py-5 bg-light'>
      <Container>
        <div className='text-center mb-5'>
          <h1 className='fw-bold'>Contact Us</h1>
          <p className='text-muted'>
            We'd love to hear from you! Get in touch with us below.
          </p>
        </div>
        <Row>
          <Col md={6}>
            <Card className='shadow-sm'>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control
                      type='text'
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={handleChange}
                      isInvalid={errors.name}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={handleChange}
                      isInvalid={errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formPhone'>
                    <Form.Control
                      type='tel'
                      placeholder='Phone Number'
                      name='phone'
                      value={phone}
                      onChange={handleChange}
                      isInvalid={errors.phone}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formMessage'>
                    <Form.Control
                      as='textarea'
                      rows={5}
                      placeholder='Message'
                      name='message'
                      value={message}
                      onChange={handleChange}
                      isInvalid={errors.message}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button type='submit' variant='primary' className='w-100'>
                    SEND
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information Section */}
          <Col md={6}>
            <Card className='bg-primary text-white shadow-sm'>
              <Card.Body>
                <h4 className='mb-4'>Get in Touch</h4>
                <p>
                  <strong>Address:</strong> Murang'a, 100m east of Magunas
                  Supermarket, near the intersection of Muwasco and Rubis.
                </p>
                <p>
                  <strong>Email:</strong> rolernockgoines@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +254 791483839
                </p>
                <p>
                  <strong>Business Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
