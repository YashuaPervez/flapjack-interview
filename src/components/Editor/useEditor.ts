import { useEffect, useRef } from "react";
import grapesjs from "grapesjs";

// Plugins
import freeRangeText from "./plugins/freeRangeText";

type UseEditorArgs = {
  id: string;
};
const useEditor = (args: UseEditorArgs) => {
  const { id } = args;

  const editorRef = useRef<grapesjs.Editor>();

  useEffect(() => {
    const editor = grapesjs.init({
      container: `#${id}`,
      height: "600px",
      width: "auto",
      plugins: [freeRangeText],
      blockManager: {
        blocks: [
          {
            id: "free-range-text",
            label: "Free Range Text",
            media: `<svg width="40px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 0c-.6 0-1.1.4-1.4 1L2 17.3a1 1 0 01-.9.7 1 1 0 100 2h4a1 1 0 100-2 1 1 0 01-.9-1.2L5 14h7l.9 2.8A1 1 0 0112 18a1 1 0 100 2h7a1 1 0 100-2 1 1 0 01-1-.7L12.5 1c-.3-.6-.8-1-1.5-1H9zm-.5 4.3L5.8 12h5.4L8.5 4.3z" />
                    </svg>`,
            content: {
              type: "free-range-text",
              tagName: "p",
              components: [
                {
                  type: "textnode",
                  content: "Hello Static",
                },
              ],
            },
            activate: true,
          },
        ],
      },
    });

    editor.on("component:selected", function (model) {
      if (["free-range-text"].includes(model.attributes.type)) {
        editor.setDragMode("absolute");
      } else {
        editor.setDragMode("translate");
      }
    });

    editorRef.current = editor;
  }, [id]);

  return {
    editor: editorRef.current,
  };
};

export default useEditor;
