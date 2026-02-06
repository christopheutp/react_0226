import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("demo");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/notes";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError("Identifiants invalides.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Connexion</h1>
      <form className="card form" onSubmit={onSubmit}>
        {error && <div className="card" style={{ marginBottom: 12, background: "#2a1a1a" }}>{error}</div>}
        <div className="form-row">
          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className="form-row">
          <label>Mot de passe</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <div className="actions">
            <button className="btn primary" type="submit" disabled={loading}>
                {loading ? "Connexion..." : "Se connecter"}
            </button>
            <Link className="btn" to="/register">Créer un compte</Link>
        </div>
      </form>
    </div>
  );
}
