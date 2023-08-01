import React, {useState, useEffect} from "react";
import { StyleSheet, View, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function QrScan() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    
      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        openWebsite(data);
      };    
    
      const openWebsite = (url) => {
        Linking.openURL(url);
      };
    
    return (
        <View style={styles.container}>
            {hasPermission && !scanned && (
            <View style={styles.scannerContainer}>
                <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
            </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    scannerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  