import React from 'react'
import { useSelector } from "react-redux";

export default function Bar() {
  const selectTotalByCategory = (category) => (state) =>
  state.expenses.items
    .filter((e) => e.category === category)
    .reduce((sum, e) => sum + e.amount, 0);

  const total = useSelector((state) => state.expenses.items.reduce((sum, e) => sum + e.amount , 0));
  const food = useSelector(selectTotalByCategory("Alimentation"));
  const transport = useSelector(selectTotalByCategory("Transport"));
  const rent = useSelector(selectTotalByCategory("Loyer"));
  const leisure = useSelector(selectTotalByCategory("Loisirs"));
  const other = useSelector(selectTotalByCategory("Autre"));

  return (
    <div className="card summary">
      <div className="kpi">
        <div className="kpi-label">Total</div>
        <div className="kpi-value">{total} €</div>
      </div>
      <div className="kpi"><div className="kpi-label">Alimentation</div><div className="kpi-value">{food} €</div></div>
      <div className="kpi"><div className="kpi-label">Transport</div><div className="kpi-value">{transport} €</div></div>
      <div className="kpi"><div className="kpi-label">Loyer</div><div className="kpi-value">{rent} €</div></div>
      <div className="kpi"><div className="kpi-label">Loisirs</div><div className="kpi-value">{leisure} €</div></div>
      <div className="kpi"><div className="kpi-label">Autre</div><div className="kpi-value">{other} €</div></div>
    </div>
  );
}
