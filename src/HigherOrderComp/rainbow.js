import React from "react"

const Rainbow = (WrappedComponent) => {
    const colours = ["red", "pink", "orange", "blue", "yellow", "brown"]
    const randomcolour = colours[Math.floor(Math.random() * 5)]
    const className = randomcolour + "-text"
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default Rainbow