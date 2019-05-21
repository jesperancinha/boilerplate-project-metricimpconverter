/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {

  this.getNum = function(input) {
    console.log(input);
    if(/^[a-zA-Z]+$/.test(input)){
      return 1;
    }
    if(!/^[0-9]+(\.[0-9]+){0,1}(\/[0-9]+){0,1}([a-zA-Z]*)$/.test(input)){
      var unit = this.getReturnUnit(this.getUnit(input));
      if(unit === 'invalid unit'){
        return 'invalid number and unit';
      }
      return 'invalid number';
    }
    var result;
    result = (input.substring(0,input.search(/[a-zA-Z]/)))
    if(result.indexOf("/")>0){
      var results = result.split("/");
      result = parseFloat(results[0])/parseFloat(results[1]);
    } else {
      result = parseFloat(result);
    }
    return result;
  };

  this.getUnit = function(input) {
    var result;
    result = input.substring(input.search(/[a-zA-Z]/));
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal': result = 'l'; break;
      case 'lbs': result = 'kg'; break;
      case 'mi': result = 'km'; break;
      case 'l': result = 'gal'; break;
      case 'kg': result = 'lbs'; break;
      case 'km': result = 'mi'; break;
      default: result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
        switch(unit.toLowerCase()){
      case 'l': result = 'liters'; break;
      case 'kg': result = 'kilograms'; break;
      case 'km': result = 'kilometers'; break;
      case 'gal': result = 'gallons'; break;
      case 'lbs': result = 'pounds'; break;
      case 'mi': result = 'miles'; break;
      default: result = unit;
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()){
      case 'gal': result = galToL * initNum; break;
      case 'lbs': result = lbsToKg * initNum; break;
      case 'mi': result = miToKm * initNum; break;
      case 'l': result = initNum /galToL; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'km': result = initNum /miToKm; break;
      default: result = initNum;
    }
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
