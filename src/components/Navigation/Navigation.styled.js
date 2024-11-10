import styled from '@emotion/styled';

import { Box } from '@mui/material';

export const CustomBox = styled(Box)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
