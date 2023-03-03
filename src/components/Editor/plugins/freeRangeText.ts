import grapesjs from "grapesjs";

const freeRangeText: grapesjs.Plugin = (editor) => {
  editor.DomComponents.addType("free-range-text", {
    isComponent: (el) => el.tagName === "P",
    model: {
      default: {
        tagName: "p",
        draggable: "*",
        droppable: false,
        dmode: "absolute",
      },
    },
  });
};

export default freeRangeText;
