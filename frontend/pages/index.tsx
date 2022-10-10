import type { NextPage } from 'next';
import List from '../src/components/List/List';
import { Box } from '@mui/material';
import {Teacher} from '../src/@types/teacher';

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Professor 1",
      photo: "https:github.com/Mateus-Sousa23.png",
      describe: "Descrição do Professor 1",
      value_hour: 100
    },
    {
      id: 2,
      name: "Professor 2",
      photo: "https:github.com/Mateus-Sousa23.png",
      describe: "Descrição do Professor 2",
      value_hour: 100
    },{
      id: 1,
      name: "Professor 3",
      photo: "https:github.com/Mateus-Sousa23.png",
      describe: "Descrição do Professor 3",
      value_hour: 100
    },{
      id: 1,
      name: "Professor 4",
      photo: "https:github.com/Mateus-Sousa23.png",
      describe: "Descrição do Professor 4",
      value_hour: 100
    },
  ];
  return (
    <> 
      <Box sx={{ backgroundColor: 'secondary.main'}}> 
         <List teachers={teachers}></List>
     </Box>
    </>
  )
}

export default Home;
