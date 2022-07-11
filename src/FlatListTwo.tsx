import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ListController } from './ListController';

class FlatListTwo extends ListController {
    render() {
        return (
            <View style={styles.container}>
               <TouchableOpacity> <FlatList data={this.state.dataList}
                   onEndReachedThreshold={0.1}
                   onEndReached={() => this.handleLoadMoreData()}
                   renderItem={({ item, index }) => this.renderListItem(item, index)}
                   keyExtractor={(item, index) => index.toString()}
                   ListFooterComponent={this.setFooter()}/>
</TouchableOpacity>
            </View>
        )
    }

    // alertItemName = (item) => {
    //     alert(item.data.first_name)
    // }

    setFooter() {
        return (
            <View>
                <ActivityIndicator style={styles.indicatorStyle} animating={this.state.animatingSet}></ActivityIndicator>
            </View>
        )
    }

    renderListItem(item: any, index: number) {

        return (
            <TouchableOpacity onPress={() => this.openDetails(item)}>
                <View style={styles.rowStyle}>
                    <Text style={styles.textStyle1}> NAme: <Text style={styles.textStyle2}>{item.first_name} {item.last_name}</Text></Text>
                    <Text style={styles.textStyle1}> Email: <Text style={styles.textStyle2}>{item.email}</Text></Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: item.avatar }}></Image>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity >
        )
    }
}
export default FlatListTwo

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    // text: {
    //     color: '#4f603c'
    // },
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#D3D3D3'
    },
    // separator: {
    //     height: 20
    // },
    rowStyle: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFFFFF",
        roundedCorners: 10
    },
    textStyle1: {
        fontSize: 20,
        fontWeight: 'bold',
        fontColor: 'black'

    },
    textStyle2: {
        fontSize: 18,
        fontWeight: 'bold',
        fontColor: 'black'

    },
    textStyle3: {
        fontSize: 18,
        fontWeight: 'bold',
        fontColor: 'blue'

    },
    indicatorStyle: {
        width: 40,
        height: 40,
        color: "black"
    }
})