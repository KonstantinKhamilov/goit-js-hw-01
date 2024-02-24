`use strict`;

function getElementWidth(content, padding, border) {
    let contentValue = Number.parseFloat(content);
    let paddingValue = Number.parseFloat(padding);
    let borderValue = Number.parseFloat(border);

    let result = contentValue + ((paddingValue + borderValue) * 2);

    return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
