import { useState,useEffect } from "react";
import'./Answersheet.css';

const Answersheet = ({ans,totalResult,index}) => {
    
    const [heading,setHeading] = useState(false)
    const [answer, setanswer] = useState(ans)

    useEffect(() => {
        if(checkHeading(ans)){
            setHeading(true)
            setanswer(replaceHeadingStarts(ans))
        }
    },[])

   


    function checkHeading(str) {
        return /^(\*)(\*)(.*)\*$/.test(str)
    }
   
    function replaceHeadingStarts(str) {
        return str.replace(/^\*+|\*+$/g, '')
    }

    return (
        <>
        {
            index && totalResult==0?<span className="main-heading">{answer}</span> : 
            heading ? <span className="heading">{answer}</span>
            :<span className="sub-heading">{answer}</span>
        }

        </>
    )
}
export default Answersheet;