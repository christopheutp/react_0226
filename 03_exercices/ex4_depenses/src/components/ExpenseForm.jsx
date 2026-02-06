import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../feature/expenseSlice";

const CATEGORIES = [
  { value: "Alimentation", label: "Alimentation" },
  { value: "Transport", label: "Transport" },
  { value: "Loyer", label: "Loyer" },
  { value: "Loisirs", label: "Loisirs" },
  { value: "Autre", label: "Autre" },
];
export default function ExpenseForm() {
  const dispatch = useDispatch();

  const labelRef = useRef(null);
  const amountRef = useRef(null);
  const categoryRef = useRef(null);
  const dateRef = useRef(null);


  const onSubmit = (e) => {
    e.preventDefault();

    const label = labelRef.current.value;
    const amount = parseFloat(amountRef.current.value);
    const category = categoryRef.current.value;
    const date = dateRef.current.value;

    dispatch(addExpense({ label, amount, category, date }));

    labelRef.current.value = "";
    amountRef.current.value = "";
    categoryRef.current.value = "Alimentation";

  };

  return (
    <form className="card form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="label">Libellé</label>
        <input
          id="label"
          type="text"
          placeholder="Ex: Courses"
          ref={labelRef}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="amount">Montant</label>
        <input
          id="amount"
          type="number"
          placeholder="12.50"
          ref={amountRef}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="category">Catégorie</label>
        <select id="category" ref={categoryRef} defaultValue="Alimentation">
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          ref={dateRef}
          required
        />
      </div>

      <div className="actions">
        <button className="btn primary" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  );
}
