var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let el of startEl.children) { // childrens of my body tag
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, el))
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => `#${element.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (element) =>
      element.classList.contains(selector.substring(1));
    /*
    The Element.classList is a read-only property that returns a 
    live DOMTokenList collection of the class attributes of the element.
    The substring() method returns the part of the string 
    between the start and end indexes, or to the end of the string.
    */
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      const [tag, className] = selector.split(".");
      //with split i do div.name => div name and compare the tag and className separately
      return (
        element.classList.contains(className) &&
        element.tagName.toLowerCase() === tag.toLowerCase()
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (element) =>
      element.tagName.toLowerCase() === selector.toLowerCase();
    /*
    toLowerCase because tagName return the tag but in upperCase, h2 => H2
    */
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
