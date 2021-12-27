import { Work } from "@/libs/types"
import {
  Card,
  CardContent,
  CardActions,
  Button,
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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {works.map((work) =>
        <Card sx={{ width: '90%', maxWidth: '600px', margin: '10px' }} key={work.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={work.image.url}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {work.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {work.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link href={work.link}>
              <Button size="small" color="primary">
                詳細
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </Box>
  )
}

export default Works