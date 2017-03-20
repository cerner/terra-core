/**
 * A container is a DOM node in the document. A container can have multiple overlays mounted on it.
 * A page can have multiple containers.
 * OverlayManager manages the relation between containers and overlays.
 * OverlayManager maintains a Map object.
 * Each unique container is registered as a key in the map. Its value is a Set object containing overlays mounted on it.
 * Current feature:
 * - If any overlay is open, disable the scrolling of its corresponding container.
 */

export default class OverlayManager {
  add(overlay, container) {
    this.containers = this.containers || new Map();
    let overlays = this.containers.get(container);
    if (overlays === undefined) {
      overlays = new Set();
      this.containers.set(container, overlays);
    }
    overlays.add(overlay);
    this.updateContainerStyle(container);
  }

  remove(overlay, container) {
    const overlays = this.containers.get(container);
    if (overlays) {
      overlays.delete(overlay);
    }
    this.updateContainerStyle(container);
  }

  updateContainerStyle(container) {
    const overlays = this.containers.get(container);
    if (overlays) {
      if (overlays.size > 0) {
        container.classList.add('terra-Overlay--open');
      } else {
        container.classList.remove('terra-Overlay--open');
        this.containers.delete(container);
      }
    }
  }
}
