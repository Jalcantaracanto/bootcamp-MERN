// import React from "react"
// import styles from "./components.module.css"

// const CajadeColor = (props) => {
//     // const styleColor = {
//     //     backgroundColor: props.color,
//     // }

//     return (
//         <div className={styles.containerBox}>
//             {/* <div className={styles.colorBox} style={styleColor}></div> */}
//             {props.div}
//         </div>
//     )
// }

// export default CajadeColor

import React from "react"
import styles from "./components.module.css"

const BoxColor = (props) => {
    return (
        <li className={styles.list}>
            {props.divs.map((div, index) => (
                <div key={index}>
                    {div}
                </div>
            ))}
        </li>
    )
}

export default BoxColor
