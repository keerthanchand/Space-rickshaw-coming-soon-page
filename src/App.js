import React, { useEffect } from 'react';
import moonImage from './moon.png'; // Make sure to add the moon image in the src folder
import logo from './sr_logo.png'; // Make sure to add the moon image in the src folder
import { Grid } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import ReactGa from 'react-ga';

ReactGa.initialize("G-DKKCGH86KD")

function App() {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, [])
  return (
    <div style={{ height: "100%" }}>
      <div>

        <img src={logo} style={{ width: "270px", objectFit: "contain", marginTop: "15px", marginLeft: "10px" }} alt='space rickshaw logo'></img>
      </div>
      <Grid container spacing={5} alignItems="center" justifyContent="space-around" style={{ height: "90%" }}>

        <Grid item md={6} xs={12}>
          <img src={moonImage} alt='moon' style=
            {{
              maxWidth: "100%",
              minWidth: "300px",
              height: "auto"
            }}></img>
        </Grid>


        <Grid item md={6} xs={12}>
          <h1 style={{ color: "#fff", fontSize: "3rem", paddingLeft: "10px" }}>Coming Soon!</h1>
          <div style={{ paddingRight: "25px", paddingLeft: "10px", height: "190px" }}>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Affordable and fast access to space with unmanned labs for experiments, manufacturing, research, art, and advertising in LEO.",
                1000,
                "Affordable and fast access to space with unmanned labs for experiments, manufacturing, research, art, and advertising in HEO.",
                1000,
                "Affordable and fast access to space with unmanned labs for experiments, manufacturing, research, art, and advertising in the Moon.",
                1000,
                "Affordable and fast access to space with unmanned labs for experiments, manufacturing, research, art, and advertising in Deep Space.",
                1000,
              ]}
              speed={50}
              style={{ fontSize: '1.4em', color: "#fff", }}
              repeat={Infinity}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;