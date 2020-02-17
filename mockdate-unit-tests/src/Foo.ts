/**
 * Foo is an example class to illustrate mock datestamps
 */
class Foo {
  /**
   * Bar returns an object with a createdAt timestamp
   */
  public bar(firstname: string, lastname: string) {
    const name = `${firstname} ${lastname}`
    const createdAt = new Date().toISOString()

    return {
      name,
      createdAt
    }
  }
}

export { Foo }
