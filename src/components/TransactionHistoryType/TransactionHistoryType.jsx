import css from './TransactionHistoryType.module.css';

const TransactionHistoryType = ({item}) => {
  return (
    <tr className={css.string}>
      <td className={css.type}>{item.type}</td>
      <td className={css.type}>{item.amount}</td>
      <td className={css.type}>{item.currency}</td>
    </tr>
  )
}

export default TransactionHistoryType