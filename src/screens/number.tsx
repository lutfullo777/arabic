import React from "react";
import { Flex, Text, ScrollView } from "native-base";
import Card from "../components/card";

const Numbers = ({ navigation }: any) => {
  const numbers: object[] = [
    { arab: "١", uzb: "1" },
    { arab: "٢", uzb: "2" },
    { arab: "٣", uzb: "3" },
    { arab: "٤", uzb: "4" },
    { arab: "٥", uzb: "5" },
    { arab: "٦", uzb: "6" },
    { arab: "٧", uzb: "7" },
    { arab: "٨", uzb: "8" },
    { arab: "٩", uzb: "9" },
    { arab: "١٠", uzb: "10" },
    { arab: "٢٠", uzb: "20" },
    { arab: "٣٠", uzb: "30" },
    { arab: "٤٠", uzb: "40" },
    { arab: "٥٠", uzb: "50" },
    { arab: "٦٠", uzb: "60" },
    { arab: "٧٠", uzb: "70" },
    { arab: "٨٠", uzb: "80" },
    { arab: "٩٠", uzb: "90" },
    { arab: "١٠٠", uzb: "10" },
  ];
  return (
    <Flex flex={1} bg="lightBlue.100">
      <ScrollView px={3}>
        <Flex
          py={5}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {numbers.map((el, index: number) => {
            return <Card key={index} number={el} />;
          })}
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Numbers;
