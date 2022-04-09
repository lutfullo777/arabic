import React from "react";
import { Box, NativeBaseProvider, Pressable, Menu } from "native-base";
import { Share } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const homeHeader = ({ navigation }: { navigation: any }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <Box mr={5} h="100%" w="100%" alignItems="flex-end" justifyContent="center">
      <Menu
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <FontAwesome
                name="ellipsis-v"
                style={{
                  width: 20,
                  textAlign: "right",
                }}
                size={20}
                color="white"
              />
            </Pressable>
          );
        }}
      >
        <Menu.Item onPress={onShare}>Share App</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
      </Menu>
    </Box>
  );
};

export default homeHeader;
