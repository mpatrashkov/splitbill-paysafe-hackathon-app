import React, { FunctionComponent } from "react"
import { GestureResponderEvent, StyleSheet, Text, View } from "react-native"
import {
    TouchableOpacity,
    TouchableHighlight,
} from "react-native-gesture-handler"
import { Colours } from "../styles"
import { BillPerson } from "./BillPerson"
import { Bill } from "../types/bill"

export const BillOverview: FunctionComponent<{
    style?: Record<string, unknown>
    onPress?: (ev: GestureResponderEvent) => void
    bill: Bill
}> = ({ style, onPress, bill }) => {
    const people = [0, 1, 2, 3]

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.container,
                ...style,
            }}
        >
            <Text>{bill.name}</Text>
            <View style={styles.row}>
                <Text style={styles.money}>{bill.amount}лв.</Text>
                <View style={styles.people}>
                    {bill.users.map((user, index) => (
                        <BillPerson key={index} user={user} />
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderColor: Colours.primary,
        backgroundColor: Colours.white,
        elevation: 4,
        // borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    money: {
        flex: 1,
        fontSize: 20,
    },
    people: {
        alignSelf: "flex-end",
        flexDirection: "row",
    },
})
