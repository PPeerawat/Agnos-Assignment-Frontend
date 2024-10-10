import { useState, useEffect } from 'react'
import { 
    defaultPictures,
    abdominalActive,
    abdominalHighlight,
} from '../assets/pictures'
import { abdominalPoint } from '../configs/abdominalPoint';

export default function AbdominalPain() {

  const [epigastriumActive, setEpigastriumActive] = useState<boolean>(false);
  const [llqActive, setLlqActive] = useState<boolean>(false);
  const [luqActive, setLuqActive] = useState<boolean>(false);
  const [rlqActive, setRlqActive] = useState<boolean>(false);
  const [ruqActive, setRuqActive] = useState<boolean>(false);
  const [suprapubicActive, setSuprapubicActive] = useState<boolean>(false);
  const [umbilicusActive, setUmbilicusActive] = useState<boolean>(false);

  const [epigastriumHighlight, setEpigastriumHighlight] = useState<boolean>(false);
  const [llqHighlight, setLlqHighlight] = useState<boolean>(false);
  const [luqHighlight, setLuqHighlight] = useState<boolean>(false);
  const [rlqHighlight, setRlqHighlight] = useState<boolean>(false);
  const [ruqHighlight, setRuqHighlight] = useState<boolean>(false);
  const [suprapubicHighlight, setSuprapubicHighlight] = useState<boolean>(false);
  const [umbilicusHighlight, setUmbilicusHighlight] = useState<boolean>(false);

  const [allPain, setAllPain] = useState<boolean>(false);

  const handleClickAllPain = () => {
    setEpigastriumActive(false)
    setLlqActive(false)
    setLuqActive(false)
    setRlqActive(false)
    setRuqActive(false)
    setSuprapubicActive(false)
    setUmbilicusActive(false)

    const highlight = !allPain;

    setEpigastriumHighlight(highlight)
    setLlqHighlight(highlight)
    setLuqHighlight(highlight)
    setRlqHighlight(highlight)
    setRuqHighlight(highlight)
    setSuprapubicHighlight(highlight)
    setUmbilicusHighlight(highlight)

    setAllPain(!allPain)
  }

  const selectPain = (index: number) => {
    setAllPain(false)
    if(index === 0){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(false)
        setLlqActive(true)
        setLuqActive(true)
        setRlqActive(true)
        setRuqActive(true)
        setSuprapubicActive(true)
        setUmbilicusActive(true)
      }else {
        setEpigastriumActive(!epigastriumActive)
      }
      setEpigastriumHighlight(!epigastriumHighlight)
    }else if(index === 1){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(true)
        setLlqActive(false)
        setLuqActive(true)
        setRlqActive(true)
        setRuqActive(true)
        setSuprapubicActive(true)
        setUmbilicusActive(true)
      }else {
        setLlqActive(!llqActive)
      }
      setLlqHighlight(!llqHighlight)
    }else if(index === 2){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(true)
        setLlqActive(true)
        setLuqActive(false)
        setRlqActive(true)
        setRuqActive(true)
        setSuprapubicActive(true)
        setUmbilicusActive(true)
      }else {
        setLuqActive(!luqActive)
      }
      setLuqHighlight(!luqHighlight)
    }else if(index === 3){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(true)
        setLlqActive(true)
        setLuqActive(true)
        setRlqActive(false)
        setRuqActive(true)
        setSuprapubicActive(true)
        setUmbilicusActive(true)
      }else {
        setRlqActive(!rlqActive)
      }
      setRlqHighlight(!rlqHighlight)
    }else if(index === 4){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(true)
        setLlqActive(true)
        setLuqActive(true)
        setRlqActive(true)
        setRuqActive(false)
        setSuprapubicActive(true)
        setUmbilicusActive(true)
      }else {
        setRuqActive(!ruqActive)
      }
      setRuqHighlight(!ruqHighlight)
    }
    else if(index === 5){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(true)
        setLlqActive(true)
        setLuqActive(true)
        setRlqActive(true)
        setRuqActive(true)
        setSuprapubicActive(false)
        setUmbilicusActive(true)
      }else {
        setSuprapubicActive(!suprapubicActive)
      }
      setSuprapubicHighlight(!suprapubicHighlight)
    }else if(index === 6){
      if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
        setEpigastriumActive(true)
        setLlqActive(true)
        setLuqActive(true)
        setRlqActive(true)
        setRuqActive(true)
        setSuprapubicActive(true)
        setUmbilicusActive(false)
      }else {
        setUmbilicusActive(!umbilicusActive)
      }
      setUmbilicusHighlight(!umbilicusHighlight)
    }
  }

  useEffect(() => {
    if(epigastriumHighlight && llqHighlight && luqHighlight && rlqHighlight && ruqHighlight && suprapubicHighlight && umbilicusHighlight){
      setEpigastriumHighlight(true)
      setLlqHighlight(true)
      setLuqHighlight(true)
      setRlqHighlight(true)
      setRuqHighlight(true)
      setSuprapubicHighlight(true)
      setUmbilicusHighlight(true)

        setEpigastriumActive(false)
        setLlqActive(false)
        setLuqActive(false)
        setRlqActive(false)
        setRuqActive(false)
        setSuprapubicActive(false)
        setUmbilicusActive(false)


        setAllPain(true)
    }
  }, [epigastriumHighlight, llqHighlight, luqHighlight, rlqHighlight, ruqHighlight, suprapubicHighlight, umbilicusHighlight])

  return (
    <>
      <div className='flex items-center justify-center py-4 text-xl'>
          จุดไหนที่คุณปวดท้องมากที่สุด
      </div>
      <div className='flex items-center justify-center w-full h-auto'>
          <div className='flex relative'>
              <div className='flex justify-center items-center'>
                  <img src={defaultPictures.defaultAbdominal} alt='default-abdominal' style={{height: '500px'}}  />

                  {/* active */}
                  {epigastriumActive ? (
                      <img
                          src={abdominalActive.epigastriumActive}
                          alt='epigastrium-active'
                          className='absolute'
                      />
                  ): null}
                  {llqActive ? (
                      <img
                          src={abdominalActive.llqActive}
                          alt='llq-active'
                          className='absolute'
                      />
                  ): null}
                  {luqActive ? (
                      <img
                          src={abdominalActive.luqActive}
                          alt='luq-active'
                          className='absolute'
                      />
                  ): null}
                  {rlqActive ? (
                      <img
                          src={abdominalActive.rlqActive}
                          alt='rlq-active'
                          className='absolute'
                      />
                  ): null}
                  {ruqActive ? (
                      <img
                          src={abdominalActive.ruqActive}
                          alt='ruq-active'
                          className='absolute'
                      />
                  ): null}
                  {suprapubicActive ? (
                      <img
                          src={abdominalActive.suprapubicActive}
                          alt='suprapubic-active'
                          className='absolute'
                      />
                  ): null}
                  {umbilicusActive ? (
                      <img
                          src={abdominalActive.umbilicusActive}
                          alt='umbilicus-active'
                          className='absolute'
                      />
                  ): null}

                  {/* Highlight */}
                  {epigastriumHighlight ? (
                      <img
                          src={abdominalHighlight.epigastriumHighlight}
                          alt='epigastrium-highlight'
                          className='absolute'
                      />
                  ): null}
                  {llqHighlight ? (
                      <img
                          src={abdominalHighlight.llqHighlight}
                          alt='llq-highlight'
                          className='absolute'
                      />
                  ): null}
                  {luqHighlight ? (
                      <img
                          src={abdominalHighlight.luqHighlight}
                          alt='luq-highlight'
                          className='absolute'
                      />
                  ): null}
                  {rlqHighlight ? (
                      <img
                          src={abdominalHighlight.rlqHighlight}
                          alt='rlq-highlight'
                          className='absolute'
                      />
                  ): null}
                  {ruqHighlight ? (
                      <img
                          src={abdominalHighlight.ruqHighlight}
                          alt='ruq-highlight'
                          className='absolute'
                      />
                  ): null}
                  {suprapubicHighlight ? (
                      <img
                          src={abdominalHighlight.suprapubicHighlight}
                          alt='suprapubic-highlight'
                          className='absolute'
                      />
                  ): null}
                  {umbilicusHighlight ? (
                      <img
                          src={abdominalHighlight.umbilicusHighlight}
                          alt='umbilicus-highlight'
                          className='absolute'
                      />
                  ): null}

                  <div>
                      {abdominalPoint.map((button, index) => (
                          <button 
                              key={index} 
                              className='absolute bg-blue-200 px-5 py-2 z-50 rounded-3xl opacity-0' 
                              style={{ top: button.top, left: button.left}}
                              onClick={() => selectPain(index)}
                          >
                              {index}
                          </button>
                      ))}
                  </div>
                  <div className='absolute flex z-10 opacity-0' style={{bottom: 20}}>
                      <button
                          className='bg-blue-200 px-12 py-3 z-50 rounded-3xl w-full'
                          onClick={handleClickAllPain}
                      >
                          all point
                      </button>
                  </div>
                  {allPain ? (
                      <img
                          src={abdominalHighlight.allOverHighlight}
                          alt='all-over-highlight'
                          className='absolute'
                      />
                  ): null}
              </div>
          </div>
      </div>
    </>
  )
}
