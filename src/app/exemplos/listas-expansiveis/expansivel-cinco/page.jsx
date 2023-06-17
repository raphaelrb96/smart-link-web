"use client"

import { Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

const data = [
  {
    time: "06:00 - 07:00",
    title: 'Yoga and Pilates',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
    author: 'By Edward watson'
},
{
    time: "08:00 - 09:00",
    title: 'Energy Blast',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
    author: 'By Bryan jonhson'
},
{
    time: "10:00 - 11:00",
    title: 'Cardio Workout',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
    author: 'By Jeremy dupont',

},
{
    time: "11:00 - 12:00",
    title: 'Athletics Classes',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
    author: ' By Edward watson'
},
{
    time: "13:00 - 15:00",
    title: 'Boxercise',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum.',
    author: ' By Bryan jonhson',

}
];

export default function ListaExpansivelCincoPage() {
  return (
    <RouteLayout title="Expansível Um">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">Sua lista se parecerá com esta:</h6>
        </Grid>
        <Grid item sm={12} lg={10}>
        <ListaExpansivel 
          theme="accordion-style-05"
          className=""
          animation={fadeIn}
          themeColor="light"
          data={data}
        />
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
