import TransactionHistoryType from "../TransactionHistoryType/TransactionHistoryType";
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <table className={css.table}>
  <thead className={css.thead}>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.tbody}>
        {items.map((item) => {
          return <TransactionHistoryType key={item.id} item={item} />
    })}    
  </tbody>
</table>
  )
}

export default TransactionHistory;