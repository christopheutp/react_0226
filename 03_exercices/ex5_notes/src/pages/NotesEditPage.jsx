import { useEffect, useState } from "react";
import { createNote, getNote, updateNote } from "../api/note";
import { useNavigate, useParams } from "react-router-dom";

export default function NotesEditPage() {
  const { id } = useParams();     
  const isNew = id === "new";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(!isNew);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isNew) {
      (async () => {
        setLoading(true);
        try {
          const n = await getNote(id);
          setTitle(n.title || "");
          setContent(n.content || "");
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id, isNew]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (isNew) await createNote({ title: title.trim(), content });
    else await updateNote(id, { title: title.trim(), content });
    navigate("/notes");
  };

  if (loading) return <div className="page"><div className="card">Chargement…</div></div>;

  return (
    <div className="page">
      <h1>{isNew ? "Nouvelle note" : "Éditer la note"}</h1>
      <form className="card form" onSubmit={onSubmit}>
        <div className="form-row">
          <label>Titre</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} required />
        </div>
        <div className="form-row">
          <label>Contenu</label>
          <textarea rows={10} value={content} onChange={(e)=>setContent(e.target.value)} />
        </div>
        <div className="actions">
          <button className="btn" type="button" onClick={() => navigate(-1)}>Annuler</button>
          <button className="btn primary" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
}
