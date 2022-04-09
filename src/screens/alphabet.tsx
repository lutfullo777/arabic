import React from "react";
import { Flex, ScrollView } from "native-base";
import AlphabetItem from "../components/card";

const Alphavet = ({ navigation }: any) => {
  const alphabets: object[] = [
    { arab: "ا", uzb: "alif", sound: require("../../audios/1.mp3") },
    { arab: "ب", uzb: "ba", sound: require("../../audios/2.mp3") },
    { arab: "ت", uzb: "ta", sound: require("../../audios/3.mp3") },
    { arab: "ث", uzb: "sa", sound: require("../../audios/4.mp3") },
    { arab: "ج", uzb: "jim", sound: require("../../audios/5.mp3") },
    { arab: "ح", uzb: "ha", sound: require("../../audios/6.mp3") },
    { arab: "خ", uzb: "xa", sound: require("../../audios/7.mp3") },
    { arab: "د", uzb: "dal", sound: require("../../audios/8.mp3") },
    { arab: "ذ", uzb: "dzal", sound: require("../../audios/9.mp3") },
    { arab: "ر", uzb: "ro", sound: require("../../audios/10.mp3") },
    { arab: "ز", uzb: "za", sound: require("../../audios/11.mp3") },
    { arab: "س", uzb: "sin", sound: require("../../audios/12.mp3") },
    { arab: "ش", uzb: "shin", sound: require("../../audios/13.mp3") },
    { arab: "ص", uzb: "sod", sound: require("../../audios/14.mp3") },
    { arab: "ض", uzb: "dod", sound: require("../../audios/15.mp3") },
    { arab: "ط", uzb: "to", sound: require("../../audios/16.mp3") },
    { arab: "ظ", uzb: "dzo", sound: require("../../audios/17.mp3") },
    { arab: "ع", uzb: "ayn", sound: require("../../audios/18.mp3") },
    { arab: "غ", uzb: "g'oyn", sound: require("../../audios/19.mp3") },
    { arab: "ف", uzb: "fa", sound: require("../../audios/20.mp3") },
    { arab: "ق", uzb: "qof", sound: require("../../audios/21.mp3") },
    { arab: "ك", uzb: "kaf", sound: require("../../audios/22.mp3") },
    { arab: "ل", uzb: "lam", sound: require("../../audios/23.mp3") },
    { arab: "م", uzb: "mim", sound: require("../../audios/24.mp3") },
    { arab: "ن", uzb: "nun", sound: require("../../audios/25.mp3") },
    { arab: "و", uzb: "vav", sound: require("../../audios/26.mp3") },
    { arab: "ه", uzb: "ha", sound: require("../../audios/27.mp3") },
    { arab: "ء", uzb: "hamza", sound: require("../../audios/28.mp3") },
    { arab: "ي", uzb: "ya", sound: require("../../audios/29.mp3") },
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
          {alphabets.map((el, index: number) => {
            return <AlphabetItem key={index} alphabet={el} />;
          })}
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Alphavet;
