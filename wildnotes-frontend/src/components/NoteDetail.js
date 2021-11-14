import React from 'react'
import { Container, Grid, Typography, Avatar, List, ListItemAvatar, ListItemText, ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import NoteImage from '../images/1.jpeg'
import {MenuBookTwoTone} from '@mui/icons-material';
import PopularNotes from './HomeComponents/PopularNotes';

const NoteDetail = (props) => {
   const noteParams = useParams()
   return (
      <Container maxWidth="md" sx={{ marginTop: '10px' }}>
         <Grid container spacing={2}>
            <Grid item sm={12}>
            <Typography variant="h2" color="text.secondary">
                     {/* <h1>Note Detail {noteParams.noteid}</h1> */}
                     <span>First Ever Blog First Ever Blog First Ever </span>
                     
               </Typography>
            </Grid>
            <Grid item sm={12} md={6}>               
               <Typography variant="span"><MenuBookTwoTone fontSize="large"/> 8 mins read</Typography>
               <br />
               <br />

               <Typography variant="body" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        <br />
                        <br />
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        <br />
                        <br />
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                     </Typography>
            </Grid>
            <Grid item sm={12} md={4}>
            <Typography>
               <img src={NoteImage} alt="Note image" style={{width: '400px'}} />
               </Typography>
               <br />
               <List>
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <Avatar alt="author" src={NoteImage} />
                  </ListItemAvatar>
                  <ListItemText primary="Harun Rai" secondary="2021, Sept 21"/>
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
