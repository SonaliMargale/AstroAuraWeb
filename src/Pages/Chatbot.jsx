import { useEffect, useState, useRef } from 'react';
import './Chatbot.css';
import { FiPaperclip } from 'react-icons/fi';
import { FiMic } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';
import { Url } from '../constant';
import Answersheet from '../components/Answersheet.jsx';
import CategorySelector from '../components/CategorySelector.jsx';
import SuggestQuestion from '../components/SuggestQuestion';
import { FaPlus, FaSearch, FaCog } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import BirthChart from '../assets/BirthChart.svg';
import AuraAI from '../assets/AuraAI.svg';
import LangIcon from '../assets/LangIcon.svg';
import starlogo from '../assets/star.png'
import footlogo from '../assets/foot.svg'
import squarelogo from '../assets/square.png';
import ProfileIcon from '../assets/ProfileIcon.png'



const Chatbot = () => {

    const [question, setquestion] = useState('')
    const [result, setresult] = useState([]);
    const [recentHistory, setRecentHistory] = useState(JSON.parse(localStorage.getItem('history')))
    const [selectedHistory, setSelectedHistory] = useState('')
    const scrollToAns = useRef();
    const [isLoading, setisLoading] = useState(false)



    const askQuestion = async () => {
        if (!question && !selectedHistory) {
            return false
        }

        setisLoading(true)

        if (question) {
            const storedHistory = localStorage.getItem('history');

            if (storedHistory) {
                let history;
                try {
                    history = JSON.parse(storedHistory);
                } catch (e) {
                    console.error("Corrupted history in localStorage:", storedHistory);
                    history = [];
                }
                history = [question, ...history];
                localStorage.setItem('history', JSON.stringify(history));
                setRecentHistory(history);
            } else {
                const history = [question];
                localStorage.setItem('history', JSON.stringify(history));
                setRecentHistory(history);
            }

        }


        const payloadData = question ? question : selectedHistory
        const payload = {
            "contents": [{
                "parts": [{ "text": payloadData }]
            }]
        }
        let response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        response = await response.json();
        let dataString = response.candidates[0].content.parts[0].text;
        dataString = dataString.split("* ");
        dataString = dataString.map((item) => item.trim())

        //console.log(response.candidates[0].content.parts[0].text)
        setisLoading(false)
        setresult([...result, { type: 'q', text: question ? question : selectedHistory }, { type: 'a', text: dataString }])
        setquestion('')
        setTimeout(() => {
            scrollToAns.current.scrollTop = scrollToAns.current.scrollHeight;

        }, 500)
    }

    // console.log(result)
    console.log(recentHistory)

    const handleCategorySelect = (cat) => {
        console.log('selected category:', cat.title)
    }

    const isEnter = (event) => {
        if (event.key == 'Enter') {
            askQuestion()
        }
    }

    useEffect(() => {
        console.log(selectedHistory)
        if (selectedHistory) {
        setquestion(selectedHistory); // fill input
        askQuestion(selectedHistory); // trigger answer
    }
    }, [selectedHistory])



    return (
        <div className="main-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className='Main-header'>
                <nav className="Chatnavbar">
                    <div className="navbar-left">
                        <div className="logo-circle">
                            <img src={starlogo} alt="alt" />
                        </div>
                        <span className="logo-text">AstroAura</span>
                        <img className='ai-label' src={AuraAI} alt="alt" />
                    </div>
                    <div className="navbar-center">
                        <a href="#">Free Vedic Birth Chart</a>
                        <a href="#">Pricing</a>
                        <a href="#">How does it work?</a>
                        <a href="#">How does it work?</a>
                        <button className="lang-icon">
                            <img src={LangIcon} alt="alt" />
                        </button>
                    </div>
                </nav>
            </div>


            <div className='small-container' style={{ flex: 1, display: 'flex', }}>
                <div className='Main-sidebar'>
                    <div className="sidebarPanel">
                        <button className="ask-button">
                            Ask anything from AURA AI <FaPlus />
                        </button>

                        <div className='inner-bar'>
                            <div className="birth-chart">
                                <img
                                    src={BirthChart}
                                    alt="Birth Chart"
                                />
                                <p>Vikram’s Birth Chart</p>
                            </div>

                            <div className="search-box">
                                <FaSearch className="search-icon" />
                                <input type="text" placeholder="Search" />
                            </div>

                            <div className="recent-chats">
                                <h4>Recent Chats</h4>
                                <ul>
                                    {
                                        recentHistory && recentHistory?.slice(0, 3).map((item, index) => (
                                            <li className='chat-item'
                                                key={index}
                                                onClick={() => {
                                                    setSelectedHistory(item);
                                                    askQuestion()
                                                }}
                                                
                                                >
                                                    <img src={squarelogo} alt="alt" className="chat-icon"/>
                                                    <span className="chat-text">{item}</span>
                                                    
                                                    </li>
                                        ))
                                    }
                                </ul>

                                {/* <ul>
                                    {recentChats.map((chat, i) => (
                                        <li key={i}>
                                            <FaCommentDots />
                                            <span className='chat'>{chat}</span>
                                        </li>
                                    ))}
                                </ul> */}
                            </div>
                        </div>



                        <div className="user-footer">
                            <div className="user-status">
                                <img src={ProfileIcon} alt="alt" className='status-icon' />
                                <span className='username'>Vikram Varshney</span>
                            </div>
                            <button className="settings-button">
                                <FaCog />
                            </button>
                        </div>
                    </div>
                </div>



                <div className="chatSection">
                    <div className='messages' ref={scrollToAns}>
                        <ul>
                            {
                                result.map((item, index) => (
                                    item.type == 'q' ? (
                                        <li key={index + Math.random()} className='list-question'>
                                            <div className='bubble-question'>
                                                <Answersheet ans={item.text} totalResult={1} type={item.type} index={index} />
                                            </div>
                                        </li>
                                    ) : (
                                        item.text.map((ansItem, ansIndex) => (
                                            <li key={index + Math.random()} className='list-answer'>
                                                <div className='bubble-answer'>
                                                    <Answersheet ans={ansItem} totalResult={item.length} type={item.type} index={ansIndex} />
                                                </div>

                                            </li>
                                        ))
                                    )
                                ))
                            }
                            {
                                isLoading && (
                                    <div className="loader-bubble">
                                        <span className="loader-text">AURA AI is analyzing your question</span>
                                        <img src={footlogo} alt="alt" />
                                    </div>
                                )
                            }
                        </ul>


                        {
                             !question && !selectedHistory && !isLoading && result.length === 0 &&(
                                <>
                                    <CategorySelector onSelect={handleCategorySelect} />
                                    <SuggestQuestion />
                                </>
                            )
                        }


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
                            onKeyDown={isEnter}
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




