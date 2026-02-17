(async ()=>{
  const allElements = Array.from(document.getElementsByTagName('*'));

  const getDepth = (el) => {
    let depth = 0;
    while (el.parentElement) {
      depth++;
      el = el.parentElement;
    }
    return depth;
  };

  allElements.sort((a, b) => getDepth(b) - getDepth(a));

  for (element of allElements){
    if (element.firstChild && element.firstChild.nodeType === Node.TEXT_NODE){
      element.firstChild.nodeValue = "";
    }
  }
  for (element of allElements){
    if (element.firstChild && element.firstChild.nodeType === Node.TEXT_NODE){
      let quote = await fetch("https://api.kanye.rest/");
      quote = await quote.json();
      element.firstChild.nodeValue = quote["quote"];
    }
  }
})();
