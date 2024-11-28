import { check } from 'express-validator'

export const validateMessage = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Provide a valid email').isEmail().normalizeEmail(),
  check('phone', 'Phone number is required').notEmpty(),
  check('message', 'Message is required').notEmpty()
]
