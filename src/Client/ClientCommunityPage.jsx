import React, { useState } from 'react';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';
import { Link, useNavigate} from 'react-router-dom';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useTheme, createTheme, ThemeProvider} from '@mui/material/styles';
import { Container, Box, Paper, Grid, Button, Slide} from '@mui/material';
import { useScrollTrigger, useMediaQuery} from '@mui/material';
import {Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea} from '@mui/material';
import {Menu, MenuItem} from '@mui/material';
import {List, ListItemText, ListItemButton, ListItemAvatar} from '@mui/material';
import {Avatar, IconButton, Typography, TextField, Divider} from '@mui/material';
import {Chip, Autocomplete, Stack} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red, yellow, grey } from '@mui/material/colors';

function Body(params){
    let base = import.meta.env.VITE_BASE_URL || "../";
    // const themeMediaQuery = useTheme();
    // const isLgUp = useMediaQuery(themeMediaQuery.breakpoints.up('lg'));
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
    //  const trigger = useScrollTrigger({ threshold: 0 }); 

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

    const allBrandLists = [
        {brand: "TENGO Brands"},
        {brand: "Apple Inc."},
        {brand: "SCU Blockchain Research Society"},
        {brand: "俱樂部限量卡"},
        {brand: "DogeDAO"},
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
                {/* <div style={{ display: isLgUp ? 'none' : 'block' }}>
                    <Slide appear={false} direction="down" in={!trigger}>
                        <IconButton sx={{position: 'fixed', top: 'calc(68px + 1rem)', left: '0.5rem'}}>
                            <MoreVertIcon/>
                        </IconButton>
                    </Slide>
                </div> */}
                <Box py={3}>
                    <Grid container
                        spacing={{ xs: 2, md: 3 }}>
                        
                        <Grid item container
                              gap={{xs: 1, md:2}}
                              lg={4}
                              display={{lg: 'flex', xs: 'none'}}
                              direction="column"
                              >
                            <Typography variant="h5" color="initial" fontWeight={700}> 品牌 </Typography>
                            <Autocomplete
                                multiple
                                size="small"
                                id="tags-standard"
                                options={allBrandLists}
                                getOptionLabel={(option) => option.brand}
                                defaultValue={allBrandLists}
                                forcePopupIcon={false}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="選擇查看の貼文"
                                    placeholder="品牌"
                                />
                                )}
                            />
                            <Typography variant="h5" color="initial" fontWeight={700}> 科技產品與服務 </Typography>
                            <Grid   item
                                    container 
                                    gap={1}>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/tango_LOGO.jpg"}
                                            alt="TENGO Brands image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                                TENGO Brands
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/apple_img.jpg"}
                                            alt="Apple Inc. image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                                Apple Inc.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/DogeDAO_img.jpg"}
                                            alt="DogeDAO image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                            DogeDAO
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/design_7.jpg"}
                                            alt="俱樂部限量卡 image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                            俱樂部限量卡
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Typography variant="h5" color="initial" fontWeight={700}> 工作與教育 </Typography>
                            <Grid   item
                                    container 
                                    gap={1}>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/SCU_LOGO.png"}
                                            alt="SCU Blockchain Research Society image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                            SCU Blockchain Research Society
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Typography variant="h5" color="initial" fontWeight={700}> 藝術與娛樂 </Typography>
                            <Grid   item
                                    container 
                                    gap={1}>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/Sony Music logo.png"}
                                            alt="Sony Music Entertainment Japan image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                            Sony Music Entertainment Japan
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Typography variant="h5" color="initial" fontWeight={700}> 飲食與生活 </Typography>
                            <Grid   item
                                    container 
                                    gap={1}>
                                <Card sx={{
                                    maxWidth: "100px",
                                    borderRadius: 2,
                                    boxShadow: "none", // 初始時沒有陰影
                                    transition: "box-shadow 0.3s ease-in-out", // 添加過渡效果
                                    '&:hover': {
                                    boxShadow: 3, // hover 後顯示陰影
                                },}} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={base + "images/Starbucks Coffee Logo.png"}
                                            alt="Starbucks image"
                                            sx={{borderRadius: 4}}
                                        />
                                        <CardContent sx={{p:1}}>
                                            <Typography noWrap="True" variant="subtitle1" fontWeight={700} textAlign="center" component="div">
                                            Starbucks
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
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
                                            <Avatar src={base + "images/default_avatar.png"} sx={{ color: 'action.active', mr: 1, my: 0.5 ,  width: 24, height: 24 }} aria-label="recipe">
                                                頭像
                                            </Avatar>
                                            <TextField color='grey' key={index} fullWidth multiline id={`input-with-sx-${index}`} label="留言..." variant="standard"/>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item container
                              lg={4}
                              display={{lg: 'flex', xs: 'none'}}
                              >
                            
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <Typography variant="h5" color="initial" ml={2} fontWeight={700}> 排行 </Typography>
                                <ListItemButton alignItems="center">
                                    <Typography variant="body1" component="span" mr={1}> 01 </Typography>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={base + "images/tango_LOGO.jpg"} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary="TENGO Brands"
                                    secondary={
                                        <React.Fragment>
                                            {"區塊鏈科技公司，致力於打造去中心化的品牌生態系統"}
                                        </React.Fragment>
                                    }
                                    />
                                </ListItemButton>
                                <Divider variant="" component="li" />
                                <ListItemButton alignItems="center">
                                    <Typography variant="body1" component="span" mr={1}> 02 </Typography>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={base + "images/apple_img.jpg"} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary="Apple Inc."
                                    secondary={
                                        <React.Fragment>
                                            {"全球知名科技公司，致力於為用戶提供卓越的用戶體驗產品"}
                                        </React.Fragment>
                                    }
                                    />
                                </ListItemButton>
                                <Divider variant="" component="li" />
                                <ListItemButton alignItems="center">
                                    <Typography variant="body1" component="span" mr={1}> 03 </Typography>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={base + "images/SCU_LOGO.png"} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary="SCU Blockchain Research Society"
                                    secondary={
                                        <React.Fragment>
                                            {"為學生提供學習和交流區塊鏈知識的平台"}
                                        </React.Fragment>
                                    }
                                    />
                                </ListItemButton>
                                <Divider variant="" component="li" />
                                <ListItemButton alignItems="center">
                                    <Typography variant="body1" component="span" mr={1}> 04 </Typography>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={base + "images/design_7.jpg"} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary="俱樂部限量卡"
                                    secondary={
                                        <React.Fragment>
                                            {"為卡牌愛好者提供一個安全、可靠的交易平台"}
                                        </React.Fragment>
                                    }
                                    />
                                </ListItemButton>
                                <Divider variant="" component="li" />
                                <ListItemButton alignItems="center">
                                    <Typography variant="body1" component="span" mr={1}> 05 </Typography>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={base + "images/DogeDAO_img.jpg"} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary="DogeDAO"
                                    secondary={
                                        <React.Fragment>
                                            {"為 Dogecoin 持有者提供一個參與和貢獻的平台"}
                                        </React.Fragment>
                                    }
                                    />
                                </ListItemButton>
                            </List>
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