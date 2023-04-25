import React, { useState } from "react"

const PersonCard = ({ age, firstName, lastName, hairColor }) => {
    const [personAge, setPersonAge] = useState(age)

    const increaseAge = () => {
        setPersonAge(personAge + 1)
    }

    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>
                BirthDay Button for {firstName} {lastName}
            </button>
        </div>
    )
}

export default PersonCard
