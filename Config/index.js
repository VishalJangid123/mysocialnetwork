module.exports = {
    port : process.env.PORT || 3000,
    mongo_url: process.env.MONGO_URL || 'mongodb://127.0.0.1/27017',
    secret: process.env.SECRET || "MyNameIsVishal"
}