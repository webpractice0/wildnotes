import React from 'react'
import { Container, Grid, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

// import {FavoriteIcon, ShareIcon} from '@mui/icons-material'


import { red } from '@mui/material/colors'

import NotesImage from '../images/2.jpeg';
const NotesList = () => {
   return (
      <Container maxWidth="md" sx={{marginTop: '20px'}}>
         <Grid container spacing={2}>
            <Grid item sm={6} md={4}>
               <Card sx={{ maxWidth: 345 }}>
                  <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }}>HR</Avatar>} action={<IconButton aria-label="settings">
                     {/* RH */}
                  </IconButton>} title="First Notes Ever"
                     subheader="Harun Rai - September 14, 2016"

                  />
                  <CardMedia component="img" height="194" image={NotesImage} alt="First Note Image" />

                  <CardContent>
                     <Typography variant="body" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                     </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                     <IconButton aria-label="add to favorite">
                        {/* <FavoriteIcon /> */}
                        <Button>
                           <Link to='/'><Typography>
                              Read more
                           </Typography></Link>

                        </Button>

                     </IconButton>
                  </CardActions>
               </Card>
            </Grid>
            <Grid item sm={6} md={4}>
               <Card sx={{ maxWidth: 345 }}>
                  <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }}>HR</Avatar>} action={<IconButton aria-label="settings">
                     {/* RH */}
                  </IconButton>} title="First Notes Ever"
                     subheader="Harun Rai - September 14, 2016"

                  />
                  <CardMedia component="img" height="194" image={NotesImage} alt="First Note Image" />

                  <CardContent>
                     <Typography variant="body" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                     </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                     <IconButton aria-label="add to favorite">
                        {/* <FavoriteIcon /> */}
                        <Button>
                           <Link to='/'><Typography>
                              Read more
                           </Typography></Link>

                        </Button>

                     </IconButton>
                  </CardActions>
               </Card>
            </Grid>
            <Grid item sm={6} md={4}>
               <Card sx={{ maxWidth: 345 }}>
                  <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }}>HR</Avatar>} action={<IconButton aria-label="settings">
                     {/* RH */}
                  </IconButton>} title="First Notes Ever"
                     subheader="Harun Rai - September 14, 2016"

                  />
                  <CardMedia component="img" height="194" image={NotesImage} alt="First Note Image" />

                  <CardContent>
                     <Typography variant="body" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                     </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                     <IconButton aria-label="add to favorite">
                        {/* <FavoriteIcon /> */}
                        <Button>
                           <Link to='/'><Typography>
                              Read more
                           </Typography></Link>

                        </Button>

                     </IconButton>
                  </CardActions>
               </Card>
            </Grid>
         </Grid>
      </Container>
   )
}

export default NotesList
