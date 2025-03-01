import React from "react";
import { styled } from "@mui/material";
import { motion } from "framer-motion";

// Full Page Container
const Container = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  overflow-y: auto;
  padding-top: 5vh;
`;

// Section Title
const Title = styled(motion.h1)`
  font-size: 3vw;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, #ff9a9e, #fad0c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2vh;
`;

// Subtitle
const Subtitle = styled(motion.h2)`
  font-size: 2vw;
  color: #ffeb3b;
  margin-bottom: 2vh;
`;

// Description
const Content = styled(motion.p)`
  font-size: 1.2vw;
  max-width: 80%;
  line-height: 1.5;
  margin: 0 auto 3vh;
`;

// Card Section
const CardContainer = styled("div")`
  display: flex;
  gap: 2vw;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 90%;
  margin-bottom: 5vh;
`;

// Individual Card
const Card = styled(motion.div)`
  width: 280px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Buttons
const ButtonContainer = styled("div")`
  margin-top: 2vh;
  display: flex;
  gap: 2vw;
`;

const CallToAction = styled(motion.button)`
  background: ${(props) => props.bg || "#ff5722"};
  border: none;
  padding: 1vw 2vw;
  font-size: 1vw;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border-radius: 0.5vw;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.hover || "#e64a19"};
    transform: scale(1.05);
  }
`;

// Main Component
const Codeforgood = () => {
  return (
    <Container>
      {/* Header Section */}
      <Title initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        Welcome to Code For Good
      </Title>
      <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Empowering Developers, Creating Impact
      </Subtitle>
      <Content initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Join us in building innovative solutions that make a difference. Explore opportunities, learn new
        skills, and contribute to real-world projects that create an impact.
      </Content>

      {/* Card Section */}
      <CardContainer>
        {[1, 2, 3].map((num) => (
          <Card key={num} whileHover={{ scale: 1.05 }}>
            <h3>Project {num}</h3>
            <p>Learn more about this amazing project and how you can contribute.</p>
            <CallToAction bg="#4caf50" hover="#388e3c">View Project</CallToAction>
          </Card>
        ))}
      </CardContainer>

      {/* Call to Action Buttons */}
      <ButtonContainer>
        <CallToAction whileHover={{ scale: 1.1 }}>Join Now</CallToAction>
        <CallToAction bg="#2196F3" hover="#1976D2">Learn More</CallToAction>
      </ButtonContainer>
    </Container>
  );
};

export default Codeforgood;
