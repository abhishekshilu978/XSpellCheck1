import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [word,setWord]=useState("");
  const [correctWord,setCorrectWord]=useState("");

  const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};

const handleWordSearch=(e)=>{
  const inputWord = e.target.value;
  setWord(inputWord);

    if (inputWord.trim() === "") {
      setCorrectWord("");
      return;
    }

    const words = inputWord.split(/\s+/); 
  for(const word of words){
    const lowerCaseWord = word.toLowerCase();
     if(customDictionary.hasOwnProperty(lowerCaseWord)){
  setCorrectWord(customDictionary[lowerCaseWord]);
  return;
 } 
  }
  setCorrectWord("");

}

  return (
    <>
     <div className='bg-sky-100 w-screen h-screen'>
      <div className='flex flex-col gap-8 justify-center items-center py-10'>
        <h1 className='text-2xl font-bold text-sky-800'>Spell Check and Auto-Correction</h1>
        <textarea
           className='bg-white border-1 border-gray-200 w-100 h-40' 
           placeholder='Enter text...'
           onChange={handleWordSearch}
           value={word}
           ></textarea>
      </div>
     {correctWord && (
           <div className='flex justify-center'>
        <h3>Did you mean: <span className='font-bold'>{correctWord}</span>?</h3>
      </div>
     )

     }
   
     </div>
    </>
  )
}

export default App
