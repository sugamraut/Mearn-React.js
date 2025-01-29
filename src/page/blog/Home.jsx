import React, { useEffect } from 'react'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import axios from 'axios'

function Home() {
    const fetchBlog=async()=>{
        const response =await axios.get("http://localhost:3000/blog")
    }
    useEffect(()=>{
       fetchBlog()
    })
  return (
    <>
       <Navbar/>

<div className="flex flex-wrap">
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
<Card />
</div>
    </>
  )
}

export default Home
