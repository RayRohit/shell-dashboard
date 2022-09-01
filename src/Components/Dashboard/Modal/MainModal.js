
import * as React from 'react';
import Modall from "./Modal";
export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height:'100%',
  boxShadow: '10px 5px 10px #222',
  bgcolor: 'background.paper',
  p: 4,
  borderRadius : '5px'
};
function MainModal() {
  return (
    <>
     <Modall />
    </>
  );
}
export default MainModal;