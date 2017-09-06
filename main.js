// modules 
   //inquire package for basic or cloze decision (Week 12.3 CLI Folder)
   var clozeCard = require("./ClozeCard.js");
   var basicCard = require("./BasicCard.js");


   if (process.argv[2] === "basic") {
    //new basic cards    
    var basicQuestion1 = new basicCard ("Jon Snow is from which house?", "Stark"); 
    var basicQuestion2 = new basicCard("Daenerys Targaryen's (Khaleesi) father was known as The Mad what?", "King");
    var basicQuestion3 = new basicCard( "Who is known for falling in love with her brother?", "Cersei Lannister");
   

    console.log(basicQuestion1.front);
    console.log(basicQuestion1.back);



}
   else {
       //new cloze cards 
    var clozeQuestion1 = new clozeCard ("Jon Snow", "You know nothing...","You know nothing Jon Snow");
    var clozeQuestion2 = new clozeCard ("Lannister","A ...always pays his debts","A Lannister always pays his debts");
    var clozeQuestion3 = new clozeCard ("Winter","... is coming","Winter is coming")

    console.log(clozeQuestion1.partial);
    console.log(clozeQuestion1.cloze);
    console.log(clozeQuestion1.full);



}