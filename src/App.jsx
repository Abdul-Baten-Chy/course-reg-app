import { useState } from 'react'
import Cards from './components/Cards'
import Aside from './components/Aside'


function App() {
  const [coUrseName, setCoursename]= useState([])
  const [totalCredits, setTotalCredits]= useState(0)

  function handleAddCourseName(card){
    const newCourseName= [...coUrseName, card]
setCoursename(newCourseName)
console.log(newCourseName);
  }
 
  return (
    <div className='max-w-7xl mx-auto '>
     <h1 className='text-3xl font-bold text-center mt-14 mb-10'>Course Registration</h1>
     <div className='flex flex-row gap-6 justify-center'>
      <Cards handleAddCourseName={handleAddCourseName}></Cards>
      <Aside coUrseName={coUrseName}></Aside>
     </div>
     
    </div>
  )
}

export default App
