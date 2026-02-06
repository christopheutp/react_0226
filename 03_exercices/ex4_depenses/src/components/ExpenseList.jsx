import { useSelector } from "react-redux";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const items = useSelector((state) => state.expenses.items);

  if (items.length === 0) {
    return <div className="card empty">Aucune dépense pour le moment.</div>;
  }

  return (
    <div className="card list">
      {items.map((it) => (
        <ExpenseItem key={it.id} item={it} />
      ))}
    </div>
  );
}
