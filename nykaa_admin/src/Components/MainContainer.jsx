import React from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Select,
  Text
} from "@chakra-ui/react"
import notification from "../Assets/notification.jpg";
import elipse from "../Assets/Ellipse.jpg"
import avatar from "../Assets/Profile Avtar.jpg"
import search from "../Assets/search.jpg"
import arrowUp from "../Assets/arrow-up.jpg"
import Productlist from './Productlist';

const MainContainer = () => {




  const selectStyle={
    w: "656px",
    h: "43px",
    borderRadius: "8px",
    variant: 'outline',
    p: "0 1.2px 0 12px",
    border: "2px solid #7949FF",
    bg: "#FFFFFF",
    icon:<img src={arrowUp} alt="Search Icon" style={{ width: '24px', height: '24px' }} />
  }

  const optionStyle = {
    height: "152px",
    padding:"0 12px 0 12px",
    color: "#333333",
   
  };
  
  return (
    <>
      <Box
      id="Top Header"
      position="absolute"
      width="1129px"
      height="52px"
      mt="56.1px"
      ml="271px"
      display="flex"
      justifyContent="space-between"
    >
      <Box display="flex" border="1px solid #00000033" bg="#FFFFFF" width="655px" height="52px" borderRadius="3px" >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<img src={search} alt="search" style={{width:"24px", height:"24px",marginTop:"13.9px", color:"red"}} />}
        />
        <Input
          width="100%" // Use 100% width to fill the remaining space
          height="52px"
          border="none"
          placeholder="Search"
          _placeholder={{color:"#ADA7A7"}}
        />
      </InputGroup>
    </Box>
      <Box width="124px" height="52px" display="flex" gap="20px"  position="relative"
      >
        <Box id="notification" width="52px" height="52px" borderRadius="3px" bg="#FFFFFF">
            <Box w="24px" h="24px" m="14px 14px" ><img src={notification} alt="notification" /></Box>
        </Box>
        <Box w="10px" h="10px"  position="absolute" top="-3.1px" left="47px"  >
        <img src={elipse} alt="elipse" />
        </Box>
        <Box width="52px" height="52px" borderRadius="10px" >
          <img src={avatar} alt="avatar" />
        </Box>

      </Box>
    </Box>
    <HStack 
      id="Group"
      position="absolute"
      width="815px"
      mt="142px"
      ml="291px"
      gap="18px"
      // position="absolute"
    >
    <Select placeholder='Filter By Gender' {...selectStyle}>
        <option value="male" style={optionStyle}>Male</option>
        <option value="female" style={optionStyle}>Female</option>
      </Select>

      <Select placeholder='Filter By Category' {...selectStyle} styles={{ option: optionStyle }}>
        <option value="makeup" style={optionStyle}>Makeup</option>
        <option value="skincare" style={optionStyle}>Skincare</option>
        <option value="haircare" style={optionStyle}>Haircare</option>
      </Select>

      <Select placeholder='Sort By Price' {...selectStyle}>
        <option value="asc" style={optionStyle}>Ascending</option>
        <option value="desc" style={optionStyle}>Descending</option>
      </Select>
    </HStack>
    <Box
     position="absolute"
     width="248px"
     height="58px"
     mt="250px"
     ml="1203px"
     bg="#0E1866"
     >
      <Text
      color="#FFFFFF"
      fontWeight="800"
      w="247.75px"
      h="25.52px"
      marginTop="16.24px"
      marginLeft="0.25px"
      fontFamily="Inter"
      fontSize="16px"
      textAlign="center"
      
       >ADD PRODUCT</Text>
     </Box>
     <Productlist/>
    </>
  )
}

export default MainContainer

/*
Width
247.75px
Height
25.52px
Top
16.24px
Left
0.25px
Font
Inter
Weight
800
Size
16px
Line height
22px
Align
Center



*/