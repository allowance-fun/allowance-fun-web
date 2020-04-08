import React from 'react';
import {Box, Grommet, Main, Paragraph, ResponsiveContext, Text} from 'grommet';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import Zoom from 'react-reveal/Zoom';

function MainPage() {
    const size = React.useContext(ResponsiveContext);
    console.log(size);
    let fontSize = "60pt";
    let rotation = "rotate(-15deg)";
    let boxMargin = "large";
    let titleBottomMargin = "medium";
    if(size === "small") {
        rotation = "rotate(-10deg)";
        fontSize = "30pt";
        boxMargin = "medium";
        titleBottomMargin = "xlarge";
    }
    return (
    <div style={{overflowY: "auto"}}>
        <Box margin={{bottom: titleBottomMargin, top: "medium"}} width="large" style={{fontFamily: "Henny Penny", color: "#179614", fontSize: fontSize, transform: rotation}} responsive="false"><Zoom top delay="1000">Allowance.Fun!</Zoom></Box>
        <Box margin="small" align="center">
            <Box margin={{top: boxMargin}} pad={"medium"}
                 alignContent="center" width="xlarge"
                 background={{color: "black", opacity: "strong", dark: true}}
                 round="medium"
                 style={{backdropFilter: "blur(5px)"}}
            >
                <Paragraph size="large" fill={true}>
                    Allowance.Fun is a app to help families manage allowances and how much the children have saved.
                    Do you ever wish that you and your children could keep track of how much they've saved and spent
                    without giving them physical money that get's lost?  Don't have the cash on allowance day?  Your
                    kids screaming at you for the latest game and you don't know how much money they are due because
                    of several missed allowance pay days?
                </Paragraph>
                <Paragraph size="large" fill={true}>
                    This app might be for you.  Allowance.fun is like a pretend digital ledger to help you and your
                    kids keep track of allowances.  No real money hear, it's all fake.  But you can choose how many
                    accounts they have and what they are for.  So you want them to have a virtual savings?  Create them
                    2 accounts and do an automatic split between them for each deposit.  You as the parent are in full
                    control, but at least you kids can see what their balance is without you (eliminating one of those
                    really annoying questions).
                </Paragraph>
            </Box>
        </Box>
    </div>);
}

function App() {
const {width, height } = useWindowSize();
  return (
    <Grommet plain>

      <Confetti
          style={{zIndex: -1, position: "fixed", width: width, height: height}}
          width={width}
          height={height}
          numberOfPieces={100}
          gravity={0.05}
      />
      <Box style={{
          zIndex: 1, position: "fixed", top: 0, left: 0,
          width: width, height: height
      }}>
          <MainPage/>
      </Box>
    </Grommet>
  );
}

export default App;
