import { Work } from "@/libs/types"
import Carousel from 'react-material-ui-carousel'
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Link,
  Box,
} from '@mui/material'

type Props = {
  works: Work[];
}

const Works = ({ works }: Props) => {
  return (
    <Carousel sx={{ padding: '5px 20px' }}>
      {works.map((work) =>
        <Card
          sx={{
            width: 'auto',
            height: '500px',
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
                  maxHeight: '400px',
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