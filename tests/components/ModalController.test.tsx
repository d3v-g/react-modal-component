import React from "react"
import { render, screen } from "@testing-library/react"
import ModalController from "../../src/components/ModalController"
import { vi } from "vitest"
import userEvent from "@testing-library/user-event"

const MockModalElement = vi.fn((handleClick) => (
    <div data-testid="mock modal">
        Modal
        <button onClick={handleClick}>Close modal</button>
    </div>
))

const MockControlElement = vi.fn((handleClick) => (
    <div data-testid="mock controller" onClick={handleClick}>
        Open modal
    </div>
))

describe("ModalController Component", () => {
    it("renders the controlElement", () => {
        render(
            <ModalController
                modalElement={(handleClick) => MockModalElement(handleClick)}
                controlElement={(handleClick) =>
                    MockControlElement(handleClick)
                }
            />
        )
        expect(MockControlElement).toHaveBeenCalledTimes(1)
    })

    it("does not render the modal initially", () => {
        render(
            <ModalController
                modalElement={(handleClick) => MockModalElement(handleClick)}
                controlElement={(handleClick) =>
                    MockControlElement(handleClick)
                }
            />
        )
        expect(screen.queryByTestId("mock modal")).not.toBeInTheDocument()
    })

    it("opens the modal when controlElement is clicked", async () => {
        const user = userEvent.setup()

        render(
            <ModalController
                modalElement={(handleClick) => MockModalElement(handleClick)}
                controlElement={(handleClick) =>
                    MockControlElement(handleClick)
                }
            />
        )

        await user.click(screen.getByTestId("mock controller"))
        expect(MockModalElement).toHaveBeenCalledTimes(1)
        expect(screen.getByTestId("mock modal")).toBeInTheDocument()
    })

    it("closes the modal when the close button is clicked", async () => {
        const user = userEvent.setup()
        render(
            <ModalController
                modalElement={(handleClick) => MockModalElement(handleClick)}
                controlElement={(handleClick) =>
                    MockControlElement(handleClick)
                }
            />
        )
        await user.click(screen.getByText("Open modal"))
        const closeButton = screen.getByRole("button", { name: "Close modal" })
        await user.click(closeButton)
        expect(screen.queryByTestId("mock modal")).not.toBeInTheDocument()
    })
})
