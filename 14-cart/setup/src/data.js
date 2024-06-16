const url = 'https://www.course-api.com/react-useReducer-cart-project';

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export {fetchData};

