import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'


const users = [
  {
    img:"https://plus.unsplash.com/premium_photo-1669686965794-b13407438f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
    intro:"",
    tag:'Satisfied',
    color:"red"
  },
  {
    img:"https://images.unsplash.com/photo-1615956227970-73c634f457ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
    intro:"",
    tag:'Underserved',
    color:"blue"
  },
  {
    img:"https://images.unsplash.com/photo-1598929213452-52d72f63e307?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
    intro:"",
    tag:'Underbancked',
    color:"green"
  },
  {
    img:"https://images.unsplash.com/photo-1598929213452-52d72f63e307?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
    intro:"",
    tag:'Underbancked',
    color:"pink"
  },
]
const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
