import { useEffect, useState } from 'react'
import Output from './Output';

export default function App() {
  const [isAllowedToGenerate, setIsAllowedToGenerate] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState('');
  const [params, setParams] = useState({
    "capital-letter": false,
    "small-letter": false,
    "number": false,
    "special": false
  })

  const outputValueMap = {
    "capital-letter": ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    "small-letter": ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    "number": [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    "special": ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
  }


  const handleInputs = (e) => {
    let input = e.target.id;
    // console.log("length value: ",e);
    // setLength(0)
    if (input === "length") {
      if (e.target.value === '') {
        setLength(0)
      } else {
        setLength(e.target.value)
      }
    }


    if (!params[input]) {
      setParams({
        ...params,
        [input]: true,
      });
    } else {
      setParams({
        ...params,
        [input]: false,
      });
    }
    // console.log(length);
  }

  useEffect(() => {
    setIsVisible(false)
    if (Number(length) !== 0 && (params['capital-letter'] || params['number'] || params['small-letter'] || params['special'])) {
      setIsAllowedToGenerate(true)
    } else {
      setIsAllowedToGenerate(false)
    }
  }, [length, params])


  const handleGenratePassword = () => {
    let selectedValues = []

    if (params['capital-letter']) {
      selectedValues.push('capital-letter')
    }
    if (params['small-letter']) {
      selectedValues.push('small-letter')
    }
    if (params['number']) {
      selectedValues.push('number')
    }
    if (params['special']) {
      selectedValues.push('special')
    }

    let pswrd = '';
    for (let i = 1; i <= length; i++) {

      // select value type
      let typeIndex = Math.floor(Math.random() * selectedValues.length)

      // select char from the 
      let outputCharIndex = Math.floor(Math.random() * outputValueMap[selectedValues[typeIndex]].length)
      // concatinate to password string
      pswrd = pswrd.concat(outputValueMap[selectedValues[typeIndex]][outputCharIndex])
    }

    setPassword(pswrd)
    setIsVisible(true)
  }



  return (
    
    <div className="bg-[#fdd4d5] min-h-[450px] w-[700px] p-[20px] border-none rounded-[10px] shadow-[0_0_47px_10px_rgb(0,0,0,0.2)] xs:mx-2">
      <h2 className="text-center text-2xl ">Random Password Generator</h2>
      <div className="p-[20px]">
        <p>What all you want to include?</p>
        <div className="p-[10px]">
          <div className="leading-[30px] text-[15px] flex mb-[10px]">
            <input type="number" name="length" id="length" placeholder="Enter Length" onChange={handleInputs} className='pl-[4px] rounded-[4px] focus:outline-none' />
          </div>
          <div className="custom-options-div">
            <label htmlFor="capital-letter">
              <input type="checkbox" name="capital-letter" id="capital-letter" onChange={handleInputs} />
              <span className='checkmark'></span>
              Capital Letters
            </label>
          </div>

          <div className="custom-options-div">
            <label htmlFor="small-letter">
              <input type="checkbox" name="small-letter" id="small-letter" onChange={handleInputs} />
              <span className='checkmark'></span>
              Small Letters
            </label>
          </div>

          <div className="custom-options-div">
            <label htmlFor="number">
              <input type="checkbox" name="number" id="number" onChange={handleInputs} />
              <span className='checkmark'></span>
              Numbers
            </label>
          </div>

          <div className="custom-options-div">
            <label htmlFor="special">
              <input type="checkbox" name="special" id="special" onChange={handleInputs} />
              <span className='checkmark'></span>
              <span>Special character </span>
              <span>i.e. ~!@#$%^&*()</span>
            </label>
          </div>

          <div className="flex flex-col justify-center items-center" >
            {isAllowedToGenerate &&
              <button
                onClick={handleGenratePassword}
                className='h-[35px] flex items-center text-[18px] px-[10px] w-fit bg-[#ba55d3] text-white cursor-pointer border-none rounded-[10px]'
              >Generate Password</button>}
            {isVisible && <Output password={password} />}
          </div>

        </div>
      </div>
    </div>
  )
}
