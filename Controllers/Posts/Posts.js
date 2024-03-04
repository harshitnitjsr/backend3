const Post = require("../../Schema/Post");
const User = require("../../Schema/User");
const formidable = require('formidable')


const createPost = async (req,res)=>{
    console.log(req.body);


const { Text, pic,user } = req.body;
console.log(req.body)
console.log("user",user)



    console.log("debug 1");

   try {
    const NewPost = await  Post.create({
     
      caption:Text,
      photo:pic,
      author:user.id,	
      userDetails:{name:user.name , id:user.id}
    
      })
      
      console.log("debug 2",NewPost);
       return res.json(NewPost)
      console.log("debug 3");
    }catch (err){
      console.log("debug 4");
      return res.status(400).json({
        err
      })
    }

  };

const getPosts = async (req,res)=>{



}

const likePost = async (req,res)=>{



}



const deletePost = async (req,res)=>{



}



const updatePost = async (req,res)=>{



}


module.exports = {
	createPost,
	getPosts,
	likePost,
	deletePost,
	updatePost,
};