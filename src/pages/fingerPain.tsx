import { useState, useEffect } from 'react'
import { 
    defaultPictures,
    fingerActive,
    fingerHighlight,
} from '../assets/pictures'
import { fingerPoint } from '../configs/fingerPoint'

export default function FingerPain() {

  const [dipActive, setDipActive] = useState<boolean>(false);
  const [pipActive, setPipActive] = useState<boolean>(false);
  const [mcpActive, setMcpActive] = useState<boolean>(false);

  const [dipHighlight, setDipHighlight] = useState<boolean>(false);
  const [pipHighlight, setPipHighlight] = useState<boolean>(false);
  const [mcpHighlight, setMcpHighlight] = useState<boolean>(false);

  const [otherPain, setOtherPain] = useState<boolean>(false);

  const handleClickOtherPain = () => {
    setDipActive(false)
    setPipActive(false)
    setMcpActive(false)
    setDipHighlight(false)
    setPipHighlight(false)
    setMcpHighlight(false)
    setOtherPain(!otherPain)
    
  }
  const selectPain = (index: number) => {
    setOtherPain(false)
    if(index >= 0 && index <= 3){
        if(dipHighlight && pipHighlight && mcpHighlight){
            setDipActive(false)
            setPipActive(true)
            setMcpActive(true)
        }else{
            setDipActive(!dipActive)
        }
        setDipHighlight(!dipHighlight)
    }else if(index > 3 && index <= 8){
        if(dipHighlight && pipHighlight && mcpHighlight){
            setDipActive(true)
            setPipActive(false)
            setMcpActive(true)
        }else{
            setPipActive(!pipActive)
        }
        setPipHighlight(!pipHighlight)
    }else if(index >= 9){
        if(dipHighlight && pipHighlight && mcpHighlight){
            setDipActive(true)
            setPipActive(true)
            setMcpActive(false)
        }else{
            setMcpActive(!mcpActive)
        }
        setMcpHighlight(!mcpHighlight)
    }
  }

  useEffect(() => {
    if(dipHighlight && pipHighlight && mcpHighlight){
        setDipActive(false)
        setPipActive(false)
        setMcpActive(false)
    }
  }, [dipHighlight, pipHighlight, mcpHighlight])

  return (
    <div className='flex items-center justify-center w-full h-auto'>
        <div className='flex relative'>
            <div className='flex justify-center items-center'>
                <img src={defaultPictures.defaultFinger} alt='default-finger'   style={{height: '500px'}} />

                {/* dip */}
                {dipActive ? (
                    <img
                        src={fingerActive.dipActive}
                        alt='dip-active'
                        className='absolute'
                    />
                ): null}
                {pipActive ? (
                    <img
                        src={fingerActive.pipActive}
                        alt='pip-active'
                        className='absolute'
                    />
                ): null}
                {mcpActive ? (
                    <img
                        src={fingerActive.mcpActive}
                        alt='mcp-active'
                        className='absolute'
                    />
                ): null}

                {/* Highlight */}
                {dipHighlight ? (
                    <img
                        src={fingerHighlight.dipHighlight}
                        alt='dip-highlight'
                        className='absolute'
                    />
                ): null}
                {pipHighlight ? (
                    <img
                        src={fingerHighlight.pipHighlight}
                        alt='pip-highlight'
                        className='absolute'
                    />
                ): null}
                {mcpHighlight ? (
                    <img
                        src={fingerHighlight.mcpHighlight}
                        alt='mcp-highlight'
                        className='absolute'
                    />
                ): null}
                <div>
                    {fingerPoint.map((button, index) => (
                        <button 
                            key={index} 
                            className='absolute opacity-0 bg-blue-200 px-3 z-50 rounded-3xl' 
                            style={{ top: button.top, left: button.left }}
                            onClick={() => selectPain(index)}
                        >
                            {index}
                        </button>
                    ))}
                </div>
                <div className='absolute flex z-10 opacity-0' style={{bottom: '5px'}}>
                    <button
                        className='bg-blue-200 px-10 py-3 z-50 rounded-3xl'
                        onClick={handleClickOtherPain}
                        style={{
                            width: '300px'
                        }}
                    >
                        other point
                    </button>
                </div>
                {otherPain ? (
                    <img
                        src={fingerHighlight.othersHighlight}
                        alt='others-highlight'
                        className='absolute'
                    />
                ): null}
            </div>
        </div>
    </div>
  )
}
