import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPostsApiCall, deletePostApiCall } from '../store/slices/thunks'
import { api } from "../api/api";
import Create from '../components/Create';
import Delete from '../components/Delete';

const Index = () => {

  // const dispatch = useDispatch()
  
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  const [postTable, setPostTable] = useState([]);
  
  const getPostsCallback = async () => {
    await api.get('/post/').then((res) => {
      console.log(res.data)
      setPosts(res.data)
      setPostTable(res.data)
    })
  }

  const handleSearchInputChange= (event)=> {
    setSearchPost(event.target.value);
    postFilter(event.target.value)
  }

  const postFilter = (item)=>{
    var searchResult = postTable.filter((e)=>{
      if(e.name.toString().toLowerCase().includes(item.toLowerCase())){
        return e
      }
    })
    setPosts(searchResult)
  }

  useEffect(() => {
    getPostsCallback()
  }, [])

  return (
    <>
      <div>
        <h1>
          Lista de Posts
        </h1>
        <input type="text" placeholder='Buscar por nombre de post' value={searchPost} onChange={handleSearchInputChange} />
        <table>
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Descripción
              </th>
              <th>
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {
              posts.map((item) => {
                return (
                  <tr key={ item.id }>
                    <td>
                      { item.name }
                    </td>
                    <td>
                      { item.description }
                    </td>
                    <td>
                      <Delete id={item.id}></Delete>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <hr />
        <Create></Create>
      </div>
    </>
  )
}

export default Index;
