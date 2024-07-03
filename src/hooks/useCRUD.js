import axios from "axios";
import { useState } from "react";

const urlBase = "https://users-crud.academlo.tech/";

const useCRUD = () => {
  const [apiData, setapiData] = useState();
  //Read
  const getApi = (path) => {
    const url = `${urlBase}${path}/`;
    axios
      .get(url)
      .then((res) => setapiData(res.data))
      .catch((err) => console.log(err));
  };

  // Create
  const postApi = (path, data) => {
    const url = `${urlBase}${path}/`;
    axios
      .post(url, data)
      .then((res) => setapiData([...apiData, res.data]))
      .catch((err) => console.log(err));
  };

  //Delete

  const deleteApi = (path, id) => {
    const url = `${urlBase}${path}/${id}/`;
    axios
      .delete(url)
      .then(() => setapiData(apiData.filter((user) => user.id !== id)))
      .catch((err) => console.log(err));
  };

  // Update
  const patchApi = (path, id, data) => {
    const url = `${urlBase}${path}/${id}/`;
    axios
      .patch(url, data)
      .then((res) =>
        setapiData(apiData.map((user) => (user.id === id ? res.data : user)))
      )
      .catch((err) => console.log(err));
  };

  return [apiData, getApi, postApi, deleteApi, patchApi];
};

export default useCRUD;
