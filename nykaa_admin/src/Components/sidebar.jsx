import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import dashboard from "../Assets/dashboard.jpg";
import analytics from "../Assets/clipboard-tick.jpg";
import setting from "../Assets/setting-2.jpg";

const Sidebar = () => {
  return (
    <Box id="Sidebar" w="20%" ml={"0px"} bg="#FFFFFF">
      <Text
        w="203px"
        h="36px"
        mt="63px"
        ml="18px"
        fontWeight="700"
        fontSize="24px"
        lineHeight="36px"
        fontFamily="Poppins, sans-serif"
        color="#013CC6"
      >
        Nyka Dashboard
      </Text>
      <VStack
        width="131px"
        height="993px"
        ml="41px"
        padding="0 0 30px 0"
        position="absolute"
        top="156px"
        left="41px"
      >
        <Box id="Frame 1" w="131px" h="154px" display="grid" gap="41px">
          <Box class="Group" display="flex" h="24px" gap="15px">
            <Box>
              {" "}
              <img
                style={{ width: "24px", height: "24px" }}
                src={dashboard}
                alt="dashboard"
              />{" "}
            </Box>
            <Box>
              {" "}
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="Poppins"
                letterSpacing="2%"
              >
                Dashboard
              </Text>
            </Box>
          </Box>
          <Box class="Group" display="flex" h="24px" gap="15px">
            <Box>
              {" "}
              <img
                style={{ width: "24px", height: "24px" }}
                src={analytics}
                alt="analytics"
              />{" "}
            </Box>
            <Box>
              {" "}
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="Poppins"
                letterSpacing="2%"
              >
                Analytics
              </Text>
            </Box>
          </Box>
          <Box class="Group" display="flex" h="24px" gap="15px">
            <Box>
              {" "}
              <img
                style={{ width: "24px", height: "24px" }}
                src={setting}
                alt="analytics"
              />{" "}
            </Box>
            <Box>
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="Poppins"
                letterSpacing="2%"
              >
                Logout
              </Text>
            </Box>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
