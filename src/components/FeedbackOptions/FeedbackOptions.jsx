import { FeedbackBtn, Button } from './Feedbackoptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);

  return (
    <FeedbackBtn>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </FeedbackBtn>
  );
};

export default FeedbackOptions;
