import "./styles.css";
import Collaboration from '@tiptap/extension-collaboration'
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import { MenuBar } from "./toolbar";

// Adding collaboration
const ydoc = new Y.Doc()
const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc,
      })
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        Feel free to play around with the text!
      </p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    `
  });

  return (
    <div>
      <h1>Nebulae editor</h1>
      <p>
        Welcome to the Nebulae, a collaborative text editor and
        publishing platform that allows authors to co-create stories and share
        revenue from earnings based on their contribution. This is our
        ever-evolving demo.
      </p>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
