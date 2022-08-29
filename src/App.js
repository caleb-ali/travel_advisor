import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./componentsMap/Map";



 const App = () => {
  return (
   <>
     <CssBaseline/>
     <Header/>
     <Grid container spacing={3} style{{}}>

     </Grid>
   </>
  );
}

export default App;
