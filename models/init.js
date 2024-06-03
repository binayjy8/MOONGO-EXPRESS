const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let allChats = [
    {
        from : "Neha",
        to : "Lipsa",
        msg : "Give me your exam notes",
        created_at : new Date(),
    }
]

chat1.save().then((res) => {
    console.log(res);
}).catch ((err) => {
    console.log(err);
});