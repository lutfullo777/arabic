import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { Flex, Box, ScrollView, Text, Image } from "native-base";

const Home = ({ navigation }: any) => {
  const { width, height }: any = Dimensions.get("window");

  const boxW = width / 2;
  const boxH = height / 2;

  const cards = [
    {
      name: "Alifbo",
      image: require("../../assets/alphabet.jpg"),
      nav: "alphabet",
    },
    {
      name: "Raqamlar",
      image: require("../../assets/number.jpg"),
      nav: "number",
    },
  ];
  return (
    <Flex flex={1} bg="lightBlue.100">
      <ScrollView px={3}>
        <Flex
          py={3}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {cards.map((card, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(card.nav)}
              >
                <Box
                  mb={3}
                  alignItems="center"
                  justifyContent="center"
                  bg="white"
                  rounded={5}
                  w={boxW - 20}
                  height={boxH - boxH / 3}
                >
                  <Image
                    resizeMode="cover"
                    size={boxW - 50}
                    source={card.image}
                    alt={card.name}
                  />
                  <Text fontSize={20}>{card.name}</Text>
                </Box>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity onPress={() => navigation.navigate("alphabet")}>
            <Box
              mb={3}
              overflow="hidden"
              alignItems="center"
              justifyContent="center"
              bg="white"
              rounded={5}
              w={boxW - 20}
              height={boxH - boxH / 3}
            >
              <Image
                resizeMode="cover"
                size={boxW - 50}
                source={require("../../assets/alphabet.jpg")}
                alt="alphabet"
              />
              <Text fontSize={20}>Alifbo</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("alphabet")}>
            <Box
              alignItems="center"
              justifyContent="center"
              bg="white"
              rounded={5}
              w={boxW - 20}
              height={boxH - boxH / 3}
            >
              <Text fontSize={20}>Numbers</Text>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity style={{ justifyContent: "space-around" }}>
            <Box
              alignItems="center"
              justifyContent="center"
              bg="white"
              rounded={5}
              w={boxW - 20}
              height={boxH - boxH / 3}
            >
              <Text fontSize={20}>Alphabet</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box
              alignItems="center"
              justifyContent="center"
              bg="white"
              rounded={5}
              w={boxW - 20}
              height={boxH - boxH / 3}
            >
              <Text fontSize={20}>Numbers</Text>
            </Box>
          </TouchableOpacity>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Home;
