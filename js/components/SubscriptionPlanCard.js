import DOMHelper from "../helpers/dom-helper.js";

export default function SubscriptionPlanCard() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "subscription-plan-card";
    // *** *** *** Execution *** *** ***
    return DOMHelper.createElement("article", {class: COMPONENT_NAME},
        DOMHelper.createElement("img", {
            class: COMPONENT_NAME + "-icon",
            src: "./assets/images/" + "icon-music.svg",
            alt: "Music Icon"
        }),
        DOMHelper.createElement("p", {class: COMPONENT_NAME + "-details"},
            DOMHelper.createElement("span", {class: COMPONENT_NAME + "-mod"},
                "Annual Plan"
            ),
            DOMHelper.createElement("span", {class: COMPONENT_NAME + "-cst"},
                "$59.99/year"
            ),
        ),
        DOMHelper.createElement("a", {class: COMPONENT_NAME + "-btn", href: "#"},
            "Change"
        ),
    );
};
