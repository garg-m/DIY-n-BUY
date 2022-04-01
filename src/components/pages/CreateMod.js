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
        <img src='https://media.istockphoto.com/photos/gears-and-cogs-in-clockwork-watch-mechanism-craft-and-precision-picture-id1225074755?k=20&m=1225074755&s=612x612&w=0&h=BTIcCHhy7nieAWhfhjBcaTfr82EgMldDu9jn79e5C-Y=' height="400px"  width="768" object-fit = "center"/>
        <img src='https://media.istockphoto.com/photos/inside-the-clock-picture-id94916159?k=20&m=94916159&s=612x612&w=0&h=zc_vLXdAfnzo1xQA-bQVMx_MJ7YD6w3B5vgq0t2SqXs=' height="400px" width="768" object-fit = "center"/>


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