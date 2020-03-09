import { expect } from 'chai'

import { FetchExample } from '../../src/fetch-example'

describe('FetchExample', () => {
  const config = {
    url: 'http://some-url.com/'
  }

  let fetchExample: FetchExample

  beforeEach(() => {
    fetchExample = new FetchExample()
  })

  describe('#getData', () => {
    it('resolves the mocked data', async() => {
      return expect(await fetchExample.getData(config))
        .to.equal({})
    })
  })
})
