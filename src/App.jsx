import { useState } from 'react'
import Cards from './components/Cards'
import Aside from './components/Aside'
import './index.css'

function App() {
  const [courseName, setCoursename]= useState([])
  const [totalCredits, setTotalCredits]= useState(0)
  const [credit, setCredit]=useState(20)

  function handleAddCourseName(card, id){

    const uniqueCourseName = courseName.find(card => card.id == id)
    if(uniqueCourseName){
      alert('This course has already been selected');
      
    } else{
      const newTotalCredit= totalCredits + card.course_credit_hour;
      const remainingCredit = 20 - newTotalCredit
      if(newTotalCredit <= 20){
        const newCourseName= [...courseName, card]
        setCoursename(newCourseName)
        setTotalCredits(newTotalCredit)
        setCredit(remainingCredit)
      }else{
        alert('You cant add more than 20 credits')
        setCoursename(courseName)
        setTotalCredits(totalCredits)
      }
      
    } 
  }

   return (
    <div className='max-w-7xl mx-auto'>
     <div className='mx-auto'>
     <h1 className='text-3xl font-bold text-center mt-14 mb-10'>Course Registration</h1>
     <div className='container-main'>
      <Cards className="two" handleAddCourseName={handleAddCourseName}></Cards>
      <Aside className="one" coUrseName={courseName} totalCredits={totalCredits} credit={credit}></Aside>
     </div>
     </div>
     
    </div>
  )
}

export default App
