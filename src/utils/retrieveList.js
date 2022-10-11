import getData from "./getData";

const retrieveList = async (array) => {
  let dataList = [];
  for (let url of array) {
    dataList = [...dataList, await getData(`${url}`, false)];
  };

  return dataList;
}

export default retrieveList ;