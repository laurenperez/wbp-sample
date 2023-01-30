const data = require("./data.json");

// Write your code inside the provided functions.
// Note: Avoid changing the names of the functions, as this will cause your tests to automatically fail.

// Exercise 1

/* To familiarize you with the data, your first assignment is an easy one. 
Your team lead tells you that before providing data to other departments it's 
important to remove any duplicate records. Fortunately for you, all duplicates 
in the system have already been marked with `"Open - Dup"` in the `"status"` field. 
Return the  complete list of data with all duplicate records removed. */

const removeDuplicateRecords = function (data) {};

// Exercise 2

/* Your manager tells you that two police precincts recently merged and
 the records need to be updated to reflect that change. Per her request, all records 
 marked as `"police district": "9"` should be updated to `"police district": "12"`. 
 Return the complete list of data with the required updates. */

const updatedPoliceDistrict = function (data) {};

// Exercise 3

/* The maintenance department is working on a new system that will plot 
service locations on a map for their dispatchers. The department has 
requested a condensed version of the data with only the following 
fields `service_request_number, street_address, zip_code, latitude, longitude` 
Return the complete list of data, with each object containing only the requested fields. */

const extractLocationData = function (data) {};

// Exercise 4

/* Field technicians have requested a tool where they can look up 
specific records for the service requests they are responding to. These 
technicians are usually only provided with an id and an address from the dispatchers. 
The dept has asked that you create a quick lookup tool that allows them to 
request the full record details by providing the service id number. */

const findById = function (data, id) {};

// Exercise 5

/* Your manager asks if you can provide a summary containing 
how many outages were reported in each zip code. This information is very 
important and could be used to determine increased funding to areas 
that are currently under serviced. */

const numberByZip = function (data) {};