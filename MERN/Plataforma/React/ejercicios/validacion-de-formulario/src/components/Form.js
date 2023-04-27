import React, { useReducer } from "react"

const initialState = {
    firstName: {
        value: "",
        error: null,
    },
    lastName: {
        value: "",
        error: null,
    },
    email: {
        value: "",
        error: null,
    },
}

const reducer = (state, action) => {
    const { type, payload } = action
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    switch (type) {
        case "firstName":
            if (payload.length <= 2) {
                return {
                    ...state,
                    [type]: {
                        value: payload,
                        error: "First name must be at least 2 characters long",
                    },
                }
            }
            break

        case "lastName":
            if (payload.length <= 2) {
                return {
                    ...state,
                    [type]: {
                        value: payload,
                        error: "Last name must be at least 2 characters long",
                    },
                }
            }
            break

        case "email":
            if (!validEmail.test(payload)) {
                return {
                    ...state,
                    [type]: {
                        value: payload,
                        error: "Email is invalid",
                    },
                }
            }
            break

        default:
            break
    }

    return {
        ...state,
        [type]: {
            value: payload,
            error: null,
        },
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (value === "") {
            dispatch({
                type: name,
                payload: "",
            })
        } else {
            dispatch({
                type: name,
                payload: value,
            })
        }
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span> <input name="firstName" value={state.firstName.value} onChange={handleChange} />
                    {state.firstName.error !== null && <p className="error">{state.firstName.error}</p>}
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span> <input name="lastName" value={state.lastName.value} onChange={handleChange} />
                    {state.lastName.error !== null && <p className="error">{state.lastName.error}</p>}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span> <input name="email" value={state.email.value} onChange={handleChange} />
                    {state.email.error !== null && <p className="error">{state.email.error}</p>}
                </label>
            </div>
        </div>
    )
}

export default Form
