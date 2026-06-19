import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { Header } from "./components/Header";
import { HorseIcon, HeartIcon, CubeIcon } from "@phosphor-icons/react";
// import { useState } from 'react';

function App() {
  return (
    <MantineProvider>
      <Container>
        <Header />
      </Container>
    </MantineProvider>
  );
}

export default App;
