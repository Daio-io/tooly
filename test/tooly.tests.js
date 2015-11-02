'use strict';

var expect = require('chai').expect;
var tooly = require('../tooly/tooly.js');

describe('Util Tools', function () {

  describe('existy', function () {

    it('should return false if nothing is passed in', function () {

      expect(tooly.existy()).to.equal(false);
      expect(tooly.existy(undefined)).to.equal(false);
      expect(tooly.existy(null)).to.equal(false);
      expect(tooly.existy('')).to.equal(false);

    });

    it('should return true when value passed in', function () {

      expect(tooly.existy([])).to.equal(true);
      expect(tooly.existy({})).to.equal(true);
      expect(tooly.existy('hello')).to.equal(true);

    });

    it('should return false when string of value "null" or "undefined" passed in', function () {

      expect(tooly.existy('null')).to.equal(false);
      expect(tooly.existy('undefined')).to.equal(false);

    });

  });

  describe('cleansey', function () {

    it('should keep spaces', function () {

      var word = 'hello world';
      var cleansed = tooly.cleansey(word);
      expect(cleansed).to.equal(word);

    });

    it('should keep capital letters', function () {

      var word = 'HelLo WorLd';
      var cleansed = tooly.cleansey(word);
      expect(cleansed).to.equal(word);

    });

    it('should keep hyphens letters', function () {

      var word = 'HelLo-WorLd--';
      var cleansed = tooly.cleansey(word);
      expect(cleansed).to.equal(word);

    });

    it('should remove numbers', function () {

      var cleansed = tooly.cleansey('22h3llo');
      expect(cleansed).to.equal('hllo');

    });

    it('should remove special characters', function () {

      var cleansed = tooly.cleansey('cr@zy\n word!@£$%^&*()_+{}":|?><~/.,\';][=§±');
      expect(cleansed).to.equal('crzy word');

    });

    it('should return empty string if passed empty value', function () {

      expect(tooly.cleansey()).to.be.empty;

    })

  });

  describe('removey', function () {

    it('should return string with removed value', function () {

      var replaced = tooly.removey('h', 'hello');
      expect(replaced).to.equal('ello');

    });

    it('should return empty string if not provided with string', function () {

      var word = 'hello';
      var objs = [
        [],
        {},
        123,
        null,
        undefined
      ];

      objs.forEach(function (remove) {

        var res = tooly.removey(remove, word);
        expect(res).to.be.empty;

      });

    });

  });

  describe('clippy', function () {

    it('should return clipped string', function () {

      var longString = 'hello i am a long string';
      var clippedString = tooly.clippy(longString, 5);

      expect(clippedString).to.have.length(5);

    });

    it('should ignore clips longer than actual string length', function () {

      var longString = 'hello I am a long string';
      var clippedString = tooly.clippy(longString, 100);

      expect(clippedString).to.have.length(longString.length);

    });

    it('should clip 0 or less to empty', function () {

      var longString = 'hello I am a long string';
      var clippedString = tooly.clippy(longString, 0);

      expect(clippedString).to.have.length(0);
      expect(clippedString).to.be.empty;

      var minusString = tooly.clippy(longString, -1);

      expect(minusString).to.have.length(0);
      expect(minusString).to.be.empty;

    });

    it('should return empty string if string not passed in', function () {

      expect(tooly.cleansey()).to.be.empty;
      expect(tooly.cleansey({})).to.be.empty;
      expect(tooly.cleansey([])).to.be.empty;
      expect(tooly.cleansey(null)).to.be.empty;
      expect(tooly.cleansey(undefined)).to.be.empty;

    });

  })

  describe('clippy', function () {

    it('should return clipped string', function () {

      var longString = 'hello i am a long string';
      var clippedString = tooly.clippy(longString, 5);

      expect(clippedString).to.have.length(5);

    });

    it('should ignore clips longer than actual string length', function () {

      var longString = 'hello I am a long string';
      var clippedString = tooly.clippy(longString, 100);

      expect(clippedString).to.have.length(longString.length);

    });

    it('should clip 0 or less to empty', function () {

      var longString = 'hello I am a long string';
      var clippedString = tooly.clippy(longString, 0);

      expect(clippedString).to.have.length(0);
      expect(clippedString).to.be.empty;

      var minusString = tooly.clippy(longString, -1);

      expect(minusString).to.have.length(0);
      expect(minusString).to.be.empty;

    });

    it('should return empty string if string not passed in', function () {

      expect(tooly.cleansey()).to.be.empty;
      expect(tooly.cleansey({})).to.be.empty;
      expect(tooly.cleansey([])).to.be.empty;
      expect(tooly.cleansey(null)).to.be.empty;
      expect(tooly.cleansey(undefined)).to.be.empty;

    });

  });

  describe('inty', function () {

    it('should convert string to integer value', function () {

      expect(tooly.inty("123")).to.equal(123);

    });

    it('should round floats/doubles string to integer', function () {

      expect(tooly.inty("10.50")).to.equal(10);

    });

    it('should return 0 when not a number', function () {

      expect(tooly.inty({})).to.equal(0);
      expect(tooly.inty([])).to.equal(0);
      expect(tooly.inty(function () {
      })).to.equal(0);
      expect(tooly.inty("NOT A NUMBER")).to.equal(0);
      expect(tooly.inty()).to.equal(0);

    });

  });

  describe('floaty', function () {

    it('should convert string to float value', function () {

      expect(tooly.floaty("12.23")).to.equal(12.23);

    });

    it('should return 0 when not a number', function () {

      expect(tooly.inty({})).to.equal(0);
      expect(tooly.inty([])).to.equal(0);
      expect(tooly.inty(function () {
      })).to.equal(0);
      expect(tooly.inty("NOT A NUMBER")).to.equal(0);
      expect(tooly.inty()).to.equal(0);

    });

  });


  describe('defaulty', function () {

    var someDefault = 'some_default';

    it('should return the value if exists', function () {

      var arr = [];
      var obj = {};
      var func = function() {};
      expect(tooly.defaulty('hello', someDefault)).to.equal('hello');
      expect(tooly.defaulty(arr, someDefault)).to.equal(arr);
      expect(tooly.defaulty(obj, someDefault)).to.equal(obj);
      expect(tooly.defaulty(func, someDefault)).to.equal(func);

    });

    it('should return a default if value does not exist', function () {


      expect(tooly.defaulty('', someDefault)).to.equal(someDefault);
      expect(tooly.defaulty(null, someDefault)).to.equal(someDefault);
      expect(tooly.defaulty(undefined, someDefault)).to.equal(someDefault);

    });

    it('should return undefined value does not exist and no default provided', function () {

      expect(tooly.defaulty()).to.be.undefined;

    });

  });

});
