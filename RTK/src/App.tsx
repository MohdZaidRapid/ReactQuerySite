import React, { FormEvent, useState } from 'react'
import { useGetPostsQuery, useNewPostMutation } from './redux/api'
import PostCard from './components/PostCard'

const App = () => {
  const {isLoading,isError,isSuccess,data,error}=useGetPostsQuery("")
  // console.log(isLoading,isError,isSuccess,data,error)
  const [newPost]=useNewPostMutation()

  const [title,setTitle]=useState<string>("")
  const [body,setBody]=useState<string>("")

const submitHandler=(e:FormEvent<HTMLFormElement>):void=>{
e.preventDefault();

const post:Post={
  title,
  body,
  userId:Math.random()*1000,
  id:Math.random()*1000,

}
newPost(post)
setTitle("")
setBody("")
} 
  
  return (
    <div>
      <h1>My App</h1>
<form onSubmit={submitHandler}>
      <input type="text" placeholder='Title' value={title}
      onChange={(e)=>setTitle(e.target.value)} />

      <input type="text" placeholder='Body' value={body} onChange={(e)=>setBody(e.target.value)} />
      <button type='submit'>Add</button>
      </form>
    {
      isLoading?<div>Loading........</div>:
      data?.map(i=>(
        <PostCard key={i.id} post={i} />
      ))
    }
    </div>
  )
}

export default App