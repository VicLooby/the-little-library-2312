// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Sheet  } from '@mui/joy'
// import { ListItem } from '@mui/material'
import SocialBanner from './components/SocialBanner'
import BookCategories from './components/BookCategories'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div>
      <Navbar />
      <Sheet sx={{margin:'2rem'}}>
<h2>Welcome to The Little Library</h2>
<p>Our mission is see swapping & borrowing & lending as the number one way people in the UK get new books. We are passionate about recycle and reducing over consumption.
So take a look around and if there iconss anything you like the look of, head over the Contact Us Page to find out how to borrow.
We have all of the latest release so feel free to browse our collection and head over to the contact us page if you would like to borrow any of our books</p>
</Sheet>
<Sheet variant="outlined" sx={{margin:'2rem', backgroundColor: '#ffcbd2'}}>
<h2>Our Top Picks from Contemporary Fiction, Romance and Scifi</h2>
<BookCategories />
</Sheet>

<Sheet variant="outlined" sx={{margin:'2rem', backgroundColor: '#ffcbd2'}}>
  <SocialBanner />
</Sheet>

      <Footer />
    </div>
    </>
  )
}

export default App
