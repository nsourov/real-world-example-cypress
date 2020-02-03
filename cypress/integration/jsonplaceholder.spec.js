describe('Test jsonplaceholder post request', function () {
  it('Should send request to jsonplaceholder', function () {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'First Post',
      userId: 1,
      body: 'bar',
    }).then((response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('title', 'First Post') // true
    })
  })
})
