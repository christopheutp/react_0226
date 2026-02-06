import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { register } from "../api/auth";

export default function RegisterPage() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/notes";

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 4) {
      setError("Mot de passe trop court (min. 4 caractères).");
      return;
    }

    setLoading(true);
    try {
      await register({ email, password });
      // auto-authentifié, on redirige sur /notes (ou l'URL protégée demandée)
      navigate(from, { replace: true });
    } catch (err) {
      setError("Inscription impossible. " + (err.message || ""));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Créer un compte</h1>
      <form className="card form" onSubmit={onSubmit}>
        {error && <div className="card" style={{ marginBottom: 12, background: "#2a1a1a" }}>{error}</div>}

        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            placeholder="vous@exemple.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="••••"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            minLength={4}
          />
        </div>

        <div className="form-row">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            placeholder="••••"
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            required
            minLength={4}
          />
        </div>

        <div className="actions">
          <Link className="btn" to="/login">J'ai déjà un compte</Link>
          <button className="btn primary" type="submit" disabled={loading}>
            {loading ? "Création..." : "S'inscrire"}
          </button>
        </div>
      </form>
    </div>
  );
}
