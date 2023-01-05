


import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Box, Text } from "@chakra-ui/react";
//import Stats from "./Stats"
function GitHubCalender() {
  return (
    <Box mt='20px'bg='skyblue' color="black" h="360">
        <Box w="80%" transform="scale(1.05)" m="auto" textAlign="center" p="60px auto">
            <Row style={{ justifyContent: "center", padding: "20px auto", paddingTop: "60px"}}>
           
            {/* <Text mb="25px" textAlign="center"  fontWeight="400" fontSize={["3xl", "4xl", "5xl"]}>My Github Calender</Text> */}
            <GitHubCalendar
                username="jitendra4545"
                blockSize={15}
                blockMargin={5}
                color="red"
                fontSize={15}
            />
            </Row>
        </Box>
       
    </Box>
  );
}

export default GitHubCalender;