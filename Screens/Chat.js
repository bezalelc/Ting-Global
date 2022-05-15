import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //         // {
    //         //     _id: 2,
    //         //     text: 'Hello world',
    //         //     createdAt: new Date(),
    //         //     user: {
    //         //         _id: 1,
    //         //         name: 'React Native',
    //         //         avatar: 'https://placeimg.com/140/140/any',
    //         //     },
    //         // },
    //
    //     ]);
    // }, []);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        style={{marginBottom: 5, marginRight: 5}}
                        size={32}
                        color="#2e64e5"
                    />
                </View>
            </Send>
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#0082ff',
                    },
                }}
                textStyle={{
                    right: {
                        color: '#ffffff',
                    },
                }}
            />
        );
    };

    const scrollToBottomComponent = () => {
        return(
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        );
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//
// import React, { Component } from "react";
// import { View, Text, StyleSheet, Image, TextInput } from "react-native";
// import { Colors, FAB } from "react-native-paper";
// import { StatusBar } from "expo-status-bar";
//
// export default class ChatDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userMessage: null,
//         };
//     }
//
//     render() {
//        const { groupName, createdAt } = this.props.route.params;
//         const { userMessage } = this.state;
//
//         return (
//             <View style={styles.container}>
//                 <StatusBar style="light" />
//                 <View style={styles.topBar}>
//                     <View style={styles.topBarSection}>
//                         <Image
//                             source={require("../assets/icon.png")}
//                             style={styles.groupImage}
//                         />
//                         <View>
//                             <Text style={styles.groupTitle}>{"groupName"}</Text>
//                             <Text style={styles.groupDate}>{"createdAt"}</Text>
//                         </View>
//                     </View>
//                 </View>
//                 <Text> ChatDetail </Text>
//                 <View style={styles.messageBox}>
//                     <TextInput
//                         style={styles.messageInput}
//                         keyboardType="default"
//                         placeholder="Type a message"
//                         value={this.state.userMessage}
//                         onChangeText={(userMessage) => this.setState({ userMessage })}
//                     />
//                     <FAB
//                         style={styles.fab}
//                         icon="send"
//                         onPress={() => {
//                             console.log(userMessage);
//                             this.setState({ userMessage: null });
//                         }}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: "center",
//         // alignItems: "center",
//     },
//     topBar: {
//         height: 100,
//         backgroundColor: Colors.deepPurple800,
//         justifyContent: "center",
//     },
//     topBarSection: {
//         marginTop: 20,
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     groupTitle: {
//         color: Colors.white,
//         fontSize: 20,
//         fontWeight: "700",
//         marginLeft: 20,
//     },
//     groupDate: {
//         color: Colors.white,
//         fontSize: 14,
//         fontWeight: "400",
//         marginLeft: 20,
//         marginTop: 2,
//     },
//     groupImage: {
//         width: 50,
//         height: 50,
//         marginLeft: 20,
//         borderRadius: 30,
//         backgroundColor: Colors.deepPurple300,
//     },
//     messageBox: {
//         position: "absolute",
//         bottom: 0,
//         backgroundColor: Colors.grey300,
//         width: "100%",
//         paddingHorizontal: 20,
//         paddingVertical: 16,
//     },
//     messageInput: {
//         width: "80%",
//         fontSize: 14,
//         backgroundColor: Colors.white,
//         paddingVertical: 12,
//         color: Colors.black,
//         borderRadius: 8,
//         paddingHorizontal: 12,
//         borderWidth: 2,
//         borderColor: Colors.deepPurple300,
//     },
//     fab: {
//         position: "absolute",
//         margin: 16,
//         right: 0,
//         bottom: 0,
//     },
// });
