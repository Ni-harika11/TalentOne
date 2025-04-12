import React from 'react'
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'
const ConfettiComponet = () => {
    const [isConfettiVisible, setIsConfettiVisible] = React.useState(false);
    const {width,height}=useWindowSize();

    const handleTriggerConfeeti=()=>{
        setIsConfettiVisible(true)
        setTimeout(()=>setIsConfettiVisible(false),5000)
    }
  return (
     <>
     <div>
        <button onClick={handleTriggerConfeeti}>Trigger Confetti</button>
        {
            isConfettiVisible && (
                <Confetti
                width={width}
                height={height}
        />
            )
        }
     </div>
     
     </>
  )
}

export default   ConfettiComponet  
