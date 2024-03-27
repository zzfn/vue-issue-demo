class Person {
    name = 'John Doe'
    age = 25
    thiks = new Map()

    constructor() {
        this.init()
    }

    change() {
        this.age++
    }

    async init() {
        this.thiks.set('1', '2')
        const response = await fetch('https://api.ccw.es/v1/articles?limit=6&order=updated_at+desc')
        const json = await response.json()
        this.thiks.set(Math.random(), json.data)
    }
}

export default Person
