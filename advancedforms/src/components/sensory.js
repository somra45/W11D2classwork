import { useEffect, useState } from 'react';


export default function Sensory() {

    const [questionsObj, setQuestionsObj] = useState({});

    useEffect(() => {
        const fetchQ = async () => {
            const data = await fetch("./spi.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if (data.ok) {
                const parsedData = await data.json();
                setQuestionsObj(parsedData);
                console.log(questionsObj);
            }
            else {  
                alert("Something went wrong")
            }
        };
        fetchQ();
    }, []);

    function createSurvey() {
        return (
            questionsObj.questions.map((q) => 
            <div>
                <h2>{q.stem}</h2>
                {/* <input type="radio" name={q.code} value="strongdisagree">Strongly Disagree</input>
                
                <input type="radio" name={q.code} value="disagree"> Disagree</input>
                    
                <input type="radio" name={q.code} value="neutral"> Neutral</input>
                
                <input type="radio" name={q.code} value="strongagree">Strongly Agree</input>
                
                <input type="radio" name={q.code} value="agree">Agree</input> */}
            </div>
            )
        )
    }

    return (
        <form>
            {createSurvey()}
        </form>
    )
}