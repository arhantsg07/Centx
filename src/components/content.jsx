
import Cardholder from "./card";
import Cardholder2 from "./card2";

export const Content = () => {
  return (
    <>
    <div className="flex flex-row justify-center">
      <div className="flex flex-col jusitfy-center mx-auto my-auto">
        <div className="text-7xl pl-2 pt-2 font-semibold">
          <p>Hello !</p>
          <div className="flex flex-row mt-3">Meet 
            <div className="text-blue-700 ml-2">CENTX</div></div>
        </div>
        <div className="text-2xl tracking-tighter ml-2 mt-2 font-fira font-medium mt-5">
          <span>
            Cent x is the most trusted platform in the world for buying,<br />
            selling, and trading crypto tokens
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-2 rounded-full mt-5 w-32">
          Sign Up
        </button>
        
      </div>
      <Cardholder />
    </div>
    
    <div className="flex flex-row justify-center">
    <Cardholder2 />
      <div className="flex flex-col jusitfy-center my-auto">
        <div className="text-5xl pl-2 pt-2 font-semibold">
          <p>Built for the people</p>
        </div>
        <div className= "ml-2 mt-2 font-medium">
            <ul>
              <li className="text-xl mt-2">Transfer funds without any charges<br /></li>
              <span>Directly transfer funds from your bank account</span>
              <li className="text-xl mt-2">Sell & withdraw</li>
              <span>Sell your securities and withdraw to your bank</span>
              <li className="text-xl mt-2">Trade 200+ securities</li>
              <span>From crypto to mutual funds</span>
            </ul>
        </div>

      </div>
    </div>      
    </>
  )
}
