import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import right_arrow from "../Assets/arrow-right.jpg";
import ellipse from "../Assets/Ellipse 5.jpg";
import dots from "../Assets/dots.jpg";
import edit from "../Assets/edit.jpg";
import trash from "../Assets/trash.jpg";


const orders = () => {

    const textStyle = {
        width: "63px",
        height: "22px",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "22px",
        color: "#555F7E",
      };
  return (
    <Box
    id="Latest-Order"
    position="absolute"
    width="1216px"
    height="830px"
    mt="354px"
    ml="263px"
    borderRadius="16px"
    bg="white"
    boxShadow="0px 8px 32px 0px #3326AE14"
  >
    <Heading
      as="h2"
      w="131px"
      h="30px"
      position="absolute"
      top="32px"
      left="32px"
      fontFamily="Inter"
      fontWeight="500"
      fontSize="20px"
      lineHeight="30px"
    >
      Latest Orders
    </Heading>
    <Box
      w="63px"
      h="22px"
      position="absolute"
      left="1121px"
      top="36px"
      display="flex"
    >
      <Text
        w="35px"
        h="22px"
        fontFamily="Inter"
        fontWeight="600"
        fontSize="14px"
        lineHeight="22px"
        textAlign="right"
      >
        More
      </Text>
      <Image
        w="16px"
        h="16px"
        position="absolute"
        top="4px"
        left="47px"
        src={right_arrow}
        alt="right_arrow"
      />
    </Box>

    <TableContainer
      width="1152px"
      position="absolute"
      top="94px"
      left="32px"
      borderRadius="8px 8px 0 0"
      color="#8E95A9"
    >
      <Table variant="simple">
        {/* <TableCaption>Latest Order</TableCaption> */}
        <Thead>
          <Tr>
            <Th>Products</Th>
            <Th>Gender</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex align="center">
                <img
                  style={{
                    width: "44px",
                    height: "44px",
                    marginRight: "8px",
                  }}
                  src={ellipse}
                  alt="ellipse"
                />
                <Text {...textStyle}>Product 1</Text>
              </Flex>
            </Td>
            <Td>
              <Text {...textStyle}>Male</Text>
            </Td>
            <Td>
              <Text {...textStyle}>Makeup</Text>
            </Td>
            <Td>
              <Text {...textStyle}>$556.34</Text>
            </Td>
            <Td>
              <Text>Lorem Ipsum is simply dummy</Text>
            </Td>
            <Td>
              <Box w="80px" h="16px" marginTop="24px">
                <Flex align="center" gap="16px">
                  <img src={edit} alt="edit" />
                  <img src={trash} alt="trash" />
                  <img src={dots} alt="dots" />
                </Flex>
              </Box>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
  )
}

export default orders