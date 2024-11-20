
// import React, { useState } from 'react'

// import Modals from './components/ModalS';
// import { Overlay } from 'react-bootstrap';
// import ConfirmModal from './components/ConfirmModal';
// import ImageModal from './components/ImageModal';
// import FormModal from './components/FormModal';
// import InformationModal from './components/InformationModal';
// const App = () => {
//   const [ isModalOpen, setIsModalOpen] = useState(false);

  // const handleOpenModal =()=>{
  //   setIsModalOpen(true);
  // }
  // const handleCloseModal=()=>{
  //   setIsModalOpen(false);
  // }
  // const handleConfirm=()=>{
  //   alert('Action Confirmed ?');
  //   setIsModalOpen(false);
  // }

  // handle image modals
  // const handleOpenImage=()=>{
  //   setIsModalOpen(true);
  // }
  // const handleCloseImage=()=>{
  //   setIsModalOpen(false);
  // }


  // const handleOpenForm=()=>{
  //   setIsModalOpen(true);
  // }
  // const handleCloseForm=()=>{
  //   setIsModalOpen(false);
  // }
  // const onSubmit=(name)=>{
  //   alert(`hello,${name}`);
  // }
  // const handleInformationOpen =()=>{
  //    setIsModalOpen(true);
  // }
  // const hadleInformationClose=()=>{
  //   setIsModalOpen(false);
  // }
  // return (
  //   <div>
      {/* <h2>Modal Examples</h2>
      <button onClick={handleOpenModal}>Open Modal</button>
      
      <Modals isOpen={isModalOpen} onClose={handleCloseModal}>
           <h2>Modal Title</h2>
           <p>This is Modal contents</p>
      </Modals>


      <h2>Confirm Examples</h2>
      <button onClick={handleOpenModal} className='btn-open-modal'>Cinfirm Modal</button>

      <ConfirmModal isOpen ={isModalOpen} onClose={handleCloseModal} confirmModal={handleConfirm}>
        are your sure you want to delete this item..?
      </ConfirmModal> */}
      

      {/* <h3>Image Modal</h3>
      <button onClick={handleOpenImage} className='btn-open-iamage'>open Image Modal</button>

      <ImageModal isOpen={isModalOpen} onClose={handleCloseImage} 
                  imgSrc='https://via.placeholder.come'
                  imaAlt='placeholder'
      /> */}

      {/* <h3>Form Modals</h3>
      
      <button onClick={handleOpenForm} className='btn-opeb-modal'>open form modal</button>

      <FormModal isOpen={isModalOpen} onClose={handleCloseForm} onSubmit= {onSubmit}/> */}

     {/* <h3>Addtional Information</h3>
       <button  onClick={handleInformationOpen} className='btn-open-modal'>Additional Information</button>
       <InformationModal 
       isOpen={isModalOpen} 
       onClose={hadleInformationClose}
       message="This is an information message for the user." 
       />
    </div>
  )
} */}

// import React, { useState } from 'react'
// import SlidingModal from './components/SlidingModal';

// const App = () => {
//   const [modalConfig, setModalConfig] = useState({isOpen:false, direction:''});

//   const handleOpenModal=(direction)=>{
//     setModalConfig({isOpen:true, direction});
//   }
//   const handleCloseModale=()=>{
//     setModalConfig({isOpen:false, direction:''})
//   }
//   return (
//      <div>
//         <h2>Sliding  Modals Examples</h2>
//         <button onClick={()=> handleOpenModal('left')} className='left'>Open is left modals</button>
//         <button onClick={()=> handleOpenModal('right')} className='right'>Open is right modals</button>
//         <button onClick={()=> handleOpenModal('top')} className='top'>Open is top modals</button>
//         <button onClick={()=> handleOpenModal('bottom')} className='bottom'>Open bottom left modals</button>
//       <SlidingModal
//          isOpen={modalConfig.isOpen}
//          onClose={handleCloseModale}
//          direction={modalConfig.direction}
//          title='Modal Menu'
//          items={['Home', 'About', 'Services', 'Conract']}
//       />
//      </div>
//   )
// }

// export default App

// import React from 'react'
// import NavBar from './components/NavBar'

// const App = () => {
//   return (
//     <div>
//        <NavBar/>
//        <main>
//            <h1>Welcome to my Websites</h1>
//        </main>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './routers/DashBoard'
import Form1 from './routers/Form1'
import Form2 from './routers/Form2'
import ListPage from './routers/ListPage'

const App = () => {
  return (
    <Router>
       <Nav/>
          <Routes>
               <Route path='/' element={<DashBoard/>}/>
               <Route path='/form1' element={<Form1/>}/>
               <Route path='/form2' element={<Form2/>}/>
               <Route path='/lists' element={<ListPage/>}/>
          </Routes>
    </Router>
  )
}

export default App
