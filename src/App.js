import React from 'react';
import {Box, Grommet, Paragraph, ResponsiveContext} from 'grommet';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Zoom } from 'react-awesome-reveal';

function MainPage() {
    const size = React.useContext(ResponsiveContext);
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
        <Box margin={{bottom: titleBottomMargin, top: "medium"}} width="large" style={{fontFamily: "Henny Penny", color: "#179614", fontSize: fontSize, transform: rotation}} responsive={false}><Zoom direction="top" delay={1000}>Allowance.Fun!</Zoom></Box>
        <Box margin="small" align="center">
            <Box margin={{top: boxMargin}} pad={"medium"}
                 alignContent="center" width="xlarge"
                 background={{color: "black", opacity: "strong", dark: true}}
                 round="medium"
                 style={{backdropFilter: "blur(5px)"}}
            >
                <Paragraph size="large" fill={true}>
                    Allowance.Fun is a app to help families manage allowances and keep track of how much the children
                    have saved and spent.
                </Paragraph>
                <ul style={{fontSize: "1.25em", marginBlockStart: 0, marginBlockEnd: 0}}>
                    <li>Do you ever give them cash, and they lose it?</li>
                    <li>Don't have the cash on allowance day?</li>
                    <li>Kids begging you for the latest game and you do not know how much money they "have"?</li>
                </ul>
                <Paragraph size="large" fill={true}>
                    This app might be for you.  Allowance.fun is a pretend digital ledger to help you and your
                    kids keep track of allowances.  No real money here, it is all virtual.  But you can choose how many
                    accounts they have and what those accounts are used for.  Perhaps you want them to have a virtual
                    savings?  With this app you can create them 2 accounts and do an automatic split between them
                    with each deposit.  You, as the parent, are in full control.
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
