import { useState } from 'react'

const Header = ({title}) =>{
  return(
    <h1>{title}</h1>
  )
}

const Button = ({handleclick, text}) =>{
  return (
    <button onClick={handleclick}>{text}</button>
  )
}
const Statistics = ({ feedback }) => {
  const total = Object.values(feedback).reduce((sum, value) => sum + value, 0);

  const lines = Object.entries(feedback).map(([text, value]) => (
    <StatisticLine key={text} text={text} value={value} />
  ));

  return total === 0 ? (
    <a>We don't have feedbacks for statistics</a>
  ) : (
      <table>{lines}</table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
    <td>{text}</td><td>{value}</td>
    </tr>
  ) 
}


const App = () => {
  // guarda los clics de cada botón en su propio estado

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGoodClick= ()=>{
    console.log("good ", feedback)
    setFeedback({...feedback, good: feedback.good+1})
  }
  const handleBadClick= ()=>{
    console.log("bad ", feedback)
    setFeedback({...feedback, bad: feedback.bad+1})
  }
  const handleNeutralClick= ()=>{
    console.log("neutral ", feedback)
    setFeedback({...feedback, neutral: feedback.neutral+1})
  }

  return (
    <div>
      <Header title={'Give feedback!'}/>

      <Button handleclick={handleGoodClick} text={'good'}/>
      <Button handleclick={handleNeutralClick} text={'neutral'}/>
      <Button handleclick={handleBadClick} text={'bad'}/>

      <Header title={'Statistics'}/>
    </div>
    
  )
}

export default App