const fs = require('fs')

    class Container{
    constructor(object = {}){
     this.name = object?.name || ''
     this.price = object?.price || ''
     this.db = [];
     this.readJson = JSON.parse(fs.readFileSync('./js/data.json', 'utf-8'))
    }
    
    saveFile(obj){
        let db = [];

        db.push(...this.readJson, obj)
        fs.writeFileSync('./js/data.json', JSON.stringify(db))
        }

    getById(myId){
        this.readJson === '' ? {error: 'Producto no encontrado'} : ''
        
        const matchId = this.readJson.find((product)=> product.id === myId)
        return matchId == undefined ? {error: 'Producto no encontrado'} : matchId
        
    }
    deleteById(myId){
            const matchId = this.readJson.filter((product)=> product.id != myId)
            this.db.push(...matchId)

            fs.writeFileSync('./js/data.json', JSON.stringify(this.db))
        }

    editById(myId, name, price, tumbnail){ 
        const matchId = this.readJson.filter((product)=> product.id != myId)
        this.db.push(...matchId)
        fs.writeFileSync('./js/data.json', JSON.stringify(this.db))
        
        const data = {
             id: myId,
             name: name,
             price: price,
             tumbnail: tumbnail
        }
        this.db.push(data)
        fs.writeFileSync('./js/data.json', JSON.stringify(this.db))
    }

    deleteAll(){
        fs.writeFileSync('./js/data.json    ', JSON.stringify(this.db))
    }

    getAll(){
        return this.readJson
    }
}

module.exports = Container


// ---