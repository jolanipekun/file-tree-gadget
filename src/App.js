import React, { useState } from 'react'


function App() {
  return <div>
     <h2>File Tree Exercise </h2>
     <Folder name="Desktop">
       <Folder name ="Music">
          <File name="all_stars.mp4"/>
          <File name="lazy_song.mp4"/>
       </Folder>
        <File name="dogs.jpeg"/>
        <File name="cats.png"/>
     </Folder>
     
    
     <Folder name="Applications"/>
     
  </div>
   
}

const Folder = (props) => {
 const [isOpen, setIsOpen] = useState(false)
 const {name, children} = props;

 const direction = isOpen ? 'down' : 'right'

 const handleClick = () => {
    setIsOpen(!isOpen)
 }

  console.log(props)
  const marginLeft = {marginLeft: '17px'}
  //const name = 'my_desktop'
  return <div>
     <span onClick={handleClick}>
      <i className='blue folder icon'></i>
      <i className={`caret ${direction} icon`}></i>
      {name}
      </span>
     
     <div style={marginLeft}>
      { isOpen ?  children : ''}
        
     </div>
     
  </div>
   
}

const File = (props) => {
  const {name} = props
  const fileExtension = name.split('.')[1]
 const fileIcon = {
   mp4: 'headphones',
   jpeg: 'file image',
   png: 'file image outline'
 }

  return  <div> 
    <i className={`${fileIcon[fileExtension]} icon`}></i>
       {name}
     </div> 
}

export default App;
