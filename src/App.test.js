import React from 'react';
import { render, waitForElement } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from './App';

const ABOUT_TEXT = "I’m Sarah, a brand consultant turned programmer."

describe("Portfolio site routes", function() {
  it("renders without crashing", async function() {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getByText("PROJECTS"));
  });

  it("renders the home snapshot", async function() {
    const { asFragment, getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getByText(ABOUT_TEXT));
    getByText(/ABOUT/)
    getByText(/DOWNLOAD RESUME/)

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the projects page", async function() {
    const { getByText, asFragment } = render(
      <MemoryRouter initialEntries={["/projects"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getByText("PROJECTS"));
    await waitForElement(() => getByText("JOBLY"));
    await waitForElement(() => getByText("WARBLER"));

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the connect page", async function() {
    const { getByText, asFragment } = render(
      <MemoryRouter initialEntries={["/connect"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getByText("CONNECT"));

    expect(asFragment()).toMatchSnapshot();
  });
});