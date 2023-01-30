# Array Iterator Methods

## Scenario (Problem Context)

- You have just landed your first internship role working for the city of Chicago. Specifically for the data governance team in the transportation department. As a member of this team, you are responsible for providing specific types of data to other departments so they can make important decisions about maintenance, funding, and resource distribution.

For your first assignment, you are provided access to an enormous data pool containing records of reported street light outages across the city. Each report contains several key pieces of data that are useful to different departments. Your job is to respond to these other departments' requests for information - determine what data is required and extrapolate that data from the data pool.

Based on real historical data from the City of Chicago archives.
Source: https://data.cityofchicago.org/Service-Requests/311-Service-Requests-Street-Lights-All-Out-Histori/zuxi-7xem

Tip: If you love working with data, a city government job might be for you. Cities collect huge amounts of data on everything - demographics, infrastructure, transportation, crime, public health, the list goes on... This data (and those who use it) make a huge impact on decisions and processes that affect all areas of your local community.

## Requirements (Tickets)

1. To familiarize you with the data, your first assignment is an easy one. Your team lead tells you that before providing data to other departments it's important to remove any duplicate records. Fortunately for you, all duplicates in the system have already been marked with `"Open - Dup"` in the `"status"` field. Return the complete list of data with all duplicate records removed.
2. Your manager tells you that two police precincts recently merged and that the records need to be updated to reflect that change. Per her request, all records marked as `"police district": "9"` should be updated to `"police district": "12"`. Return the complete list of data with the required updates.
3. The maintenance department is working on a new system that will plot service locations on a map for their dispatchers. The department has requested a condensed version of the data with only the following fields `service_request_number, street_address, zip_code, latitude, longitude` Return the complete list of data, with each object containing only the requested fields.
4. Field technicians have requested a tool where they can look up specific records for the service requests they are responding to. These technicians are usually only provided with an id and an address from the dispatchers. The dept has asked that you create a quick lookup tool that allows them to request the full record details by providing the service id number.
5. Your manager asks if you can provide a summary report containing how many outages were reported in each zip code. This information is very important and could be used to determine increased funding to areas that are currently under serviced.

## Steps to Complete (To Solve)

1. Using the .filter() method, remove all records containing the `"status": "Open - Dup"` property.
2. Using the .forEach() method, update any records containing `"police district": "9"`with `"police district": "12"`.
3. Using the .map() method, condense each record to contain only the properties `service_request_number, street_address, zip_code, latitude, longitude`.
4. Using the .find() method, return a specific record that matches a provided id
5. Using the any method you choose, return an object containing all the zip codes represented in the dataset and the number of service requests made to each one.

## Alignment with Learning Objectives

Students Will Be Able To:

- Identify the Purpose (Use Case) of Several Useful Array Iterator Methods
  - Each request utilizes a different array iterator method to manipulate and extract specific formatted data

## Test Setup

- Clone this repo `git clone https://github.repo.url/`
- Install dependencies `npm install`
- Run Tests to validate code `npm run test`
- Expect tests to fail on first run, before styling changes are made
- Confirm that all tests are passing to complete module.
