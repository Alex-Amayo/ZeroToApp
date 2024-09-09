import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../theme/theme';
import { useFetchUserProfile } from '../../../hooks/useFetchUserProfile';
import brand from '../../../brand/brandConfig';
import Card from '../../../components/Card';
import List from '../../../components/List';
import TextLink from '../../../components/TextLink';
import useAuthStore from '../../../stores/authStore/authStore';
import LoadingIndicator from '../../../components/LoadingIndicator';
import ListDivider from '../../../components/ListDivider';

const HomePage = () => {
  // Initialize theme
  const theme = useContext(ThemeContext);
  // Retrieve user from auth store
  const { getUserId } = useAuthStore();
  const userId = getUserId();
  console.log(userId);
  const { data, isLoading } = useFetchUserProfile(userId as string);
  return (
    <View
      style={{
        ...styles.screen,
        // Configure background color with theme
        backgroundColor: theme.values.backgroundColor,
      }}>
      <View style={styles.container}>
        <Card>
          <List>
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <Text style={{ ...styles.title, color: theme.values.color }}>
                {'Lets start building ' + data?.first_name + '!'}
              </Text>
            )}
            <ListDivider />
            <TextLink text="Zero To App Documentation" href="https://google.com" />
          </List>
        </Card>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
  },
  title: {
    fontSize: brand.fontSizes.large,
    textAlign: 'center',
  },
});
