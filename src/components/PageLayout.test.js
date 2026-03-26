import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PageLayout from "./PageLayout.js";

test("PageLayout renders header, footer, and children", () => {
  render(
    <PageLayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>© 2023 My Website.All rights reserved.</p>}
    >
      <p>This is the content of my webstie.</p>
    </PageLayout>
  );

  // Proper assertions using jest-dom
  expect(screen.getByText("Welcome to my website")).toBeInTheDocument();
  expect(screen.getByText("© 2023 My Website.All rights reserved.")).toBeInTheDocument();
  expect(screen.getByText("This is the content of my webstie.")).toBeInTheDocument();
});