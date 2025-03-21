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


import ApiClient from "../ApiClient";
import FunctionJob from '../model/FunctionJob';
import HTTPValidationError from '../model/HTTPValidationError';
import JobStatus from '../model/JobStatus';

/**
* FunctionJob service.
* @module api/FunctionJobApi
* @version 0.0.1
*/
export default class FunctionJobApi {

    /**
    * Constructs a new FunctionJobApi. 
    * @alias module:api/FunctionJobApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getFunctionJob operation.
     * @callback module:api/FunctionJobApi~getFunctionJobCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FunctionJob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Function Job
     * Get the details of a specific function job.  Parameters:     function_job_id: ID of the function job to retrieve  Returns:     Function job details including status, inputs, and outputs  Raises:     HTTPException: If job is not found (404)
     * @param {Number} functionJobId 
     * @param {module:api/FunctionJobApi~getFunctionJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FunctionJob}
     */
    getFunctionJob(functionJobId, callback) {
      let postBody = null;
      // verify the required parameter 'functionJobId' is set
      if (functionJobId === undefined || functionJobId === null) {
        throw new Error("Missing the required parameter 'functionJobId' when calling getFunctionJob");
      }

      let pathParams = {
        'function_job_id': functionJobId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FunctionJob;
      return this.apiClient.callApi(
        '/functionJob/{function_job_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFunctionJobs operation.
     * @callback module:api/FunctionJobApi~getFunctionJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FunctionJob>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Function Jobs
     * Get all jobs for a specific function with optional filtering and pagination.
     * @param {Number} functionId ID of the function to get jobs for
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] Maximum number of jobs to return
     * @param {Number} [offset] Number of jobs to skip
     * @param {module:model/JobStatus} [status] Filter by job status
     * @param {Date} [startDate] Filter jobs after this date
     * @param {Date} [endDate] Filter jobs before this date
     * @param {module:api/FunctionJobApi~getFunctionJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FunctionJob>}
     */
    getFunctionJobs(functionId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'functionId' is set
      if (functionId === undefined || functionId === null) {
        throw new Error("Missing the required parameter 'functionId' when calling getFunctionJobs");
      }

      let pathParams = {
        'function_id': functionId
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'status': opts['status'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [FunctionJob];
      return this.apiClient.callApi(
        '/function/{function_id}/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getJobsStatus operation.
     * @callback module:api/FunctionJobApi~getJobsStatusCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FunctionJob>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Jobs Status
     * Get status of multiple jobs.  Parameters:     job_ids: List of job IDs to check  Returns:     List of job statuses
     * @param {Array.<Number>} jobIds 
     * @param {module:api/FunctionJobApi~getJobsStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FunctionJob>}
     */
    getJobsStatus(jobIds, callback) {
      let postBody = null;
      // verify the required parameter 'jobIds' is set
      if (jobIds === undefined || jobIds === null) {
        throw new Error("Missing the required parameter 'jobIds' when calling getJobsStatus");
      }

      let pathParams = {
      };
      let queryParams = {
        'job_ids': this.apiClient.buildCollectionParam(jobIds, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [FunctionJob];
      return this.apiClient.callApi(
        '/function/job/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listFunctionJobs operation.
     * @callback module:api/FunctionJobApi~listFunctionJobsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FunctionJob>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all function jobs with optional filtering
     * List all function jobs with optional filtering and pagination.  Parameters:     limit: Maximum number of jobs to return (default: all)     offset: Number of jobs to skip for pagination (default: 0)     status: Filter by job status (e.g., PENDING, RUNNING, COMPLETED, FAILED)     function_id: Filter jobs for a specific function     start_date: Include jobs created after this date     end_date: Include jobs created before this date  Returns:     List[FunctionJob]: A filtered list of function jobs
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] Maximum number of jobs to return
     * @param {Number} [offset] Number of jobs to skip
     * @param {module:model/JobStatus} [status] Filter by job status
     * @param {Number} [functionId] Filter by function ID
     * @param {Date} [startDate] Filter jobs after this date
     * @param {Date} [endDate] Filter jobs before this date
     * @param {module:api/FunctionJobApi~listFunctionJobsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FunctionJob>}
     */
    listFunctionJobs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'status': opts['status'],
        'function_id': opts['functionId'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [FunctionJob];
      return this.apiClient.callApi(
        '/functionJobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
