import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders all anchor-nav links", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "Proof" })).toHaveAttribute(
      "href",
      "#proof",
    );
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
      "href",
      "#services",
    );
    expect(screen.getByRole("link", { name: "Packages" })).toHaveAttribute(
      "href",
      "#packages",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("renders each section anchor target", () => {
    render(<HomePage />);

    expect(document.getElementById("proof")).toBeTruthy();
    expect(document.getElementById("services")).toBeTruthy();
    expect(document.getElementById("packages")).toBeTruthy();
    expect(document.getElementById("contact")).toBeTruthy();
  });

  it("renders the contact card with primary CTA to contact page", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /start with a calm/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get My Quote" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("renders hero and contact CTAs with accessible names", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "Get a Quote" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See Packages" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get My Quote" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a Reset Consult" })).toBeInTheDocument();
  });

  it("renders without console errors", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<HomePage />);

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});
