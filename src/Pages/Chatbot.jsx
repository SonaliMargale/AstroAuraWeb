import { useState } from 'react';
import './Chatbot.css';
import { FiPaperclip } from 'react-icons/fi';
import { FiMic } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';
import { Url } from '../constant';
import Answersheet from '../components/Answersheet.jsx';
import CategorySelector from '../components/CategorySelector.jsx';
import SuggestQuestion from '../components/SuggestQuestion';
// import ChatNavbar from '../components/ChatNavbar';
import { FaGlobe } from 'react-icons/fa';




const Chatbot = () => {

    const [question, setquestion] = useState('')
    const [result, setresult] = useState([])

    const payload = {
        "contents": [{
            "parts": [{ "text": question }]
        }]
    }

    const askQuestion = async () => {
        let response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(payload)
        })

        response = await response.json();
        let dataString = response.candidates[0].content.parts[0].text;
        dataString = dataString.split("* ");
        dataString = dataString.map((item) => item.trim())

        //console.log(response.candidates[0].content.parts[0].text)
        
        setresult([...result,{type:'q',text:question},{type:'a',text:dataString}])


    }
    console.log(result)

    const handleCategorySelect = (cat) => {
        console.log('selected category:', cat.title)
    }

    return (

           
        <div className="main-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
           <div className='Main-header'>
             <nav className="Chatnavbar">
                   <div className="navbar-left">
                     <div className="logo-circle">
                       <div className="eclipse" />
                     </div>
                     <span className="logo-text">AstroAura</span>
                     <span className="ai-label">AURA AI</span>
                   </div>
                   <div className="navbar-center">
                     <a href="#">Free Vedic Birth Chart</a>
                     <a href="#">Pricing</a>
                     <a href="#">How does it work?</a>
                     <a href="#">More</a>
                   </div>
                   <div className="navbar-right">
                     <button className="lang-icon"><FaGlobe /></button>
                   </div>
                 </nav>
           </div>
           
      
            <div className='small-container' style={{ flex:1, display: 'flex', }}>
                <div className="sidebarPanel">
                   
                </div>

                <div className="chatSection">
                    <div className='messages'>
                        <ul>
                        {
                            result.map((item,index) => (
                                item.type=='q' ?  (
                                <li key={index+Math.random()} className='list-question'>
                                     <div className='bubble-question'>
                                          <Answersheet ans={item.text} totalResult={1} type={item.type} index={index}/>
                                     </div>
                                    </li>
                                    ) : (
                                        item.text.map((ansItem,ansIndex) => (
                                        <li key={index+Math.random()} className='list-answer'>
                                            <div className='bubble-answer'>
                                               <Answersheet ans={ansItem} totalResult={item.length} type={item.type} index={ansIndex}/>
                                            </div>

                                    </li>
                                    ))
                                )
                            ))
                        }
                        </ul>
                       

                        <CategorySelector onSelect={handleCategorySelect} />
                        <SuggestQuestion />

                    </div>
                    <div className="search-bar">
                        <button className="icon-button paperclip">
                            <FiPaperclip className="icons" />
                        </button>

                        <input
                            type="text"
                            placeholder="Ask your Question"
                            className="search-input"
                            value={question}
                            onChange={(e) => setquestion(e.target.value)}
                        />

                        <button className="icon-button mic">
                            <FiMic className="icons" />
                        </button>

                        <button onClick={askQuestion} className="send-button">
                            <FiSend className="icons" />
                        </button>
                    </div>

                </div>
            </div>
            </div>
      
    )
}
export default Chatbot;




