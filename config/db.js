const mongoose = require('mongoose');
const URI = `mongodb+srv://muhammadrabebe:JqcUgdLGWLjvLQQU@paymenttracker.uzbha.mongodb.net/paymentTracker?
retryWrites=true&w=majority`
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB;