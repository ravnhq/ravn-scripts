import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { useStarWarsCharactersQuery } from 'src/graphql/api'

const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  traitsRow: {
    flexDirection: 'row',
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
})

const MainScreen = () => {
  const { loading, data } = useStarWarsCharactersQuery()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator animating size="large" />
        ) : (
          <FlatList
            ListHeaderComponent={() => (
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                  Star Wars Characters
                </Text>
              </View>
            )}
            data={data ? data.allPersons : []}
            renderItem={({ item }) => {
              return (
                <View style={styles.row}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <View style={{ flex: 1 }}>
                      <View style={styles.traitsRow}>
                        <Text style={styles.label}>Birth Year:</Text>
                        <Text>{item.birthYear || 'N/A'}</Text>
                      </View>
                      <View style={styles.traitsRow}>
                        <Text style={styles.label}>Gender:</Text>
                        <Text>{item.gender || 'N/A'}</Text>
                      </View>
                      <View style={styles.traitsRow}>
                        <Text style={styles.label}>Skin Color:</Text>
                        <Text>{item.skinColor || 'N/A'}</Text>
                      </View>
                      <View style={styles.traitsRow}>
                        <Text style={styles.label}>Eye Color:</Text>
                        <Text>{item.eyeColor || 'N/A'}</Text>
                      </View>
                      <View style={styles.traitsRow}>
                        <Text style={styles.label}>Hair Color:</Text>
                        <Text>{item.hairColor || 'N/A'}</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.label}>Films:</Text>
                      {item.films && item.films.length > 0 ? (
                        item.films.map(film => (
                          <Text key={film.title}>{film.title}</Text>
                        ))
                      ) : (
                        <Text>N/A</Text>
                      )}
                    </View>
                  </View>
                </View>
              )
            }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: 'black',
                }}
              />
            )}
          />
        )}
      </SafeAreaView>
    </>
  )
}

export default MainScreen
