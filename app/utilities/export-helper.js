/* Credits to https://github.com/kennethjiang/react-file-download */
const downloadData = (data, filename, typeMime) => {
    const blob = new Blob([data], {
        type: typeMime
    });
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE workaround for "HTML7007: One or more blob URLs were 
        // revoked by closing the blob for which they were created. 
        // These URLs will no longer resolve as the data backing 
        // the URL has been freed."
        window.navigator.msSaveBlob(blob, filename);
    } else {
        const csvURL = window.URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', filename);
        tempLink.setAttribute('target', '_blank');
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    }
}

const exportHtml = (htmlElement, styleSheets, titleText, filename) => {
    const doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const html = doc.documentElement;
    // Head
    const head = doc.createElement('head');
    const title = doc.createElement('title');
    title.innerText = titleText;//'Character sheet';
    head.appendChild(title);
    const style = doc.createElement('style');
    let rules = '';
    for (let i = 0; i < styleSheets.length /* document.styleSheets.length*/; i++) {
        const styleSheet = styleSheets[i];
        for (let j = 0; j < styleSheet.cssRules.length; j++) {
            const cssRule = styleSheet.cssRules[j];
            if (!!cssRule.selectorText && cssRule.selectorText.indexOf('.classImg') === -1 && cssRule.selectorText.indexOf('.iconClass') === -1 && cssRule.selectorText.indexOf('.dashboard') === -1) {
                rules += cssRule.cssText;
                rules += '\n';
            }
        }
    }
    style.innerHTML = rules;
    head.appendChild(style);
    html.appendChild(head);

    // Head
    const body = doc.createElement('body');
    body.innerHTML = /*this.refs['character-sheet']*/htmlElement.outerHTML;
    html.appendChild(body);
    downloadData(html.outerHTML, filename, 'text/html');
}

export {
    exportHtml,
    downloadData
}