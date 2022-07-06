import PropTypes from 'prop-types';
import { 
    StatisticsWrap, 
    StatisticsTitle,
    StatsList,
    ListItem,
    ItemLable,
    ItemPercentage,
   } from './Statistics-styled';






export const Statistics = ({ title, stats, colorFn }) => {
    return (
        <StatisticsWrap>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

            <StatsList>
            {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id} colorFn={colorFn}>
              <ItemLable>{label}</ItemLable>
              <ItemPercentage>{percentage}%</ItemPercentage>
            </ListItem>
          );
        })}
            </StatsList>
            
        </StatisticsWrap>
    )
}


Statistics.propTypes = {
    title: PropTypes.string,
    colorFn: PropTypes.func,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };