import { StyleSheet } from 'react-native';
import { colors } from '../../const/const';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.superface,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: 12, // Troque paddingVertical por paddingTop
  },

  itemContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeItemContainer: {
    backgroundColor: colors.purpleEmphasis,
  },
});