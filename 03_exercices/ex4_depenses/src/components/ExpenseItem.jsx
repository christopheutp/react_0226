import { useDispatch } from "react-redux";
import { removeExpense } from "../feature/expenseSlice";

export default function ExpenseItem({item}) {
 const dispatch = useDispatch();

  return (
    <div className="expense-item">
      <div className="left">
        <div className="label">{item.label}</div>
        <div className="meta">
          <span className="badge">{item.category}</span>
          <span className="date">{item.date}</span>
        </div>
      </div>
      <div className="right">
        <div className="amount">{item.amount} €</div>
        <button className="btn danger" onClick={() => dispatch(removeExpense(item.id))}>
          Supprimer
        </button>
      </div>
    </div>
  );
}
