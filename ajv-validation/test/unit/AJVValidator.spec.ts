import { createSandbox } from 'sinon'

import { MockAJV } from '../mocks/MockAJV'
import { AJVValidator } from '../../src/AJVValidator'

import * as nameSchema from '../../schemas/name-schema.json'

describe('AJVValidator', () => {
  const sandbox = createSandbox()

  let ajv: any
  let validator: AJVValidator

  beforeEach(() => {
    ajv = MockAJV(sandbox)

    validator = new AJVValidator(ajv)
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('#validate', () => {
    it('resolves when the data provided is valid', () => {
      const validData = {
        name: 'some-name'
      }

      ajv.validate
        .onFirstCall()
        .returns(true)

      return validator.validate(validData, nameSchema)
        .should.become(validData)
    })

    it('rejects with an appropriate error', () => {
      const invalidData = {
        other: 'some-name'
      }

      ajv.validate
        .onFirstCall()
        .returns(false)

      ajv.errorsText
        .onFirstCall()
        .returns('Something strange is afoot.')

      return validator.validate(invalidData, nameSchema)
        .should.be.rejectedWith(Error, 'Something strange is afoot.')
    })
  })
})
