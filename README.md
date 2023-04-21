Background: 

I was asked to contribute several new "WBP" packages to the SEI 2.0 curriculum. Part of the new curriculum involves giving students a real world "work-based-problem" to solve that correspond with the main lesson objectives. The problem should provide a full context scenario and be structured just like what they may encounter in their first developer job. 

 - Lesson objectives are repeated within these exercises, along with context on how the exercise assessment fulfills those objectives.
 - Students are given "Requirements" which are broad overviews of each task as it would be recorded in a project management or dev ops ticketing system on the job.
 - Students are then given a thorough step-by-step process to follow to successfully complete each "ticket". 
 
 
 Note: These exercises are meant to be very easy (low hanging fruit) for them to practice what they just heard in lecture on their own, and in a very practical scenario. Many of our current lecture demos and in-class labs are not real world based, and the practical application can be obscured. I think WBP's are an answer to this, but personally I would like to see many of these labs updated as well.

**Sample below!**

<br><br><br>
<hr>
<br>

# Array Iterator Methods

## Scenario (Problem Context)

- You have just landed your first internship role working for the city of Chicago- specifically for the data governance team in the transportation department. As a member of this team, you are responsible for providing detailed sets of data to other departments so they can make important decisions about maintenance, funding, and resource distribution.

 - For your first assignment, you are given access to an enormous data pool containing records of reported street light outages across the city. Each report contains several key pieces of data that are valuable to different departments. Your job is to respond to these other departments' requests for information - determine what data is required and extract that data from the data pool.

**Based on real historical data from the City of Chicago archives.**
Source: https://data.cityofchicago.org/Service-Requests/311-Service-Requests-Street-Lights-All-Out-Histori/zuxi-7xem

**Outcomes Tip**: If you love working with data, a city government job might be for you. Cities collect huge amounts of data on everything - demographics, infrastructure, transportation, crime, public health... the list goes on! This data (and those who use it) make a huge impact on decisions and processes that affect your local community.

## Data 

 In most scenarios you will not have access to a data file, but a database that you will query for information.
 - **View the raw dataset** [here](./module/data.json). 

## Requirements (Tickets)

1. To familiarize you with the data, your team lead gives you an easy first assignment. They tell you that before providing data to other departments, it is important to remove any duplicate records. Fortunately for you, all duplicates in the system have already been marked with `"Open - Dup"` in the `"status"` field. Return the complete list of data with all duplicate records removed.
2. Your manager tells you that two police precincts recently merged and that the records need to be updated to reflect that change. Per her request, all records marked as `"police district": "9"` should be updated to `"police district": "12"`. Return the complete list of data with the required updates.
3. The maintenance department is working on a new system that will plot service locations on a map for their dispatchers. The department has requested a condensed version of the data with only the following fields `service_request_number, street_address, zip_code, latitude, longitude` Return the complete list of data, with each `object` containing only the new requested fields.
4. Field technicians have requested a tool where they can look up specific records for the service tickets they are responding to. These technicians are usually only provided with an id and an address from the dispatchers. The dept has asked that you create a quick lookup tool that allows them to request the full record details by providing just the service id number.
5. Your manager asks if you can provide a summary report containing how many outages were recorded in each zip code. This information is very important and could be used to determine increased funding to areas that are currently under serviced.

## Code 

1. Write your code inside the functions provided in [this file](./module/index.js). 

## Steps to Complete (To Solve)

1. Using the array `.filter()` method, remove all records containing the `"status": "Open - Dup"` property.
2. Using the array `.forEach()` method, update any records containing `"police district": "9"`with `"police district": "12"`.
3. Using the array `.map()` method, condense each record to contain only the properties `service_request_number, street_address, zip_code, latitude, longitude`.
4. Using the array `.find()` method, return a specific record that matches a provided id.
5. Using any array method you choose, return an object containing all the zip codes represented in the dataset and the number of service requests made to each one.

## Solutions 

Stuck? 

1. Seek online resources such as Google, MDN, or W3Schools for more information on how to use `javascript array iterator methods`.
2. Seek the assistance of a classmate.
3. Seek assistance from the instructional team.

**Solutions to these exercises can also be found** [here](./solution/7.4-array-iterator-methods-solution.js).

<br>

## Alignment with Learning Objectives

**Students Will Be Able To:**

1. Identify the Purpose (Use Case) of several key `Array Iterator Methods`

**Method:**
  - Each exercise has a request for data that utilizes a different array iterator method (Purpose)
  - Each iterator method has been chosen for its unique ability to selectively manipulate and extract the requested data (Use Case)

## Test Setup

- Clone this repo `git clone https://github.repo.url/`
- Install dependencies `npm install`
- Run Tests to validate code `npm run test`
- Expect tests to fail on first run, before changes are made
- Confirm that all tests are passing to complete the module.
