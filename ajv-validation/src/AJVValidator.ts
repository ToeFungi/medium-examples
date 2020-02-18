import { Ajv } from 'ajv'

/**
 * AJV Validator provides typed data validation with AJV
 */
class AJVValidator {
  constructor(protected ajv: Ajv) {
  }

  /**
   * Validate some data against some given schema and ensure the data is typed appropriately according to the generic
   * provided
   */
  public validate<T>(data: T, schema: object): Promise<T> {
    /**
     * Validate the given data against the given schema
     */
    const validateAgainstSchema = () => this.ajv.validate(schema, data)

    /**
     * Determine if the given data is valid, throw an error containing the relevant error messages if there is an error
     */
    const determineIsValid = (isValid: boolean) => {
      if (!isValid) {
        const errors = this.ajv.errorsText()
        throw new Error(errors)
      }
    }

    /**
     * Perform any data manipulation you may need to before returning the data
     */
    const formatData = () => data

    // Wrap in promise
    return Promise.resolve()
      .then(validateAgainstSchema)
      .then(determineIsValid)
      .then(formatData)
  }
}

export { AJVValidator }
