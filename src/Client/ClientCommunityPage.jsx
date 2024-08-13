import React, { useState } from 'react';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import { Link, useNavigate} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useTheme, createTheme, ThemeProvider} from '@mui/material/styles';
import { Container, Box, Paper, Grid, Button, Slide} from '@mui/material';
import { useScrollTrigger, useMediaQuery} from '@mui/material';
import {Card, CardHeader, CardMedia, CardContent, CardActions} from '@mui/material';
import {Menu, MenuItem} from '@mui/material';
import {Avatar, IconButton, Typography, TextField} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red, yellow, grey } from '@mui/material/colors';

function Body(params){
    let base = import.meta.env.VITE_BASE_URL || "../";
    let navigator = useNavigate();

    const theme = createTheme({
        palette: {
            starlight: {
                light: yellow[500],
                main: yellow[700],
                dark: yellow[800],
                darker: yellow[900]
            },
        },
    });
    const matcheUpSM = useMediaQuery(theme.breakpoints.up('sm'));
    /* const trigger = useScrollTrigger({ threshold: 0 }); */

    const [expanded, setExpanded] = React.useState({});

    const [isFilled, setIsFilled] = useState(false);
    const handleStarIconClick = () => {
        setIsFilled(!isFilled);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const ITEM_HEIGHT = 24;
    const options = [
        '檢舉該貼文',
        '查看品牌',
        '加入會員'
      ];

    const handleExpandClick = (collapseNum) => {
        setExpanded((prevExpanded) => ({
          ...prevExpanded,
          [collapseNum]: !prevExpanded[collapseNum],
        }));
      };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
    return(
        <ThemeProvider theme={theme}>
        
            <Container maxWidth={"xl"} component={"main"} sx={{marginTop:"68px"}}>
                {/* <div>
                    <Slide appear={false} direction="down" in={!trigger}>
                        <Button sx={{position: 'fixed', top: 'calc(68px + 1rem)', left: '0.5rem'}}>
                            首頁
                        </Button>
                    </Slide>
                </div> */}
                <Box py={3}>
                    <Grid container
                        spacing={{ xs: 2, md: 3 }}>
                        
                        <Grid item container
                              gap={{xs: 1, md:2}}
                              lg={3}
                              display={{lg: 'flex', xs: 'none'}}
                              >
                            {/* {Array.from(Array(6)).map((_, index) => (
                                    <Grid item key={index}>
                                        <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus consectetur unde hic soluta sunt obcaecati aperiam ex illo reiciendis, temporibus dolorem illum quos ad exercitationem rerum. Facere, esse adipisci.</Item>
                                    </Grid>
                            ))} */}
                        </Grid>
                        <Grid item container
                              gap={{xs: 1, md:2}}
                              direction="column"
                              alignItems="center"
                              xs>
                            {Array.from(Array(2)).map((_, index) => (
                                <Grid item key={index}>
                                    <Card sx={{ maxWidth: 468 }}>
                                        <CardHeader
                                            avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                鵝
                                            </Avatar>
                                            }
                                            action={
                                                <>
                                                <IconButton
                                                    aria-label="more"
                                                    id="long-button"
                                                    aria-controls={open ? 'long-menu' : undefined}
                                                    aria-expanded={open ? 'true' : undefined}
                                                    aria-haspopup="true"
                                                    onClick={handleClick}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>
                                                <Menu
                                                    id="long-menu"
                                                    MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                    sx: {py: 0},
                                                    }}
                                                    anchorEl={anchorEl}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    open={open}
                                                    onClose={handleClose}
                                                    PaperProps={{
                                                    sx: {
                                                        maxHeight: ITEM_HEIGHT * 4.5 + 16 ,
                                                        width: '16ch',
                                                        boxShadow: 1,
                                                    },
                                                    }}
                                                >
                                                    {options.map((option) => (
                                                    <MenuItem key={option} onClick={(e)=>{handleClose(e);navigator("#")}}>
                                                        {option}
                                                    </MenuItem>
                                                    ))}
                                                </Menu>
                                                </>
                                            }
                                            title="Shrimp and Chorizo Paella"
                                            subheader="September 14, 2024"
                                        />
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image={base + "images/WalletConnect-icon.svg"}
                                            alt=""
                                            sx={{  
                                                aspectRatio: '5/4',  
                                                objectFit: 'cover',  
                                            }} 
                                        />
                                        <CardActions disableSpacing>
                                            <IconButton color='starlight' onClick={handleStarIconClick} sx={{pr: 0.5}} aria-label="add to favorites">
                                                {isFilled ? <StarIcon /> : <StarOutlineIcon />}
                                            </IconButton>
                                            <Typography variant="inherit" color="grey">1k</Typography>
                                        </CardActions>
                                        <CardContent sx={{py: 0}}>
                                            <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                            {!expanded[index] && (
                                                <Button variant="text" 
                                                        color="inherit" 
                                                        size='small'
                                                        onClick={() => handleExpandClick(index)}
                                                        aria-expanded={expanded[index]}
                                                        aria-label="show more"
                                                        sx={{
                                                            backgroundColor: 'transparent',
                                                            '&:hover': {
                                                              backgroundColor: 'transparent',
                                                              boxShadow: 'none'
                                                            },
                                                            '&:focus': {
                                                              backgroundColor: 'transparent',
                                                              boxShadow: 'none'
                                                            },
                                                            '&:active': {
                                                              backgroundColor: 'transparent',
                                                              boxShadow: 'none'
                                                            },
                                                            transition: 'none'
                                                          }}
                                                        >
                                                ...查看更多
                                                </Button>
                                            )}
                                            </Typography>
                                            
                                            <Collapse in={!!expanded[index]} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography paragraph>Method:</Typography>
                                                    <Typography paragraph>
                                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                                        aside for 10 minutes.
                                                    </Typography>
                                                    <Typography paragraph>
                                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                                    </Typography>
                                                    <Typography paragraph>
                                                        Add rice and stir very gently to distribute. Top with artichokes and
                                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                                        mussels, tucking them down into the rice, and cook again without
                                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                                        minutes more. (Discard any mussels that don&apos;t open.)
                                                    </Typography>
                                                    <Typography>
                                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                                    </Typography>
                                                </CardContent>
                                            </Collapse>
                                        </CardContent>
                                        
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' , px: 2, pb:2}}>
                                            <Avatar sx={{ color: 'action.active', mr: 1, my: 0.5 ,  width: 24, height: 24 }} aria-label="recipe">
                                                M
                                            </Avatar>
                                            <TextField color='grey' key={index} fullWidth multiline id={`input-with-sx-${index}`} label="留言..." variant="standard"/>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item container
                              lg={3}
                              display={{lg: 'flex', xs: 'none'}}
                              >
                            {/* {Array.from(Array(6)).map((_, index) => (
                                    <Grid item key={index}>
                                        <Item>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus consectetur unde hic soluta sunt obcaecati aperiam ex illo reiciendis, temporibus dolorem illum quos ad exercitationem rerum. Facere, esse adipisci.</Item>
                                    </Grid>
                            ))} */}
                        </Grid>
                        
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default function ClientAssets() {
    return (
        <>
            <ClientHeader/>
            <Body/>
            <ClientFooter/>
        </>
    )
}