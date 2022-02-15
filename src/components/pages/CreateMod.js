import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';


import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

//import Sidebar from '../Sidebar';


// function CreateMod() {
// const [open, setOpen] = useState(false);
// const node = useRef();
const CreateMod = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <img src='https://images.fineartamerica.com/images-medium-large-5/disassembled-parts-of-a-wristwatch-dorling-kindersleyuig.jpg' height="400px" object-fit = "center"/>

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
};
// }

export default CreateMod;

// import React from 'react';
// import Sidebar from '../Sidebar';

// const CreateMod = () => {
//   return <>
//   <Sidebar />
//   </>;
// };

// export default CreateMod;