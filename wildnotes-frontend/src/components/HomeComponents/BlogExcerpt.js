import React, {useState,useEffect} from 'react';
import author_pic from '../../images/author.jpeg';
import {
   List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography
} from '@mui/material';
import axios from 'axios';

const BlogExcerpt = () => {
   const blogData = [
      {
         'title':'First Blog Ever',
         'description':'The first blog ever in my entire life.',
         'author':'Harun Rai',
         'author_pic':author_pic

      },
      {
         'title':'Second Blog Ever',
         'description':'The Second blog ever in my entire life.',
         'author':'Misile Rai',
         'author_pic':author_pic

      },
      {
         'title':'Third Blog Ever',
         'description':'The third blog ever in my entire life.',
         'author':'Ritika Giri',
         'author_pic':author_pic

      },
      {
         'title':'Fourth Blog Ever',
         'description':'The fourth blog ever in my entire life.',
         'author':'Selena Gomez',
         'author_pic':author_pic

      }
   ]
   // console.log('Data: ', blogData)
   const [blogPosts, setBlogPosts] = useState([])

   useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/blogs/').then(response=>{
         setBlogPosts(response.data)
      }).catch(error=>{
         // console.log('Error: ', error)
      })
   }, [])
   return (
      <List>
         {blogPosts.map((element, index) => {
        return <React.Fragment>
           <ListItem alignItems="flex-start">
        <ListItemAvatar>
           <Avatar alt="Author pic" src={element.image}/>
        </ListItemAvatar>
        <ListItemText primary={element.title}secondary={            
           <React.Fragment>
              <b>{element.author} - </b>
              {element.description}
           </React.Fragment>   
        } />
     </ListItem>
     {blogData.length !== index+1 | index===0?<Divider variant="inset" component="li"/>:''}
     </React.Fragment>
   }
      )}
      </List>
   )
}

export default BlogExcerpt
