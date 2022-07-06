import PropTypes from 'prop-types';
import { Transactions, Header, } from './TransactionHistory-styled';
import { TransactionHistoryItem } from 'components/TransactionHistoryItem/TransactionHistoryItem';


export const TransactionHistory = ({ transactions })  => {

return (
 <Transactions>
    <Header>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </Header>


    
    <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
</Transactions>   
)

}



TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ),
  };