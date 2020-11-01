import { Text } from '@chakra-ui/core';

export const correctFeedback = (
  <>
    <Text>
      <span role="img" aria-label="party popper">
        🎉
      </span>{' '}
      Yay! You got it right!
    </Text>
  </>
);

export const wrongFeedback = (
  <>
    <Text>
      <span role="img" aria-label="Sad but Relieved Face">
        😥
      </span>{' '}
      Darn! You're so close!
    </Text>
  </>
);
