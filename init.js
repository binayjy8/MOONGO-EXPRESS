const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let allChats = [
    {
        from : "Neha",
        to : "Lipsa",
        msg : "Give me your exam notes",
        created_at : new Date(),
    },
    {
        from : "Rahul",
        to : "Chinmay",
        msg : "What are you doing",
        created_at : new Date(),
    },
    {
        from : "Dev",
        to : "Priya",
        msg : "When will be you get married",
        created_at : new Date(),
    },
    {
        from : "Manash",
        to : "Anjali",
        msg : "Where are you from",
        created_at : new Date(),
    },
    {
        from : "Diku",
        to : "Kajol",
    }
  ];


Chat.insertMany(allChats);