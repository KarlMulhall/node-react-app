const request = require('supertest')
const { app, server } = require('../server.js')

afterAll((done) => {
    console.log('Closing server...')
    server.close(done)
    // console.log('Server:', server)
  
    // if (server) {
    //   server.close((e) => {
    //     if (e) {
    //       console.error('Error closing server:', e)
    //     } else {
    //       console.log('Server closed successfully.')
    //     }
    //     done()
    //   })
    // } else {
    //   console.log('Server is null or undefined.')
    //   done()
    // }
})

describe('GET /country/:name', () => {
    it('Should return correct country capital data for a valid country', async() => {
        const res = await request(app).get('/country/ireland')

        expect(res.status).toBe(200)
        expect(res.body[0].capital[0]).toBe('Dublin')
    })

    it('Should return correct official name data for a valid country', async() => {
        const res = await request(app).get('/country/united states')

        expect(res.status).toBe(200)
        expect(res.body[0].name.official).toBe('United States of America')
    })

    it('Should return correct region data for a valid country', async() => {
        const res = await request(app).get('/country/peru')

        expect(res.status).toBe(200)
        expect(res.body[0].region).toBe('Americas')
    })

    it('Should return correct raw currency data for a valid country that will be refined later by the frontend', async() => {
        const res = await request(app).get('/country/zimbabwe')

        console.log(res.body[0].currencies[0])

        expect(res.status).toBe(200)
        expect(res.body[0].currencies.ZWL).toBeDefined()
    })

    it('Should return population data for a valid country', async() => {
        const res = await request(app).get('/country/germany')

        expect(res.status).toBe(200)
        // Only data that will be subject to change so instead of looking for an exact
        // value, instead we look to see that a value exists.
        expect(res.body[0].population).toBeDefined()
    })

    it('Should return correct demonym data for a valid country', async() => {
        const res = await request(app).get('/country/italy')

        expect(res.status).toBe(200)
        expect(res.body[0].demonyms.eng.m).toBe('Italian')
    })

})

describe('GET /country/INVALID COUNTRY', () => {

    it('Should return Not Found for an invalid country name', async() => {
        const res = await request(app).get('/country/INVALID COUNTRY')

        expect(res.body).toHaveProperty('message', 'Not Found')
    })

})

describe('GET /country/welcome/index', () => {

    it('Should return welcome screen information', async() => {
        const res = await request(app).get('/country/welcome/index')

        expect(res.status).toBe(200)
        expect(res.body[0].name.official).toBe('Search for a country using the text bar above')
        expect(res.body[0].flags.png).toBe('/bounce-links.png')
    })

})