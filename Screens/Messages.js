import React from 'react';
import {StyleSheet, Text, View,FlatList} from 'react-native';
import {
    Container,
    Card,
    UserInfo,
    // UserImgWrapper,
    // UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from './MessageStyles';
const Mess =[
    {
        id: '1',
        userName: 'gad',
        messageTime:'4 mins ago',
        messageText: 'hi my name is gad',
    },
    {

        id: '2',
        userName: 'amit',
        messageTime:'2 mins ago',
        messageText: 'hi my name is amit',
    },
    {
        id: '3',
        userName: 'idan',
        messageTime:'40 mins ago',
        messageText: 'hi my name is idan',
    },
];

const Messages = ({navigation}) => {
    return(
        <Container>
            <FlatList
                data={Mess}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                        <UserInfo>
                            {/*<UserImgWrapper>*/}
                            {/*    <UserImg source={item.userImg} />*/}
                            {/*</UserImgWrapper>*/}
                            <TextSection>
                                <UserInfoText>
                                    <UserName>{item.userName}</UserName>
                                    <PostTime>{item.messageTime}</PostTime>
                                </UserInfoText>
                                <MessageText>{item.messageText}</MessageText>
                            </TextSection>
                        </UserInfo>
                    </Card>
                )}
            />
        </Container>
    );
};
export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItem: 'center',
        justifyContent: 'contain',
    },
});
