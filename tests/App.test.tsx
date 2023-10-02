import App from "../src/App"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

describe("App", () => {
    it("displays a button to open the success modal", () => {
        render(<App />)
        const button = screen.getByRole("button", {
            name: /open success modal/i,
        })
        expect(button).toBeInTheDocument()
    })
    it("displays a button to open the error modal", () => {
        render(<App />)
        const button = screen.getByRole("button", {
            name: /open error modal/i,
        })
        expect(button).toBeInTheDocument()
    })

    describe("modal behaviour", () => {
        it("opens a modal when the success button is clicked", async () => {
            const user = userEvent.setup()
            render(<App />)
            const button = screen.getByRole("button", {
                name: /open success modal/i,
            })
            await user.click(button)
            const modalHeader = screen.getByRole("heading", { level: 1 })
            expect(modalHeader).toHaveTextContent(
                "Congratulations! Your jet2 holiday booking has been confirmed"
            )
        })

        it("opens a modal when the error button is clicked", async () => {
            const user = userEvent.setup()
            render(<App />)
            const button = screen.getByRole("button", {
                name: /open error modal/i,
            })
            await user.click(button)
            const modalHeader = screen.getByRole("heading", { level: 1 })
            expect(modalHeader).toHaveTextContent(
                "There was an error booking your jet2 holiday, please try again"
            )
        })
    })
})
