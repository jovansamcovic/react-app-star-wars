import axios from "axios";

const getData = async (url, getAll) => {
  try {
    const res = await axios.get(url)
    const result = await res.data

    if (getAll) {
      return result.results;
    }

    return result
  } catch (err) {
    return err.message;
  }
}

export default getData;