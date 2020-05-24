import React from 'react';
import { render, waitForElement } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from './App';


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
    const { asFragment, getByText, getAllByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getByText(/a brand consultant turned programmer/));
    getAllByText("ABOUT")
    getByText("DOWNLOAD RESUME")

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the projects page", async function() {
    const { getByText, getAllByText, asFragment } = render(
      <MemoryRouter initialEntries={["/projects"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getAllByText("PROJECTS"));
    await waitForElement(() => getByText(/JOBLY/));
    await waitForElement(() => getByText(/WARBLER/));

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the connect page", async function() {
    const { getAllByText, asFragment } = render(
      <MemoryRouter initialEntries={["/connect"]}>
        <App />
      </MemoryRouter>
    );
    await waitForElement(() => getAllByText("CONNECT"));

    expect(asFragment()).toMatchSnapshot();
  });
});