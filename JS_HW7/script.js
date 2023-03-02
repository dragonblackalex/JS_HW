// Task_1

function searchCandidatesByPhoneNumber(arr, number) {
  return arr.filter((candidate) =>
    candidate.phone.replace(/\D/g, '').includes(number.replace(/\D/g, ''))
  );
}

// Task 2

function deepCopy(data) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  const res = Array.isArray(data) ? [] : {};
  for (let key in data) {
    res[key] = deepCopy(data[key]);
  }

  return res;
}

function getCandidateById(arr, id) {
  const copy = deepCopy(arr.find((candidate) => candidate._id === id));
  copy.registered = new Date(copy.registered)
    .toLocaleDateString()
    .replace(/\./g, '/');
  return copy;
}

// Task 3

function sortCandidatesArr(arr, order) {
  if (!order) {
    return arr;
  }

  switch (order) {
    case 'asc':
      return deepCopy(arr).sort(
        (a, b) =>
          Number(a.balance.slice(1).replace(/\,/, '')) -
          Number(b.balance.slice(1).replace(/\,/, ''))
      );

    case 'desc':
      return deepCopy(arr).sort(
        (a, b) =>
          Number(b.balance.slice(1).replace(/\,/, '')) -
          Number(a.balance.slice(1).replace(/\,/, ''))
      );

    default:
      return arr;
  }
}

// Task 4

function splitByProp(arr, propertyName) {
  const uniquePropertyValues = [];
  const res = {};
  for (let candidate of arr) {
    if (!uniquePropertyValues.includes(candidate[propertyName])) {
      uniquePropertyValues.push(candidate[propertyName]);
    }
  }

  for (let uniquePropertyValue of uniquePropertyValues) {
    res[uniquePropertyValue] = arr.filter(
      (candidate) => candidate[propertyName] === uniquePropertyValue
    );
  }
  return res;
}





