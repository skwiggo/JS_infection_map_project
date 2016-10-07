var Disease = function(options){
  this.name = options.name;
  this.eighteenthCentury = options.eighteenthCentury;
  this.facts = options.facts || [];
}

Disease.prototype = {
  addFact: function(fact) {
    this.facts.push(fact)
  }
}

module.exports = Disease;