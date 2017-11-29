import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
} from "react-native";

import ResourceCard from "./ResourceCard.js";
import Colors from '../../constants/Colors';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class ResourceListingView extends Component {
  constructor() {
    super();
    this.state = {
      numElements: 0
    }
  }
	render() {
    var resourceArray = [].concat(this.props.resources);
    var componentArray = [];
    for(let i = 0; i < resourceArray.length; i++){
        componentArray.push(
          <Row key={i} style={styles.row}>
            <Col style={styles.firstColumn}>
              <ResourceCard 
                  ResourceInfo={resourceArray[i]} 
                  key={resourceArray[i].user_id}
                  navigation={this.props.navigation}
                /> 
            </Col>
            <Col style={styles.secondColumn}> 
             {i != resourceArray.length - 1 && 
               <ResourceCard 
                  ResourceInfo={resourceArray[i+1]} 
                  key={resourceArray[i+1].user_id}
                  navigation={this.props.navigation}
                />  
            }
            </Col>
          </Row>
        )
      }
    return (
      <View> 
      <ScrollView style={styles.container}> 
        <Grid>
          {componentArray}
        </Grid>
      </ScrollView>
    </View>
    );
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  row: {
    marginTop: 30
  },
  firstColumn: {
    marginLeft: 40
  },
  secondColumn: {
    marginLeft: 7
  }
});