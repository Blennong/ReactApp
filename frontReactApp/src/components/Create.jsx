import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createPost } from '../store/slices/postSlice'
import { api } from "../api/api";

const Create = ()=> {
  // const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addPost = async (e) => {
    let n = name;
    let d = description;
    await api.post('/post/', { name: n, description: d });
  }

  return (
    <>
      <h1>
        Crear nuevo Post
      </h1>
      <form onSubmit="addPost()">
        <div>
          <label htmlFor="name">
            Nombre
          </label>
          <input type="text" name="name" onChange={ e => setName(e.target.value) } required />
        </div>
        <div>
          <label htmlFor="description">
            Descripcion
          </label>
          <input type="text" name="description" onChange={ e => setDescription(e.target.value) } required />
        </div>
        <div>
          <button type="submit" onClick={ (e) => addPost(e) }>
            Ingresar
          </button>
        </div>
      </form>
    </>
  )
}

export default Create;
