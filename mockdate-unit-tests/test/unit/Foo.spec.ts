import { set as setMockDate, reset as resetMockDate } from 'mockdate'

import { Foo } from '../../src/Foo'

describe('Foo', () => {
  const mockedDate = '2020-02-17T05:31:52.801Z'

  let foo

  beforeEach(() => {
    setMockDate(mockedDate)

    foo = new Foo()
  })

  afterEach(() => {
    resetMockDate()
  })

  describe('#bar', () => {
    const firstname = 'Becky'
    const lastname = 'Ben'

    it('returns the appropriately formatted object with stubbed `createdAt` timestamp', () => {
      const expectedResponse = {
        createdAt: mockedDate,
        name: `${firstname} ${lastname}`
      }

      return foo.bar(firstname, lastname)
        .should.deep.equal(expectedResponse)
    })
  })
})
