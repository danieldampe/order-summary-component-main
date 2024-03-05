import DOMHelper from "../helpers/dom-helper.js";
import Button from "./Button.js";
import SubscriptionPlanCard from "./SubscriptionPlanCard.js";

export default function OrderSummary() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "order-summary",
        IMG_SRC = "./assets/images/";
    // *** *** *** Execution *** *** ***
    return DOMHelper.createElement("article", {class: COMPONENT_NAME},
        // Top content 
        DOMHelper.createElement("div", {class: COMPONENT_NAME + "-top"},
            DOMHelper.createElement("img", {class: COMPONENT_NAME + "-banner", src: IMG_SRC + "illustration-hero.svg", alt: "Hero Illustration"})
        ),
        // Bottom content 
        DOMHelper.createElement("div", {class: COMPONENT_NAME + "-bottom"}, 
            // Body
            DOMHelper.createElement("div", {class: COMPONENT_NAME + "-body"},
                DOMHelper.createElement("h1", {class: COMPONENT_NAME + "-title"},
                    "Order Summary"
                ),
                DOMHelper.createElement("p", {class: COMPONENT_NAME + "-text"},
                    "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
                ),
                SubscriptionPlanCard()
            ),
            // Footer
            DOMHelper.createElement("div", {class: COMPONENT_NAME + "-ftr"},
                Button("primary", "Proceed to Payment"),
                Button("ghost", "Cancel Order")
            )
        ),
    );
};
