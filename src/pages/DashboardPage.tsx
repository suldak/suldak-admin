import React, { Suspense } from 'react';
import styled from 'styled-components';

// components
import RowContainer from '@components/RowContainer';
import Box from '@components/core/Box';
import Title from '@components/core/Title';
import Breadcrumbs from '@components/core/Breadcrumbs';

import ColumnChart from '@components/Charts/ColumnChart';

// hooks
import useResponsive from '@hooks/useResponsive';

/** 메인 페이지 */
const DashboardPage = () => {
  const { isTablet, isMobile } = useResponsive();
  return (
    <>
      <Breadcrumbs />
      <RowContainer isTablet={isTablet} isMobile={isMobile}>
        <Box gridColumn="3">
          <Title>유저 수</Title>
        </Box>
        <Box gridColumn="3">
          <Title>span 6</Title>
        </Box>
        <Box gridColumn="3">
          <Title>span 3</Title>
        </Box>
        <Box gridColumn="3">
          <Title>span 3</Title>
        </Box>
      </RowContainer>
      <RowContainer isTablet={isTablet} isMobile={isMobile}>
        <Box gridColumn="9">
          <Title>컬럼 차트</Title>
          <ColumnChart />
        </Box>
        <Box gridColumn="3">
          <Title>원 그래프</Title>
        </Box>
      </RowContainer>
    </>
  );
};

export default DashboardPage;
