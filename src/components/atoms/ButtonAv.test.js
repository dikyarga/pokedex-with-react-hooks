import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import ButtonAv from "./ButtonAv";

afterEach(cleanup);

describe("<ButtonAv />", () => {
  const content = "content";
  const onClicked = jest.fn();

  it("Should fire onClicked prop", () => {
    const { getByText } = render(
      <ButtonAv onClicked={onClicked}>{content}</ButtonAv>
    );
    const counter = getByText(content);

    fireEvent.click(counter);

    expect(onClicked).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    const { asFragment } = render(<ButtonAv>Text</ButtonAv>);
    expect(asFragment()).toMatchSnapshot();
  });
});
