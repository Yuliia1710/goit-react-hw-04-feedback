import { StatisticsWrap, Element, P, Option } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => {
  return (
    <StatisticsWrap>
      <Element>
        <P>Good</P>
        <Option>{good}</Option>
      </Element>
      <Element>
        <P>Neutral</P>
        <Option>{neutral}</Option>
      </Element>
      <Element>
        <P>Bad</P>
        <Option>{bad}</Option>
      </Element>
      <Element>
        <P>Total</P>
        <Option>{total}</Option>
      </Element>
      <Element>
        <P>Positive percentage</P>
        <Option>{positivePersentage}%</Option>
      </Element>
    </StatisticsWrap>
  );
};

export default Statistics;
