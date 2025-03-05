import { useState } from 'react'

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   console.log('rendering with counter value', counter)

//   const increaseByOne= ()=> {
//     console.log('increasing, value before', counter)
//     setCounter(counter +1)
//   }
//   const decreaseByOne = () => {
//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }
//   const setToZero = () => {
//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }  
//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button onClick={increaseByOne} text={"plus"}/>
//       <Button onClick={decreaseByOne} text={"minus"}/>
//       <Button onClick={setToZero} text={"zero"}/> 
//     </div>

//   )
// }


// const Display = ({counter}) => {
//   return (
//     <div>{counter}</div>
//   )
// }

// const Button = ({onClick, text}) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }
// export default App





// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)


//   const handleLeftClick = () => {
    
//     console.log('left before', clicks.left)
//     setClicks({ ... clicks, left: clicks.left+1})
//     console.log('left after', clicks.left)
//     setAll(allClicks.concat("L"))
//     setTotal(total+1)
//   }
//   const handleRightClick = () => {
//     setClicks({... clicks, right: clicks.right+1})
//     setAll(allClicks.concat("R"))
//     setTotal(total+1)
//   }
//   return (
//     <div>
//       {clicks.left}
//       <Button onClick={handleLeftClick} text={'left'}/>
//       <Button onClick={handleRightClick} text={'right'}/>
//       {clicks.right}
//       <br></br>


//       <History allClicks={allClicks}/>
//       <p>Total {total}</p>
//     </div>
//   )
// }
// const Button = ({onClick, text}) => {
//   return (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )
// }
// const History = ({allClicks}) =>{
  
//   return (allClicks.length == 0) ? 
//     (<div>
//       the app is used by pressing the buttons
//     </div>):
//     (<div>
//       button press history: {allClicks.join(' ')}
//     </div>)
// }

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value}/>
      
      <Button handleClick={() => setToValue(1000)} text={'thousand'} />
      <Button handleClick={() => setToValue(0)} text={'reset'} />
      <Button handleClick={() => setToValue(value + 1)} text={'increment'} />
        
    </div>
  )
}
const Display = ({value})=><div>{value}</div>

const Button = ({handleClick, text}) =><button onClick={handleClick}>{text}</button>



export default App;