// Styled
import { EditorStyled } from "./styled";

//
import useEditor from "./useEditor";
import "grapesjs/dist/css/grapes.min.css";

type EditorProps = {
  id: string;
};
const Editor: React.FC<EditorProps> = ({ id }) => {
  const { editor } = useEditor({ id });

  return <EditorStyled id={id}></EditorStyled>;
};

export default Editor;
