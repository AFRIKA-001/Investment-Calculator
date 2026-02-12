
  export default function UserInput(){
    return(<>
        <div id="user-input">
            <label htmlFor="initial-investment">Initial Investment</label>
            <input type="text"  className="input-group"/>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input type="text"   className="input-group"/>
            <label htmlFor="expected-return">Expected return</label>
            <input type="text"  className="input-group"/>
            <label htmlFor="duration">Duration</label>
            <input type="text"  className="input-group" />
        </div>
        <div>
      
        </div>
        </>

        
    )
}