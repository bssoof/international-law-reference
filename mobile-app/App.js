import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Provider as PaperProvider, MD3LightTheme, MD3DarkTheme, Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import TreatiesScreen from './src/screens/TreatiesScreen';
import CasesScreen from './src/screens/CasesScreen';
import ResolutionsScreen from './src/screens/ResolutionsScreen';
import SearchScreen from './src/screens/SearchScreen';
import ResourcesScreen from './src/screens/ResourcesScreen';
import CompareScreen from './src/screens/CompareScreen';
import AboutScreen from './src/screens/AboutScreen';
import NotesScreen from './src/screens/NotesScreen';
import DetailScreen from './src/screens/DetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

// Light Theme (MD3)
const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1A365D',
    secondary: '#C53030',
    background: '#f0f2f5',
  },
};

// Dark Theme (MD3)
const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#4A90D9',
    secondary: '#FF6B6B',
    background: '#1a1a2e',
    surface: '#16213e',
  },
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('الرئيسية');
  const [detailData, setDetailData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const saved = await AsyncStorage.getItem('darkMode');
      if (saved === 'true') setIsDarkMode(true);
    } catch (e) {
      console.log('Error loading theme');
    }
  };

  const toggleDarkMode = async () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    await AsyncStorage.setItem('darkMode', newValue.toString());
  };

  // Navigation
  const mockNavigation = {
    navigate: (screen, params) => {
      if (params) setDetailData(params);
      setCurrentScreen(screen);
    },
    goBack: () => setCurrentScreen('الرئيسية'),
  };

  const renderScreen = () => {
    const props = { navigation: mockNavigation, isDarkMode };

    switch (currentScreen) {
      case 'الرئيسية': return <HomeScreen {...props} />;
      case 'الاتفاقيات': return <TreatiesScreen {...props} />;
      case 'القضايا': return <CasesScreen {...props} />;
      case 'القرارات': return <ResolutionsScreen {...props} />;
      case 'البحث': return <SearchScreen {...props} />;
      case 'المصادر': return <ResourcesScreen {...props} />;
      case 'المقارنة': return <CompareScreen {...props} />;
      case 'النبذة': return <AboutScreen {...props} />;
      case 'الملاحظات': return <NotesScreen {...props} />;
      case 'المفضلة': return <FavoritesScreen {...props} />;
      case 'التفاصيل': return <DetailScreen route={{ params: detailData }} {...props} />;
      default: return <HomeScreen {...props} />;
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
  const headerBg = isDarkMode ? '#16213e' : '#1A365D';
  const tabBg = isDarkMode ? '#16213e' : 'white';
  const activeColor = isDarkMode ? '#4A90D9' : '#1A365D';

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#1a1a2e' : '#f0f2f5' }]}>
          {/* Header */}
          <Appbar.Header style={{ backgroundColor: headerBg }}>
            {currentScreen !== 'الرئيسية' && (
              <Appbar.BackAction onPress={() => {
                if (currentScreen === 'التفاصيل') {
                  if (detailData?.type === 'treaty') setCurrentScreen('الاتفاقيات');
                  else if (detailData?.type === 'case') setCurrentScreen('القضايا');
                  else if (detailData?.type === 'resolution') setCurrentScreen('القرارات');
                  else setCurrentScreen('الرئيسية');
                } else {
                  setCurrentScreen('الرئيسية');
                }
              }} color="white" />
            )}
            <Appbar.Content title={currentScreen} color="white" titleStyle={{ textAlign: currentScreen === 'الرئيسية' ? 'center' : 'left' }} />

            {/* Dark Mode Toggle */}
            <Appbar.Action icon={isDarkMode ? "weather-sunny" : "weather-night"} color="white" onPress={toggleDarkMode} />

            {currentScreen !== 'البحث' && (
              <Appbar.Action icon="magnify" color="white" onPress={() => setCurrentScreen('البحث')} />
            )}
          </Appbar.Header>

          {/* Main Content */}
          <View style={styles.content}>
            {renderScreen()}
          </View>

          {/* Bottom Tab Bar */}
          {currentScreen !== 'التفاصيل' && (
            <View style={[styles.tabBar, { backgroundColor: tabBg, borderTopColor: isDarkMode ? '#333' : '#e0e0e0' }]}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-around' }}>
                <TabButton label="الرئيسية" icon="home" isActive={currentScreen === 'الرئيسية'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('الرئيسية')} />
                <TabButton label="الاتفاقيات" icon="file-document" isActive={currentScreen === 'الاتفاقيات'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('الاتفاقيات')} />
                <TabButton label="القضايا" icon="scale-balance" isActive={currentScreen === 'القضايا'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('القضايا')} />
                <TabButton label="القرارات" icon="certificate" isActive={currentScreen === 'القرارات'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('القرارات')} />
                <TabButton label="المفضلة" icon="star" isActive={currentScreen === 'المفضلة'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('المفضلة')} />
                <TabButton label="المقارنة" icon="swap-horizontal" isActive={currentScreen === 'المقارنة'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('المقارنة')} />
                <TabButton label="المصادر" icon="link-variant" isActive={currentScreen === 'المصادر'} activeColor={activeColor} isDark={isDarkMode} onPress={() => setCurrentScreen('المصادر')} />
              </ScrollView>
            </View>
          )}
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

function TabButton({ label, icon, isActive, activeColor, isDark, onPress }) {
  const inactiveColor = isDark ? '#888' : 'gray';
  return (
    <TouchableOpacity style={styles.tabButton} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={isActive ? activeColor : inactiveColor}
      />
      <Text style={[styles.tabLabel, { color: isActive ? activeColor : inactiveColor }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  tabBar: { height: 60, borderTopWidth: 1, elevation: 8 },
  tabButton: { justifyContent: 'center', alignItems: 'center', minWidth: 70, padding: 5 },
  tabLabel: { fontSize: 10, marginTop: 4, fontWeight: 'bold' },
});
