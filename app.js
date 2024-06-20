const express = require("express");
const app = express();
const PORT = 5024;


const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "JUST MAYBE",
    "Very doubtful"
  
  ]
function getRandom(){
   return  Math.floor(Math.random() * (magic8Responses.length - 1))

}
 app.get('/magic',(req,res)=>{
    res.send(magic8Responses[getRandom()])
 }
 )
app.get('/',(request, response)=> {
    response.send("Well hello there")
})

app.get('/terminator',(request, response)=>{
    response.send("I'll be back!");
});

app.get('/PulpFiction',(request,response)=> {
    response.send("The absence of evidence is NOT evidence of absence")
})
app.get('/StewieGriffen',(request, response)=>{
    response.send("I'll get you!")
});
app.get('/lilJohn',(request,response)=> {
    response.send("Turn down for what??")
});
app.get('/Obama',(request,response)=>{
    response.send("something inspirational about Black and Brown folk")
})

app.get('/handsmade',(request,response)=>{
    response.send("May the lord open")
})

app.get('/woody',(request,response)=>{
    response.send("There's a snake in my boot")
})

app.get('/hueyfreeman', (req,res)=> {
    res.send("We could all be reading a book right now")
})

app.get('/Thugnifficent',(req,res)=> {
    res.send("Come bask in all this thug-nifficence")
})







app.listen(PORT,()=>{
    console.log(`LISTENING on ${PORT}`)
})

