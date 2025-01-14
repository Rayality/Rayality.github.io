import '../css/budget.css'
import DataEntry from '../components/DataEntry'
import { useState } from 'react'

export default function Budget() {
    const [income, setIncome] = useState(0)
    
    return (
        <div className="budget">
            <h1 className="">Budget Calculator</h1>
            <div>
                <div>
                    <DataEntry
                        text={'Weekly income'}
                        placeholder={'0$'}
                        userInput={income}
                        setUserInput={setIncome}
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
