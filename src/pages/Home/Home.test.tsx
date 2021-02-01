import React from 'react';
import { render, screen } from "@testing-library/react"
import Home from "./Home";

describe('testing title component', () => {
    test("should contain 'Home' text in your content", () => {
        render(<Home />);

        const Title = screen.getByTestId('title');

        expect(Title).toHaveTextContent('Home');
    })
})