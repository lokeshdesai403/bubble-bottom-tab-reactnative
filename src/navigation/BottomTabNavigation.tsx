import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';
import {
  AddScreen,
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  SearchScreen,
} from '../screen';
import {Constants} from '../constants';
import Theme from 'theme/Theme';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}: any) {
  useEffect(() => {}, [state]);

  const animationView = () => {
    LayoutAnimation.easeInEaseOut();
  };

  return (
    <View style={styles.mainContentStyles}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          animationView();
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.onClickStyles,
              {
                backgroundColor: isFocused
                  ? Theme.colors.bgColor2
                  : Theme.colors.transparent,
                width: isFocused ? Theme.fontSize.size120 : undefined,
              },
            ]}>
            <Image
              style={[
                styles.imgStyles,
                {
                  tintColor: isFocused
                    ? Theme.colors.bgColor3
                    : Theme.colors.bgColor4,
                },
              ]}
              source={options.tabBarIcon}
            />
            {isFocused && (
              <Text style={styles.textStyles}>{options.tabBarLabel}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: Theme.icon.ic_home,
          title: 'Home',
          headerTitleAlign: 'center',
        }}
        name={Constants.HOME_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: Theme.icon.ic_search,
          title: 'Search Category',
          headerTitleAlign: 'center',
        }}
        name={Constants.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: Theme.icon.ic_plus,
          title: 'Add Category',
          headerTitleAlign: 'center',
        }}
        name={Constants.ADD_SCREEN}
        component={AddScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Notification',
          title: 'Notifications',
          headerTitleAlign: 'center',
          tabBarIcon: Theme.icon.ic_notifications,
        }}
        name={Constants.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: Theme.icon.ic_user,
          title: 'Profile',
          headerTitleAlign: 'center',
        }}
        name={Constants.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  mainContentStyles: {
    flexDirection: 'row',
    padding: Theme.fontSize.size20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.colors.bgColor3,
    borderTopLeftRadius: Theme.fontSize.size10,
    borderTopRightRadius: Theme.fontSize.size10,
    borderWidth: Theme.fontSize.size1,
    borderColor: Theme.colors.bgColor4,
  },
  onClickStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Theme.fontSize.size8,
    paddingHorizontal: Theme.fontSize.size10,
    borderRadius: Theme.fontSize.size100,
  },
  imgStyles: {
    height: Theme.fontSize.size20,
    width: Theme.fontSize.size20,
  },
  textStyles: {
    color: Theme.colors.bgColor3,
    fontSize: Theme.fontSize.size12,
    marginLeft: Theme.fontSize.size8,
  },
});
