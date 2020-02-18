import { SinonSandbox } from 'sinon'

/**
 * Mock out the relevant AJV methods that are being called in the code
 */
const MockAJV = (sandbox: SinonSandbox) => ({
  validate: sandbox.stub(),
  errorsText: sandbox.stub()
})

export { MockAJV }
