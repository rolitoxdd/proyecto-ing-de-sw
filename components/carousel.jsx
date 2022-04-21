import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import contentData from '../utils/contentData';
import { Box, Button, MobileStepper, Typography, Paper, Grid } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export const SwipeableTextMobileStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = contentData.length;
  const theme = useTheme();
  console.log('theme', theme);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleStepChange = step => {
    setActiveStep(step);
  };
  return (
    <Box sx={{ minWidth: '1600px', ml: -30 }}>
      <Paper
        square
        elevation={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default'
        }}>
        <Typography>{contentData[activeStep].name}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction == 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {contentData.map((val, index) => (
          <div key={val.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: '340px',
                  dislpay: 'block',
                  maxWidth: '1600px',
                  overflow: 'hidden',
                  width: '1600px'
                }}
                component="img"
                src={val.src}
                alt={val.name}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep == maxSteps - 1}>
            Next
            {theme.direction == 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
      />
    </Box>
  );
};
