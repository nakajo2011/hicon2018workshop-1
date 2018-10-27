const SimpleStorage = artifacts.require('SimpleStorage')

contract('SimpleStorage', (accounts) => {
  it("should assert true", async () => {
    const simple_storage = await SimpleStorage.new();
    assert.isOk(simple_storage);
  })
  it("set and get test", async () => {
    const simple_storage = await SimpleStorage.new();
    await simple_storage.set(3)
    const actual = await simple_storage.get()
    assert.equal(3, actual)
  })
})
