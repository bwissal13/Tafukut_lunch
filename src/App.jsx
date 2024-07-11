
// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import Tafukut from './assets/TAFUKUT.svg';

// function App() {
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;

//     try {
//       const response = await axios.post('http://localhost:5000/api/waitlist', { name, email });
//       setMessage(response.data.text);
//     } catch (error) {
//       setMessage('There was an error submitting your request. Please try again.');
//     }
//   };

//   return (
//     <>
//       <section className="Sign">
//         <div>
//           <nav>
//             <img className="logo" src={Tafukut} alt="Logo" />
//           </nav>
//           <div className="Sign-flex--center">
//             <h1 className="sign__subtitle">
//               Unlock your potential with Tafukut's interactive coding tutorials. 
//               <span className='slide1_paragraph-span '>Join</span> our waitlist
//               <span className='slide1_paragraph-span '> today</span> and be among the first to elevate your coding skills to the next level!
//             </h1>
//             <form onSubmit={handleSubmit}>
//               <div className="sign__form-group">
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" id="name" name="name" placeholder='Name' required />
//               </div>
//               <div className="sign__form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" placeholder='Email' required />
//               </div>
//               <button className="sign__button" type="submit">Join Waitlist</button>
//             </form>
//             <div id="message" className='message'>{message}</div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Tafukut from './assets/TAFUKUT.svg';

function App() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    try {
      const response = await axios.post('https://tafukut-lunch-back.vercel.app', { name, email });
      setMessage(response.data.text);
    } catch (error) {
      setMessage('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <>
      <section className="Sign">
        <div>
          <nav>
            <img className="logo" src={Tafukut} alt="Logo" />
          </nav>
          <div className="Sign-flex--center">
            <h1 className="sign__subtitle">
              Unlock your potential with Tafukut's interactive coding tutorials. 
              <span className='slide1_paragraph-span '>Join</span> our waitlist
              <span className='slide1_paragraph-span '> today</span> and be among the first to elevate your coding skills to the next level!
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="sign__form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder='Name' required />
              </div>
              <div className="sign__form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Email' required />
              </div>
              <button className="sign__button" type="submit">Join Waitlist</button>
            </form>
            <div id="message" className='message'>{message}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
