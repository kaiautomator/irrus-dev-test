import { useState } from 'react'
import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  Card,
  CardHeader,
  Text,
  Badge,
  Divider,
  Switch,
  makeStyles,
  tokens,
} from '@fluentui/react-components'
import { WeatherMoon20Regular, WeatherSunny20Regular } from '@fluentui/react-icons'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
    transition: 'background-color 0.2s',
  },
  card: {
    width: '400px',
    padding: tokens.spacingVerticalXXL,
  },
  cardHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logo: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorBrandForeground1,
  },
  themeToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    color: tokens.colorNeutralForeground3,
  },
  title: {
    display: 'block',
    marginTop: tokens.spacingVerticalL,
    marginBottom: tokens.spacingVerticalS,
  },
  subtitle: {
    display: 'block',
    color: tokens.colorNeutralForeground3,
    marginBottom: tokens.spacingVerticalXL,
  },
  badgeRow: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingVerticalXL,
    flexWrap: 'wrap',
  },
  meta: {
    display: 'block',
    color: tokens.colorNeutralForeground4,
    marginTop: tokens.spacingVerticalL,
    textAlign: 'center',
  },
})

function AppContent({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardHeader
          header={
            <div className={styles.cardHeaderRow}>
              <Text className={styles.logo} size={800} weight="bold">
                Irrus
              </Text>
              <div className={styles.themeToggle}>
                <WeatherSunny20Regular />
                <Switch
                  checked={darkMode}
                  onChange={onToggle}
                  label=""
                  aria-label="Dark mode toggle"
                />
                <WeatherMoon20Regular />
              </div>
            </div>
          }
        />

        <Text className={styles.title} size={600} weight="semibold" as="h1">
          Deployment Test
        </Text>
        <Text className={styles.subtitle} size={300}>
          React + TypeScript · Azure Static Web Apps
        </Text>

        <div className={styles.badgeRow}>
          <Badge appearance="filled" color="success" size="large">
            Online
          </Badge>
          <Badge appearance="outline" color="brand" size="large">
            Fluent UI v2
          </Badge>
          <Badge appearance="outline" color="informative" size="large">
            Azure SWA
          </Badge>
        </div>

        <Divider />

        <Text className={styles.meta} size={200}>
          Gebouwd en gedeployed door Kai · {new Date().getFullYear()}
        </Text>
      </Card>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <FluentProvider theme={darkMode ? webDarkTheme : webLightTheme}>
      <AppContent darkMode={darkMode} onToggle={() => setDarkMode(d => !d)} />
    </FluentProvider>
  )
}

export default App
