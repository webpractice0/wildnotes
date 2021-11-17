import React from 'react'
import BlogExcerpt from './BlogExcerpt'
const PopularNotes = () => {
   return (
      <div>
         <span className="wildnotes-title-style">Most read notes</span>
         <div style={{height: '400px',overflow:'scroll',width:'100%'}}>
         <BlogExcerpt />
         </div>
      </div>
   )
}

export default PopularNotes
