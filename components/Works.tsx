import { Work } from "@/libs/types"
import Carousel from 'react-material-ui-carousel'
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Link,
} from '@mui/material'

type Props = {
  works: Work[];
}

const Works = ({ works }: Props) => {
  return (
    <Carousel
      sx={{
        position: 'absolute',
        width: '100%',
        height: '400px',
        padding: '0 20px',
        bottom: '50px'
      }}
      animation="slide"
      swipe
      indicators={false}
    >
      {works.map((work) =>
        <Card
          sx={{
            width: 'auto',
            height: '380px',
            overflow: 'auto',
          }}
          key={work.id}>

          <CardActionArea>
            <Link href={work.link}>
              <CardMedia
                component="img"
                image={work.image.url}
                alt={work.title}
                style={{
                  width: 'auto',
                  maxHeight: '200px',
                  margin: '0 auto',
                }}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                {work.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {work.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Carousel>
  )
}

export default Works