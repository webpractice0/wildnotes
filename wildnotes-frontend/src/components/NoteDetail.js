import React, {useState, useEffect} from 'react'
import { Container, Grid, Typography, Avatar, List, ListItemAvatar, ListItemText, ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import NoteImage from '../images/1.jpeg'
import {MenuBookTwoTone} from '@mui/icons-material';
import PopularNotes from './HomeComponents/PopularNotes';
import axios from 'axios';

const NoteDetail = (props) => {
   const noteParams = useParams()
   const noteuid = noteParams.noteuid

   const [note, setNote] = useState([])
   useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/blog/retrieve/${noteuid}/view/`).then(response=>{
         setNote(response.data)
      }).catch(error=>{
         console.log('Error: ', error)
      })
   }, [])
   console.log('Note: ', note)
   return (
      <Container maxWidth="md" sx={{ marginTop: '10px' }}>
         <Grid container spacing={2}>
            <Grid item sm={12}>
            <Typography variant="h2" color="text.secondary">
                     {/* <h1>Note Detail {noteParams.noteid}</h1> */}
                     <span>{note.title}</span>
                     
               </Typography>
            </Grid>
            <Grid item sm={12} md={6}>               
               <Typography variant="span"><MenuBookTwoTone fontSize="large"/> 8 mins read</Typography>
               <br />
               <br />

               <Typography variant="body" color="text.secondary">
                        {note.description}
                        <br />
                        <br />
                        {note.description}
                        <br />
                        <br />
                        {note.description}
                     </Typography>
            </Grid>
            <Grid item sm={12} md={4}>
            <Typography>
               <img src={note.image} alt="Note image" style={{width: '400px'}} />
               </Typography>
               <br />
               <List>
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <Avatar alt="author" src={note.author_pic} />
                  </ListItemAvatar>
                  <ListItemText primary={note.author} secondary={note.custom_datetime}/>
               </ListItem>
               </List>
               <br />
               
               <PopularNotes />
            </Grid>
         </Grid>
      </Container>
   )
}

export default NoteDetail
