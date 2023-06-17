"use client"
import ListaExpansivel from "../../../../components/Listas/ListaExpansivel";

import { Grid } from "@mui/material";
import {fadeIn} from "../../../../functions/GlobalAnimations";
import RouteLayout from '../../../layout';

const data = [
  {
      title: "What do you mean by item and end product?",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
  },
  {
      title: "What are some examples of permitted end products?",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
  },
  {
      title: "Am i allowed to modify the item that i purchased?",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
  },
  {
      title: "What do you mean by item and end product?",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
  },
  {
      title: "What are some examples of permitted end products?",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
  },
  {
      title: "Am i allowed to modify the item that i purchased?",
      content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply."
  },
];

export default function ListaExpansivelTresPage() {
  return (
    <RouteLayout title="Expansível Tres">
      <Grid container justifyContent="center" alignItems={'center'}>
        <Grid item sm={12} md={8} lg={6}>
          <h6 className="mt-10 text-dark text-center font-medium mb-[25px] lg:mb-[15px]">Sua lista se parecerá com esta:</h6>
        </Grid>
        <Grid item sm={12} lg={10}>
          <ListaExpansivel 
            theme="accordion-style-03" 
            className="" 
            data={data}
            animation={fadeIn}
          />         
        </Grid>
      </Grid>
      
    </RouteLayout>
    
  )
};
