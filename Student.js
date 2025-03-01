const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    branch: { type: String, required: true },
    email: {type: String, requried: true}
});

const Student = mongoose.model('Student', StudentSchema);
mongoose.connect('mongodb://localhost:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connection established successfully"))
    .catch(err => console.log("Database connection failed due to: " + err))

app.post("/addstudent", (req, res) => {
    let student = new Student({
        name: 'Harshith',
        age: 22,
        branch: 'IT',
        email: 'pandemharshith@gmail.com'
    });

    student.save()
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error saving student data");
        });
