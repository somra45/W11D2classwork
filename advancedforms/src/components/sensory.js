
export default function sensory() {
    const fetchQ = async () => {
        const data = await fetch("../../assets/spi.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        if (data.ok) {
            const parsedData = data.json();
            return parsedData
        }
        else {
            alert("Something went wrong")
        }
};


const questionsArr = fetchQ();

function createSurvey() {
    return (
        questionsArr.map((q) => 
        <div>
            <h2>{q.stem}</h2>
            <input type="radio" name={q.code} value="strongdisagree">Strongly Disagree</input>
            
            <input type="radio" name={q.code} value="disagree"> Disagree</input>
                
            <input type="radio" name={q.code} value="strongdisagree"> </input>
            
            <input type="radio" name={q.code} value="strongdisagree">Strongly Disagree</input>
            
            <input type="radio" name={q.code} value="strongdisagree">Strongly Disagree</input>
        </div>
        )
    )
}
return (
    <form>
        <input type="radio" name="q1" />
    </form>
)
}