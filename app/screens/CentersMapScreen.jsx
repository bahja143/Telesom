import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";

import colors from "../config/colors";
import PermissionsModal from "../components/PermissionsModal";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 9.56;
const LONGITUDE = 44.06;
const LATITUDE_DELTA = 10.43;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = "AIzaSyDfyN6B8B7PE3yLkrZpa8iyAOeir2ng0N4";

class CentersMapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      distance: 0,
      duration: 0,
      center: {},
      showPermissions: false,
    };

    this.mapView = null;
  }

  render() {
    const { showPermissions, distance, duration } = this.state;

    return (
      <>
        <PermissionsModal
          show={showPermissions}
          setShow={this.handlePermissions}
          message="For better experience please turn on you Location."
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{Math.ceil(distance)}Km away, </Text>
          <Text style={styles.text1}>
            You will get after {Math.ceil(duration)} Menutes
          </Text>
        </View>
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          ref={(c) => (this.mapView = c)}
          showsUserLocation
          followsUserLocation
          focusable
          onUserLocationChange={() => this.getUserLocationOnchange()}
          showsCompass={true}
          chacheEnabled={false}
          zoomEnabled={true}
          loadingEnabled
          loadingIndicatorColor={colors["primary"]}
          style={styles.map}
        >
          {this.state.coordinates.map((coordinate, index) => (
            <MapView.Marker
              key={`coordinate_${index}`}
              coordinate={coordinate}
            />
          ))}
          {this.state.coordinates.length >= 2 && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={
                this.state.coordinates.length > 2
                  ? this.state.coordinates.slice(1, -1)
                  : undefined
              }
              destination={
                this.state.coordinates[this.state.coordinates.length - 1]
              }
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={5}
              strokeColor={colors["primary"]}
              lineDashPattern={[1]}
              optimizeWaypoints={true}
              onStart={(params) => {
                //   console.log(
                //     `Started routing between "${params.origin}" and "${params.destination}"`
                //   );
              }}
              onReady={(result) => {
                this.setState({
                  distance: result.distance,
                  duration: result.duration,
                });

                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 20,
                    bottom: height / 20,
                    left: width / 20,
                    top: height / 20,
                  },
                });
              }}
              onError={(errorMessage) => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
      </>
    );
  }

  componentDidMount() {
    const item = this.props.route.params;
    const { coordinates } = this.state;
    coordinates.push(item.location);

    this.getUserLocation();
    this.setState({ center: item });
  }

  handlePermissions = (input) => {
    this.setState({ showPermissions: input });
  };

  getUserLocation = async () => {
    try {
      const { coordinates } = this.state;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      coordinates.push({ latitude, longitude });

      this.setState({ coordinates });
    } catch (error) {
      console.log(error);
      this.handlePermissions(true);
    }
  };

  getUserLocationOnchange = async () => {
    try {
      const { coordinates } = this.state;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      coordinates.pop();
      coordinates.push({ latitude, longitude });

      this.setState({ coordinates });
    } catch (error) {
      console.log(error);
      this.handlePermissions(true);
    }
  };
}
const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: colors["white"],
    height: 75,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  map: {
    flex: 1,
    top: -25,
    height: 8500,
  },
  text: {
    color: colors["primary"],
    fontSize: 16,
    fontFamily: "sans-serif-light",
  },
  text1: {
    color: colors["secondary"],
    fontSize: 16,
    fontFamily: "sans-serif-light",
  },
});

export default CentersMapScreen;
