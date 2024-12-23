// import { Box } from '@mui/material'
// import React from 'react'
import BookFiction from './BookFiction'
import BookRomance from './BookRomance'
import BookScience from './BookScience'
import { Stack  } from '@mui/joy'

const BookCategories = () => {
return (
<Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '2rem',  }}
>
  <BookFiction />
  <BookRomance />
  <BookScience />
</Stack>
)
}
export default BookCategories
