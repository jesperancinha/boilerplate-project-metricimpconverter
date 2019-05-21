/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      if(initNum.indexOf && initNum.indexOf('invalid') === 0){
        res.send(initNum);
      } else {
        var initUnit = convertHandler.getUnit(input);
        if(initUnit === 'invalid unit'){
          res.send('invalid unit');
        } else {
          var returnNum = convertHandler.convert(initNum, initUnit);
          if(returnNum === 'invalid number'){
            res.send('invalid number');
          } else {
            var returnUnit = convertHandler.getReturnUnit(initUnit);
            if(returnUnit === 'invalid unit'){
              res.send('invalid unit');
            } else {
              var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

              res.json(
                {initNum: initNum,
                 initUnit: initUnit,
                 returnNum: returnNum,
                 returnUnit: returnUnit,
                 string: toString
                });
            }
          }
        }
      }
    });

};
