import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen text-center">
      <main className="flex-1">
        <div className="md:p-40 text-xl">
          <h1 className="text-6xl text-center font-bold my-5">Steph & Paul</h1>
          <div className="my-5">
            <div>September 29,2025</div>
            <div>Honolulu, HI, USA</div>
          </div>
          <div>
            We’re getting married and you’re invited! Come listen to us tell
            each other repeatedly how
          </div>
          <div>much we love each other, for two hours, IN HAWAII!!</div>
          <div className="my-5 font-bold text-2xl">
            Enter your name and email to RSVP.
          </div>
          <form
            action=""
            className="flex flex-col mx-auto w-[300px] md:w-[400px]"
          >
            <div className="flex mx-auto">
              <input
                type="text"
                placeholder="First Name"
                className="border mr-2 w-[100%] bg-purple-100"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border ml-2 w-[100%] bg-purple-100"
              />
            </div>
            <label htmlFor="" className="my-5">
              A copy of your response wilil be sent to:
            </label>
            <input
              type="email"
              placeholder="email"
              className="border w-[100%] bg-purple-100"
            />
            <button className="px-5 py-2 bg-purple-300 rounded-2xl my-5 text-white w-[100px] mx-auto">
              Next
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
