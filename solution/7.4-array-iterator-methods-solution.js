// Exercise 1

const removeDuplicateRecords = function (data) {
  return data.filter((each) => {
    return each.status !== "Open - Dup";
  });
};

// Exercise 2

const updatedPoliceDistrict = function (data) {
  data.forEach((each) => {
    if (each.police_district === "9") {
      each.police_district = "12";
    }
  });
  return data;
};

// Exercise 3

const extractLocationData = function (data) {
  return data.map((each) => {
    return {
      service_request_number: each.service_request_number,
      street_address: each.street_address,
      zip_code: each.zip_code,
      latitude: each.latitude,
      longitude: each.longitude,
    };
  });
};

// Exercise 4

const findById = function (data, id) {
  return data.find((element) => {
    return element.service_request_number === id;
  });
};


// Exercise 5

const numberByZip = function (data) {
  let zips = {};
  data.forEach(({ zip_code }) => {
    if (zip_code) {
      zips[zip_code] = zips[zip_code] + 1 || 1;
    }
  });
  return zips;
};

// OR with .REDUCE() BONUS!

const numberByZip2 = function (data) {
  return data.reduce((accumulator, { zip_code }) => {
    if (zip_code) {
      accumulator[zip_code] = accumulator[zip_code] + 1 || 1;
    }
    return accumulator
  }, {});
};