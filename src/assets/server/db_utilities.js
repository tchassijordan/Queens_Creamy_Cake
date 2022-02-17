export const fetchAllItemsData = async (param) => {
  const req = await fetch(
    `https://queens-creamy-cake-default-rtdb.firebaseio.com/${param}.json`
  );
  const data = await req.json();
  return data;
};

export const fetchItemData = async (param, id) => {
  const req = await fetch(
    `https://queens-creamy-cake-default-rtdb.firebaseio.com/${param}/${id}.json`
  );
  const data = await req.json();
  return data;
};
