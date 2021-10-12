/**
 * @param {HTMLElement} elementId
 * @param {string} content
 */
function injectContent (elementId: HTMLElement, content: string): void {
  elementId.innerHTML += content
}

export default injectContent
