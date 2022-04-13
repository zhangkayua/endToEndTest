describe('test ftms homepage', function () {
  beforeEach(function () {
    cy.visit('https://ftms-website-pc-dev.ftms.com.cn/')
  })

  it('test title', function () {
    cy.title().should('include', '一汽丰田官方网站')
  })
})
