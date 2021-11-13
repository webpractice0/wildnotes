import React from 'react'
import { Container, Grid, Typography, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import NoteImage from '../images/1.jpeg'
const NoteDetail = (props) => {
   const noteParams = useParams()
   return (
      <Container maxWidth="md" sx={{ marginTop: '10px' }}>
         <Grid container spacing={2}>
            <Grid item sm={12}>
               <Typography>
                     {/* <h1>Note Detail {noteParams.noteid}</h1> */}
                     <h1>First Ever Blog</h1>
                     <span>Harun Rai -  2021 Sept, 12</span>
               </Typography>
               <Typography>
               <img src={NoteImage} alt="Note image" style={{width: '500px'}} />
               </Typography>
               <Typography variant="body" color="text.secondary">
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
         </Grid>
      </Container>
   )
}

export default NoteDetail
