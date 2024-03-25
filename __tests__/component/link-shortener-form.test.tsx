import { describe, expect, test, afterEach } from "vitest";
import {
    cleanup,
    waitFor,
    render,
    screen,
    fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkShortenerForm from "../../src/app/ui/home/link-shortener-form";

describe("LinkShortenerForm", () => {
    afterEach(() => {
        cleanup();
    });

    test("renders the form correctly", () => {
        render(<LinkShortenerForm error='' handleSubmit={async () => {}} />);
        expect(screen.getByLabelText(/Enter a link to shorten/i)).toBeDefined();
        expect(
            screen.getByPlaceholderText(/Enter Your Link Here/i)
        ).toBeDefined();
        expect(
            screen.getByRole("button", { name: /Shorten Link/i })
        ).toBeDefined();
    });

    test("shows error message when link is not entered", async () => {
        render(<LinkShortenerForm error='' handleSubmit={async () => {}} />);
        const button = screen.getByRole("button", { name: /Shorten Link/i });
        fireEvent.submit(button);
        await waitFor(() => {
            expect(
                screen.findByText(/Please enter a link to shortened!/i)
            ).toBeDefined();
        });
    });

    test("shows error message when form is submitted with invalid link", async () => {
        render(<LinkShortenerForm error='' handleSubmit={async () => {}} />);
        const input = screen.getByPlaceholderText(/Enter Your Link Here/i);
        userEvent.type(input, "invalidlink");
        const button = screen.getByRole("button", { name: /Shorten Link/i });
        fireEvent.submit(button);
        await waitFor(() => {
            expect(
                screen.findByText(/Please enter a valid link!/i)
            ).toBeDefined();
        });
    });
});
