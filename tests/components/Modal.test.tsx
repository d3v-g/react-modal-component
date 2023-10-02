import React from "react"
import { render, screen } from "@testing-library/react"
import Modal, { IModalProps } from "../../src/components/Modal"
import userEvent from "@testing-library/user-event"
import { ModalStatus } from "../../src/enum/enum"

describe("Modal Component", () => {
    let modalProps: IModalProps

    describe("when modal is not open", () => {
        modalProps = {
            ariaLabel: "Test label",
            isOpen: false,
            title: "Test label title",
            description: "Test description",
            status: ModalStatus.SUCCESS,
            children: <div>test children</div>,
        }

        it("does not render the modal", () => {
            render(<Modal {...modalProps} />)
            expect(screen.queryByTestId("modal")).not.toBeInTheDocument()
        })
    })

    describe("when modal is open", () => {
        beforeEach(() => {
            modalProps = {
                ariaLabel: "Test label",
                isOpen: true,
                title: "Test label title",
                description: "Test description",
                status: ModalStatus.SUCCESS,
                children: <div>test children</div>,
            }
        })

        it("renders a modal", () => {
            render(<Modal {...modalProps} />)

            const modal = screen.getByTestId("modal")

            expect(modal).toBeInTheDocument()
            expect(modal).toHaveAttribute("aria-modal", "true")
        })

        it("renders a modal with the correct aria-label", () => {
            const ariaLabel = "render this aria-label"
            modalProps = { ...modalProps, ariaLabel }
            render(<Modal {...modalProps} />)

            expect(screen.getByRole("dialog")).toHaveAccessibleName(ariaLabel)
        })

        it("renders a modal with the correct title", () => {
            const title = "render this title"
            modalProps = { ...modalProps, title }
            render(<Modal {...modalProps} />)

            const modalTitle = screen.getByRole("heading", { level: 1 })

            expect(modalTitle).toHaveTextContent(title)

            expect(modalTitle).toHaveAttribute("id", "modal title")
            expect(screen.getByTestId("modal")).toHaveAttribute(
                "aria-labelledby",
                "modal title"
            )
        })

        it("renders a modal with the correct description", () => {
            const description = "render this description"
            modalProps = { ...modalProps, description }
            render(<Modal {...modalProps} />)

            const modalDescription = screen.getByText(description)

            expect(modalDescription).toBeInTheDocument()

            expect(modalDescription).toHaveAttribute("id", "modal description")
            expect(screen.getByTestId("modal")).toHaveAttribute(
                "aria-describedby",
                "modal description"
            )
        })

        describe("appearance", () => {
            beforeEach(() => {
                modalProps = {
                    ariaLabel: "Test label",
                    isOpen: true,
                    title: "Test label title",
                    description: "Test description",
                    status: ModalStatus.SUCCESS,
                    children: <div>test children</div>,
                }
            })

            test("modal with a success status", () => {
                const status = ModalStatus.SUCCESS
                modalProps = { ...modalProps, status }
                const { container } = render(<Modal {...modalProps} />)

                expect(container).toMatchSnapshot()
            })

            test("modal with an error status", () => {
                const status = ModalStatus.ERROR
                modalProps = { ...modalProps, status }
                const { container } = render(<Modal {...modalProps} />)

                expect(container).toMatchSnapshot()
            })
        })
    })
})
