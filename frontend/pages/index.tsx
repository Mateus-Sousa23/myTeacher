import type { NextPage } from 'next';
import List from '../src/components/List/List';
import { Box } from '@mui/material';
import {Teacher} from '../src/@types/teacher';
import {useIndex} from '../src/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {listTeachers} = useIndex(); 

  return (
    <> 
      <Box sx={{ backgroundColor: 'secondary.main'}}> 
         <List teachers={listTeachers}></List>
     </Box>
    </>
  )
}

export default Home;
