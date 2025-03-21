/**
 * Swagger Functions Store - OpenAPI 3.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerFunctionsStoreOpenApi30);
  }
}(this, function(expect, SwaggerFunctionsStoreOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerFunctionsStoreOpenApi30.FunctionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FunctionApi', function() {
    describe('batchRunFunction', function() {
      it('should call batchRunFunction successfully', function(done) {
        //uncomment below and update the code to test batchRunFunction
        //instance.batchRunFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFunction', function() {
      it('should call createFunction successfully', function(done) {
        //uncomment below and update the code to test createFunction
        //instance.createFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllFunctions', function() {
      it('should call deleteAllFunctions successfully', function(done) {
        //uncomment below and update the code to test deleteAllFunctions
        //instance.deleteAllFunctions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listFunctions', function() {
      it('should call listFunctions successfully', function(done) {
        //uncomment below and update the code to test listFunctions
        //instance.listFunctions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mapFunction', function() {
      it('should call mapFunction successfully', function(done) {
        //uncomment below and update the code to test mapFunction
        //instance.mapFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('runFunction', function() {
      it('should call runFunction successfully', function(done) {
        //uncomment below and update the code to test runFunction
        //instance.runFunction(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchFunctionsByName', function() {
      it('should call searchFunctionsByName successfully', function(done) {
        //uncomment below and update the code to test searchFunctionsByName
        //instance.searchFunctionsByName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchFunctionsByTags', function() {
      it('should call searchFunctionsByTags successfully', function(done) {
        //uncomment below and update the code to test searchFunctionsByTags
        //instance.searchFunctionsByTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFunctionConfigFunctionConfigPost', function() {
      it('should call updateFunctionConfigFunctionConfigPost successfully', function(done) {
        //uncomment below and update the code to test updateFunctionConfigFunctionConfigPost
        //instance.updateFunctionConfigFunctionConfigPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
