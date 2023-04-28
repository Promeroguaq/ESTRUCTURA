import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const database = SQLite.openDatabase({
  name: 'MyDatabase.db',
  location: 'default',
});

export default database;