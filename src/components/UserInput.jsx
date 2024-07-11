
export default function UserInput({onChangeInput , userInput}){
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >INITIAL INVESTEMENT</label>
                    <input type="number" required value={userInput.initialInvestment}  onChange={(event)=>onChangeInput('initialInvestment',event.target.value)}/>
                </p>

                <p>
                    <label >ANNUAL INVESTEMENT</label> 
                    <input type="number" required value={userInput.annualInvestment}  onChange={(event)=>onChangeInput('annualInvestment',event.target.value)}/>
                </p>

                <p>
                    <label >EXPECTED RETURN</label> 
                    <input type="number" required value={userInput.expectedReturn}  onChange={(event)=>onChangeInput('expectedReturn',event.target.value)}/>
                </p>

                <p>
                    <label>DURATION</label>
                    <input type="number" required value={userInput.duration}  onChange={(event)=>onChangeInput('duration',event.target.value)}/>
                </p>

            </div>
        </section>
    );
}