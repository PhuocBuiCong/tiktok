import type { DirectiveBinding, ObjectDirective } from "vue";

interface HTMLElementWithOutsideClick extends HTMLElement {
  clickOutsideEvent?: (event: Event) => void;
}

const useClickOutside: ObjectDirective<HTMLElementWithOutsideClick> = {
  beforeMount(
    el: HTMLElementWithOutsideClick,
    binding: DirectiveBinding<() => void>
  ) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        if (binding.value) {
          binding.value();
        }
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el: HTMLElementWithOutsideClick) {
    if (el.clickOutsideEvent) {
      document.removeEventListener("click", el.clickOutsideEvent);
      delete el.clickOutsideEvent;
    }
  },
};

export default useClickOutside;
