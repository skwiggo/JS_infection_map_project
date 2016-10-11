var Disease = function(options){
  this.name = options.name;
  this.nineteenthCentury = options.nineteenthCentury;
  this.twentiethCentury = options.twentiethCentury;
  this.presentDay = options.presentDay;
  this.twentySecondCentury = options.twentySecondCentury;
  this.facts = options.facts || [];
}

Disease.prototype = {
  addFact: function(fact) {
    this.facts.push(fact)
  }
}

module.exports = Disease;