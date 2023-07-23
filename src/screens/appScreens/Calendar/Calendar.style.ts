import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.richBlack,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.snow,
  },
  items: {
    marginTop: 30,
  },
  item: {
    backgroundColor: colors.snow,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.snow,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: colors.richBlack,
    fontSize: 16,
    fontWeight: 'bold',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: colors.snow,
    borderWidth: 2,
    borderRadius: 5,
  },
  itemDate: {
    color: colors.richBlack,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
