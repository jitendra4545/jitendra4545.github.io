import React from "react";
//import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import "../App.css";
const GitHubStats = () => {
  return (
    // streak 
    <Box  display={'grid'} gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(2,1fr)' }} >
      <div
        style={{ marginTop: '50px', }}
        height={{
          base: '40%', // 0-48em
          md: '50%', // 48em-80em,
          xl: '25%', // 80em+
        }}


        width={[
          '40%', // 0-30em
          '50%', // 30em-48em
          '25%', // 48em-62em
          '15%', // 62em+
        ]}>

        <a target={'_blank'} href="https://github.com/jitendra4545">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=jitendra4545"
            alt="jitendra4545"
          />
        </a>
      </div>

      <div
      style={{display:"grid"}}
      >
        {/* <a href="https://github.com/jitendra4545">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jitendra4545"
            alt="jitendra4545" //launguages
          />
        </a> */}
        <a target={'_blank'} href="https://github.com/jitendra4545">
          <img
            style={{ marginTop: '50px' }}
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=jitendra4545&count_private=true&show_icons=true"
            alt="jitendra4545"//stats
          />
        </a>
      </div>
    </Box>
  );
};

export default GitHubStats;