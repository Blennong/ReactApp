import React from 'react';

import { api } from "../api/api";

const Delete = (props) => {
  
  const deleteItem = () => {
    api.delete(`/post/${props.id}`)
      .then(response => {
        console.log(response.data);
        window.location.reload()
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  
  return (
    <button onClick={deleteItem}>
      Eliminar
    </button>
  );
};

export default Delete;
