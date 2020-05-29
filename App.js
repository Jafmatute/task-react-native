import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "./app/customs/Colors";
import TaskData from "./app/data/TaskData";
export default function App() {
  const Task = ({ task, icon, theme, stamp }) => {
    return (
      <View
        style={{
          backgroundColor: Colors.white,
          flexDirection: "row",
          marginHorizontal: 16,
          marginVertical: 4,
          borderRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
        key={task}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name={icon}
            size={30}
            style={{ color: theme, marginRight: 5 }}
          />

          <View>
            <Text style={{ fontSize: 16 }}>{task}</Text>
            <Text style={{ color: Colors.greyish }}>{stamp}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="pencil"
            size={25}
            style={{ color: theme }}
          />
          <MaterialCommunityIcons
            name="trash-can"
            size={25}
            style={{ color: theme, marginLeft: 5 }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.themeColor} />

      <View style={{ backgroundColor: Colors.themeColor }}>
        <View
          style={{
            paddingVertical: 50,
            paddingLeft: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: Colors.white }}
          />
          <View style={{ flexDirection: "row", paddingRight: 20 }}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              style={{ color: Colors.white }}
            />
            <AntDesign name="user" size={30} style={{ color: Colors.white }} />
          </View>
        </View>

        <View style={{ paddin: 16 }}>
          <Text style={{ color: Colors.white, fontSize: 25 }}>
            {"Bienvenido, Dev"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: Colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: ':"center',
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              size={30}
              style={{ color: Colors.white }}
            />

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="microphone"
                size={30}
                style={{ color: Colors.white }}
              />
              <MaterialCommunityIcons
                name="tune"
                size={30}
                style={{ color: Colors.white }}
              />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          paddin: 20,
          flexDirection: "row",
          backgroundColor: Colors.backgroundApp,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20,
        }}
      >
        <Text style={{ fontSize: 24 }}>Task</Text>
        <MaterialCommunityIcons
          name="plus"
          size={40}
          style={{
            color: Colors.themeColor,
            backgroundColor: Colors.white,
            borderRadius: 20,
            marginHorizontal: 10,
          }}
        />
      </View>

      <ScrollView style={{ backgroundColor: Colors.backgroundApp }}>
        {TaskData.map((task) => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
            key={task.task}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
