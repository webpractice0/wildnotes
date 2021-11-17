import React, {useState,useEffect} from 'react';
import author_pic from '../../images/author.jpeg';
import {
   List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography
} from '@mui/material';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';

const BlogExcerpt = () => {
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
           <Avatar alt="Author Pic" src={element.author_pic}/>
        </ListItemAvatar>
        <NavLink to={`/note/${element.uid}/view/`}>
        <ListItemText primary={element.title}secondary={            
           <React.Fragment>
              <b>{element.author} - </b>
              {element.briefed_description}
           </React.Fragment>   
        } />
        </NavLink>
     </ListItem>
     {blogPosts.length !== index+1 | index===0?<Divider variant="inset" component="li"/>:''}
     </React.Fragment>
   }
      )}
      </List>
   )
}

export default BlogExcerpt
