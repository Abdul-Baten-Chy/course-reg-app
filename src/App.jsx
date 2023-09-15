import { useState } from 'react'
import Cards from './components/Cards'
import Aside from './components/Aside'


function App() {
  const [coUrseName, setCoursename]= useState([])
  const [totalCredits, setTotalCredits]= useState(0)
  const [credit, setCredit]=useState(20)

  function handleAddCourseName(card){
    const newCourseName= [...coUrseName, card]
setCoursename(newCourseName)
// console.log(newCourseName);
const newTotalCredit= totalCredits + card.course_credit_hour
    const remainingCredit = 20 - newTotalCredit
    if(remainingCredit < 0){
      setCredit(credit)
    }else{
      setCredit(remainingCredit)
    }
    
    if(newTotalCredit > 20 ){
    setTotalCredits(totalCredits)
    } else{
      setTotalCredits(newTotalCredit)
    }
  }

  // function handleTotalCredit(card){
  //   // const newTotalCredit= totalCredits + card.course_credit_hour
  //   // const remainingCredit = 20 - newTotalCredit
  //   // if(remainingCredit < 0){
  //   //   setCredit(credit)
  //   // }else{
  //   //   setCredit(remainingCredit)
  //   // }
    
  //   // if(newTotalCredit > 20 ){
  //   // setTotalCredits(totalCredits)
  //   // } else{
  //   //   setTotalCredits(newTotalCredit)
  //   // }
    

  // }
 
  return (
    <div className='max-w-7xl mx-auto '>
     <h1 className='text-3xl font-bold text-center mt-14 mb-10'>Course Registration</h1>
     <div className='flex flex-col md:flex-row  gap-6 justify-center'>
      <Cards className="order-2" handleAddCourseName={handleAddCourseName}></Cards>
      <Aside className="order-1" coUrseName={coUrseName} totalCredits={totalCredits} credit={credit}></Aside>
     </div>
     
    </div>
  )
}

export default App
