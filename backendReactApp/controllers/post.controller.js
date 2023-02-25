const { request, response } = require('express')
const { Post } = require('../model/post.model')

//LISTAR POSTS
const postGet = async (req = request, res = response)=>{  
  try {
    const posts = await Post.findAll()
    res.json(posts)
    console.log('Retrieving all posts')
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

//CREAR POST
const postPost = async (req, res = response)=>{
  const {name, description} = req.body

  try {
    const newPost = await Post.create({
      name,
      description
    })
    res.json(newPost)
    console.log('Creating new Post')
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

//DELETE POST
const postDelete = async (req, res = response)=>{
  try {
    const { id } = req.params
    await Post.destroy({
      where: {
        id,
      }
    })
    console.log(`Deleted post with id = ${id} succesfuly`)
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  postGet,
  postPost,
  postDelete,
}