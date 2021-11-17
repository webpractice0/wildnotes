import React, {useState, useEffect} from 'react'
import { Container, Grid, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import axios from 'axios'
import { red } from '@mui/material/colors'

const NotesList = () => {
   const [notes, setNotes] = useState([])

   useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/blogs/').then(response=>{
         console.log('Notes: ', response.data)
         setNotes(response.data)
      }).catch(error=>{
         console.log('Error: ', error)
      })
   }, [])
   console.log('Notes State: ', notes)
   return (
      <Container maxWidth="md" sx={{marginTop: '20px'}}>
         <Grid container spacing={2}>
            {notes.map(element=>{
               return (
                  <Grid item sm={6} md={4}>
               <Card sx={{ maxWidth: 345 }}>
                  <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} src={element.author_pic}/>} action={<IconButton aria-label="settings">
                     {/* RH */}
                  </IconButton>} title={element.title}
                     subheader={element.author, element.custom_datetime}

                  />
                  <CardMedia component="img" height="194" image={element.image} alt="First Note Image" />

                  <CardContent>
                     <Typography variant="body" color="text.secondary">
                        {element.briefed_description}
                     </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                  <NavLink to={`/note/${element.uid}/view/`} style={{padding:'0px 8px'}}>Read More</NavLink>
                  </CardActions>
               </Card>
            </Grid>
               )
            })}
         </Grid>
      </Container>
   )
}

export default NotesList
