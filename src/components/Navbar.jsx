/* eslint-disable */
import { LocalLibrary, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';

const StyledToolbar = styled(Toolbar) ({
  display:"sticky",
  justifyContent:"space-between",
});

const Searchbar = styled("div") (({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box) (({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));

const UserBox = styled(Box) (({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "hsla(39, 90%, 64%, 1)" }}>
    <StyledToolbar>
    <Typography variant='h2' sx={{display:{xs:"none", sm:"block"}}}>
    The Little Library
    </Typography>
    <LocalLibrary sx={{display:{xs:"block", sm:"none"}}}/>
    <Searchbar><InputBase placeholder="search..."/></Searchbar>
    </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
