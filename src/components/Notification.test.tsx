import React from "react";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { Notification } from "./Notification";
import { iMsgType } from "../utils/enum";
import { messages } from "../utils/messages";

const notification = {
    msgType: iMsgType.ERROR,
    msgText: messages.serviceError
};

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("should render a notification", () => {
    act(() => {
        render(<Notification {...notification} />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"notification\\">
      <div class=\\"MuiPaper-root MuiAlert-root MuiAlert-filledError MuiPaper-elevation6\\" role=\\"alert\\">
        <div class=\\"MuiAlert-icon\\"><svg class=\\"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\">
            <path d=\\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\\"></path>
          </svg></div>
        <div class=\\"MuiAlert-message\\">Service Error</div>
      </div>
    </div>"
  `);
});
