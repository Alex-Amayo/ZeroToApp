import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useWindowWidth, breakpoints } from '../../hooks/useWindowWidth';
import IconButton from '../IconButton';
import brand from '../../brand/brandConfig';
import { ThemeContext } from '../../theme/theme';

type AppbarProps = {
  title?: string;
  tabs?: JSX.Element | JSX.Element[];
};

const AppbarWeb = ({ title, tabs }: AppbarProps) => {
  //Initialize theme
  const theme = useContext(ThemeContext);

  //Iniitialize window width
  const windowWidth = useWindowWidth();

  //If window width is greater than medium breakpoint, apply card styles to appbar
  if (windowWidth >= breakpoints.medium) {
    styles.webContainer = {
      ...{
        //Appbar card styling
        //Shadow color from theme
        shadowColor: brand.shadow ? theme.values.shadowColor : undefined,
        //Verticle shadow offset for Appbar
        shadowOffset: brand.shadow ? { width: -2, height: 2 } : undefined,
        shadowOpacity: brand.shadow ? 0.4 : undefined,
        shadowRadius: brand.shadow ? 3 : undefined,
        elevation: brand.shadow ? 20 : undefined,
      },
    };
  }
  return (
    <View
      style={{
        paddingBottom: 10,
        //Configure background with theme background (**Different from appbar background, color of the space for shadows)
        backgroundColor: theme.values.backgroundColor,
      }}>
      <View
        style={{
          ...styles.webContainer,
          //Configure appbar with theme appbar color
          backgroundColor: theme.values.appbarColor,
        }}>
        <View
          style={{
            ...styles.appbar,
          }}>
          <Link href="/core/home">
            <Text
              style={{
                ...styles.title,
                //Configure title color with theme
                color: theme.values.highlightColor,
              }}>
              {title}
            </Text>
          </Link>
          {windowWidth >= breakpoints.medium ? tabs : null}
          <View style={styles.iconContainer}>
            <IconButton iconName="search" />
            <IconButton iconName="plus" />
            <IconButton iconName="message-square" />
          </View>
        </View>
        {windowWidth < breakpoints.medium ? (
          <View
            style={{
              ...styles.appbarWebSmall,
              borderBottomColor: theme.values.dividerColor,
              borderBottomWidth: 1,
            }}>
            {tabs}
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default AppbarWeb;

const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 15,
  },
  appbarWebSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    paddingHorizontal: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: brand.fontSizes.large,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  webContainer: {}, // WebContainer property
});
