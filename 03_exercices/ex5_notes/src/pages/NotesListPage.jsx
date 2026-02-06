import { useEffect, useState } from "react";
import { listNotes, deleteNote } from "../api/note";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/auth";

export default function NotesListPage() {
 const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    try {
      const data = await listNotes();
      setNotes(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onDelete = async (id) => {
    if (!confirm("Supprimer cette note ?")) return;
    await deleteNote(id);
    await load();
  };

  return (
    <div className="page">
      <header className="header">
        <h1>Notes</h1>
        <div className="actions">
          <button className="btn" onClick={() => { logout(); navigate("/login"); }}>
            Déconnexion
          </button>
          <Link className="btn primary" to="/notes/new">Nouvelle note</Link>
        </div>
      </header>

      {loading ? <div className="card">Chargement…</div> :
        notes.length === 0 ? <div className="card">Aucune note.</div> :
        <div className="card list">
          {notes.map(n => (
            <div key={n.id} className="row">
              <div className="col">
                <div className="title">{n.title}</div>
                <div className="muted">{new Date(n.updatedAt || n.createdAt).toLocaleString()}</div>
              </div>
              <div className="col actions">
                <Link className="btn" to={`/notes/${n.id}`}>Éditer</Link>
                <button className="btn danger" onClick={() => onDelete(n.id)}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>}
    </div>
  );
}
