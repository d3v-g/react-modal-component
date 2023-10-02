import React from "react"
import { render, screen } from "@testing-library/react"
import Modal, { IModalProps } from "../../src/components/Modal"
import userEvent, { UserEvent } from "@testing-library/user-event"
import { ModalStatus } from "../../src/enum/enum"
import { vi } from "vitest"

describe("Modal Component", () => {
    let modalProps: IModalProps

    describe("when modal is not open", () => {
        modalProps = {
            isOpen: false,
            title: "Test modal title",
            description: "Test description",
            status: ModalStatus.SUCCESS,
            onClose: vi.fn(),
            onContinue: vi.fn(),
        }

        it("does not render the modal", () => {
            render(<Modal {...modalProps} />)
            expect(screen.queryByTestId("modal")).not.toBeInTheDocument()
        })
    })

    describe("when modal is open", () => {
        beforeEach(() => {
            modalProps = {
                isOpen: true,
                title: "Test modal title",
                description: "Test description",
                status: ModalStatus.SUCCESS,
                onClose: vi.fn(),
                onContinue: vi.fn(),
            }
        })

        it("renders a modal", () => {
            render(<Modal {...modalProps} />)

            const modal = screen.getByTestId("modal")

            expect(modal).toBeInTheDocument()
            expect(modal).toHaveAttribute("aria-modal", "true")
        })

        it("renders a modal with the correct title", () => {
            const title = "render this title"
            modalProps = { ...modalProps, title }
            render(<Modal {...modalProps} />)

            const modalTitle = screen.getByRole("heading", { level: 1 })
            expect(screen.getByRole("dialog")).toHaveAccessibleName(title)
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

        describe("user interactions", () => {
            let user: UserEvent
            beforeEach(() => {
                user = userEvent.setup()
                modalProps = {
                    isOpen: true,
                    title: "Test modal title",
                    description: "Test description",
                    status: ModalStatus.SUCCESS,
                    onClose: vi.fn(),
                    onContinue: vi.fn(),
                }
            })

            test("onClose is called when cancel button is clicked", async () => {
                const onCloseSpy = vi.fn()
                modalProps = { ...modalProps, onClose: onCloseSpy }
                render(<Modal {...modalProps} />)

                const cancelButton = screen.getByRole("button", {
                    name: /cancel/i,
                })

                await user.click(cancelButton)
                expect(onCloseSpy).toHaveBeenCalledTimes(1)
            })

            test("onContinue is called when continue button is clicked", async () => {
                const onContinueSpy = vi.fn()
                modalProps = { ...modalProps, onContinue: onContinueSpy }
                render(<Modal {...modalProps} />)

                const cancelButton = screen.getByRole("button", {
                    name: /continue/i,
                })

                await user.click(cancelButton)
                expect(onContinueSpy).toHaveBeenCalledTimes(1)
            })
        })

        describe("appearance", () => {
            beforeEach(() => {
                modalProps = {
                    isOpen: true,
                    title: "Test modal title",
                    description: "Test description",
                    status: ModalStatus.SUCCESS,
                    onClose: vi.fn(),
                    onContinue: vi.fn(),
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
