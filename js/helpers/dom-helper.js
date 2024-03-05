const DOMHelper = {};

// Create Element
DOMHelper.createElement = (tagName, attributes, ...content) => {
    // Element
    const $element = document.createElement(tagName);
    // Attributes
    if (attributes) {
        Object.entries(attributes).forEach(([name, value]) => {
            if (name === "class") { 
                Array.isArray(value) ? $element.classList.add(...value) : $element.classList.add(value);
            } else if (name === "style") {
                for (const propertyName in value) {
                    $element.style[propertyName] = value[propertyName];
                };
            } else {
                $element[name] = value;
            };
        });
    };
    // Content
    if (content) content.forEach(elm => $element.append(typeof elm === "function" ? elm() : elm)); 
    return $element;
};

DOMHelper.generate = (iterElm, callBackFn) => {
    const $fragment = document.createDocumentFragment();
    iterElm.forEach((value, key) => $fragment.append(callBackFn(value, key)));
    return $fragment;
};

export default DOMHelper;
