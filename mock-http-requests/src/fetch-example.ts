class FetchExample {
  public getData(config: object) {
    return fetch(config['url'])
      .then((response: Response) => response.json())
      .catch(console.error)
  }
}

export { FetchExample }
