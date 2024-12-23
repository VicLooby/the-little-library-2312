import { Stack, Sheet } from '@mui/joy';

const SocialBanner = () => {
  return (
    <Stack direction="row" spacing={1} sx={{margin: '40px'}}>
        <img
          src="./assets/@thelittlelibrary.png"
          width="55%"
          height="55%"
        />
        <Sheet variant="outlined"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'hsla(39, 90%, 64%, 1)',
          margin: '40px'
        }}
      >
      <Sheet sx={{backgroundColor: 'hsla(39, 90%, 64%, 1)', margin: '40px'}}>
        <h2>Join us for our Annual Spring Event!</h2>
        <p>This year we will be putting the emphasis on scialising and swapping our favourite books</p>
        </Sheet>
</Sheet>
</Stack>
  );
};

export default SocialBanner;
