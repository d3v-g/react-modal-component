import App from "../src/App"
import { render, screen } from "@testing-library/react"
import React from "react"

describe("App", () => {
    it("displays a button to open the first modal", () => {
        render(<App />)
        const button = screen.getByRole("button", {
            name: /open first modal/i,
        })
        expect(button).toBeInTheDocument()
    })
    it("displays a button to open the second modal", () => {
        render(<App />)
        const button = screen.getByRole("button", {
            name: /open second modal/i,
        })
        expect(button).toBeInTheDocument()
    })
})
