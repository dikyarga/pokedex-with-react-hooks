import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ButtonAv from "./ButtonAv";

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
});
