import React, { useRef } from "react";
import CardFlip from "react-native-card-flip";
import { TouchableOpacity, Dimensions } from "react-native";
import { Text } from "native-base";
import Sound from "react-native-sound";

const AlphabetItem = ({ number, alphabet }: any) => {
  const { width, height } = Dimensions.get("window");
  // const cardFlip = useRef<CardFlip | null>(null);

  // const sound = new Sound(alphabet.sound, Sound.MAIN_BUNDLE, (error) => {
  //   if (error) {
  //     console.log("failed to load the sound", error);
  //     return;
  //   }
  //   // loaded successfully
  //   console.log(
  //     "duration in seconds: " +
  //       sound.getDuration() +
  //       "number of channels: " +
  //       sound.getNumberOfChannels()
  //   );

  //   // Play the sound with an onEnd callback
  //   sound.play((success) => {
  //     if (success) {
  //       console.log("successfully finished playing");
  //     } else {
  //       console.log("playback failed due to audio decoding errors");
  //     }
  //   });
  // });

  // const onPress = () => {
  //   // sound.play();
  //   if (cardFlip && cardFlip.current) {
  //     cardFlip.current.flip();
  //     setTimeout(() => cardFlip.current && cardFlip.current.flip(), 1000);
  //   }
  // };

  return (
    // <CardFlip
    //   duration={200}
    //   style={{
    //     borderRadius: 5,
    //     backgroundColor: "white",
    //     height: height / 6,
    //     width: width / 3 - 15,
    //     marginBottom: 7,
    //   }}
    //   ref={cardFlip}
    // >
    //   <TouchableOpacity
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //     onPress={onPress}
    //   >
    //     <Text fontSize="4xl">{number ? number.arab : alphabet.arab}</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Text fontSize="2xl">{number ? number.uzb : alphabet.uzb}</Text>
    //   </TouchableOpacity>
    // </CardFlip>
    <Text>Hello world</Text>
  );
};

export default AlphabetItem;
