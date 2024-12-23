// import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';

export default function ProductCard() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg'}}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
        <img
            src="./assets/romance.png"
            srcSet=""
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          sx={{ fontWeight: 'md' }}
        >
          The Books we fell in Love with
        </Link>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="warning" size="lg">
          Browse
        </Button>
      </CardOverflow>
    </Card>
  );
}
