import React from 'react'
import Bar from '../components/Bar'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'

export default function ExpensesPage() {
  return (
    <div className='page'>
        <h1>Suivi des depenses</h1>
        <Bar></Bar>
        <ExpenseForm></ExpenseForm>
        <ExpenseList></ExpenseList>
    </div>
  )
}
