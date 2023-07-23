import {StyleSheet} from 'react-native';

import {colors} from '../../../assets';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.richBlack,
  },
  addTask: {
    alignItems: 'center',
    marginHorizontal: 30,
    padding: 20,
    backgroundColor: colors.snow,
    borderRadius: 10,
  },
  plus: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  addTaskContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
});
