import { View, Text, StyleSheet, Image, Pressable} from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 50,
        alignItems: 'center',
    },

    route: {
        fontSize: 18,
        fontWeight: 600,
        color: '#263255',
        marginTop: 8,
    },

    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#188a1d',
    },

    date: {
        fontSize: 14,
        fontWeight: 'light',
        color: '#818181',
    },

    seats: {
        fontSize: 14,
        fontWeight: 'light',
        color: '#3fb2c7',
    },

    seatsWarning: {
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#f14c37',
        padding: 3,
        borderRadius: 5,
    },

    driver: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#444444',
    },

    driverAvatar: {
        width: '10%',
        aspectRatio: 1/1,
        borderRadius: 50,
    },

    cardPressed: {
        opacity: 0.4,
        transform: [{scale: 0.95}]
    }
});

export default function TripCard({trip})
{
    /*
    {
        id: "1",
        departure: "Paris",
        arrival: "Lyon",
        date: "2026-09-15",
        time: "08:00",
        seatsAvailable: 3,
        price: 18,
        driver: { name: "Claire Dupont", avatarUrl: "https://i.pravatar.cc/150?img=47" },
    },
    */
    return (
        <Pressable 
        style={({pressed}) => [styles.card, pressed && styles.cardPressed] } 
        onPress={() => console.log("TRAJET SELECTIONNE : \nDepart : " + trip.departure + "\nArriver : " + trip.arrival)}>
            <View>
                <View style={styles.row}>
                    <Text style={styles.route}>
                        {trip.departure} → {trip.arrival}
                    </Text>
                    <Text style={styles.price}>{trip.price} €</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.date}>Pour le {trip.date} à {trip.time}</Text>
                    <Image style={styles.driverAvatar} source={{uri: trip.driver.avatarUrl}}/>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.seats, trip.seatsAvailable <= 1 && styles.seatsWarning]}>Places disponible(s) : {trip.seatsAvailable}</Text>
                    <Text style={styles.driver}>Par {trip.driver.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}