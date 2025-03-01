const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type : String , requried: true },
    age:{type : Number},
    email:{type: String, Unique:true, requried : true},
    created: {type :Date , default:Date.now }
});
