import PropTypes from 'prop-types';






export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsWrap>
            <TitleInfo>
            <StatisticsTitle>UPLOAD STATS</StatisticsTitle>            
            </TitleInfo>


            <StatsList>
                <StatsItem>
                    <StatsTitle></StatsTitle>
                    <StatsInfo></StatsInfo>
                </StatsItem>
                    <StatsTitle></StatsTitle>
                    <StatsInfo></StatsInfo>

                <StatsItem>
                    <StatsTitle></StatsTitle>
                    <StatsInfo></StatsInfo>
                </StatsItem>

                <StatsItem>
                    <StatsTitle></StatsTitle>
                    <StatsInfo></StatsInfo>
                </StatsItem>

                <StatsItem>
                    <StatsTitle></StatsTitle>
                    <StatsInfo></StatsInfo>
                </StatsItem>

            </StatsList>
            
        </StatisticsWrap>
    )
}


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  };