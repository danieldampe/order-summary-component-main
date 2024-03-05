import DOMHelper from "../helpers/dom-helper.js";

export default function Button(type, text) {
    const COMPONENT_NAME = "btn";
    return DOMHelper.createElement("button", {class: [COMPONENT_NAME, COMPONENT_NAME + "-" + type]}, text);
};
