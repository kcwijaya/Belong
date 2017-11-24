import React, {Component} from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
} from "react-native";

import TaskCard from "./TaskCard";

import Colors from '../../constants/Colors';

export default class ListingView extends Component {
	render() {
		var taskArray = [].concat(this.props.tasks);
    var view = null;
    if (taskArray.length == 0 && this.props.myTasks) {
      view = (
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.textStyles}> 
              You have not signed up for any tasks. Browse the explore tab to find tasks that interest you 
            </Text>
          </View>
        </View>
      );
    } else if (taskArray.length == 0 && this.props.search) {
      view = (<View style={styles.textContainer}>
          <View>
            <Text style={styles.textStyles}> 
              Search for tasks by title, creator, or other keyword
            </Text>
          </View>
        </View>
      );
    } else {
      view = (
        <View> 
          <ScrollView> 
            {taskArray.map((taskInfo) => {
              return (
                <TaskCard 
                  taskInfo={taskInfo} 
                  key={taskInfo.id}
                /> 
              );
            })}
          </ScrollView>
        </View>
      );
    }
		return (
      <View>
			 {view}
      </View>
		);
	}
}

TaskListView.propTypes = {
	/* Array of task objects */
	tasks: React.PropTypes.arrayOf(React.PropTypes.shape(TaskPropTypes)).isRequired,
  /* Boolean indicating whether or not screen is my tasks screen */
  myTasks: React.PropTypes.bool.isRequired,
  /* Boolean indicating whether or not screen is search screen */
  search: React.PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 20, 
    color: '#706C6C',
    textAlign: 'center',
    margin: 40,
  },
  title: {
  	color: 'white',
  	fontSize: 20,
  	fontFamily: 'sans-serif-light',
  	textAlign: 'left',
  	marginTop: 32
  },
  button : {
  	height: 30,
  	width: 90,
  	marginTop: 30,
  	borderColor: '#40ACAC',
  	borderWidth: 2
  },
  label: {
  	color: 'white',
  	fontSize: 15, 
  	fontFamily: 'sans-serif-light',
  	textAlign: 'center'
  },
  header: {
  	height: 75,
  	backgroundColor: Colors.accent,
  	alignSelf: 'stretch',
  	flexDirection: 'row',
  	justifyContent: 'space-around'
  }
});