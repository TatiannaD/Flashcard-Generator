//Clozecard with three parameters 

var clozeCard = function(cloze, partial, full) {
    this.cloze = cloze;
    this.partial = partial;
    this.full = full;
}

//exporting variables to main js page
module.exports = clozeCard;