import PropTypes from 'prop-types';
import { 
    HeaderRow,
    HeaderPartition,
} from "./TransactionHistoryItem-styled";


export const TransactionHistoryItem = ({ currency, amount, type }) => {
    return (
      <HeaderRow>
        <HeaderPartition>{type}</HeaderPartition>
        <HeaderPartition>{amount}</HeaderPartition>
        <HeaderPartition>{currency}</HeaderPartition>
      </HeaderRow>
    );
  };
  
  TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };