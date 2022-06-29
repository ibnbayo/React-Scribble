import {useState}  from "react"


function Count({number}) {
    const [counts, setCounts] = useState(0)
    function addCounts() {
        setCounts(prevCounts => prevCounts + 1)
    }
    function subCounts() {
        setCounts(prevCounts => prevCounts - 1)
    }

  return (
    <div className="counter">
            <button className="minus" onClick={subCounts} > - </button>
            <h3 className="count">{number=counts}</h3>
            <button className="plus" onClick={addCounts} > + </button>
    </div>
  )
}

export default Count