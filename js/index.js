import OrderSummary from "./components/OrderSummary.js";
import Footer from "./components/Footer.js";

// *** *** *** Variables *** *** ***
const $root = document.getElementById("root"),
    $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        OrderSummary()
    );
    $root.append(
        Footer()
    );
});
