import {
  FluentProvider,
  webDarkTheme,
  Card,
  CardHeader,
  Text,
  Badge,
  Divider,
  makeStyles,
  tokens,
} from '@fluentui/react-components'

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  card: {
    width: '400px',
    padding: tokens.spacingVerticalXXL,
  },
  logo: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorBrandForeground1,
    display: 'block',
    marginBottom: tokens.spacingVerticalL,
  },
  title: {
    display: 'block',
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

function AppContent() {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardHeader
          header={
            <Text className={styles.logo} size={800} weight="bold">
              Irrus
            </Text>
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
  return (
    <FluentProvider theme={webDarkTheme}>
      <AppContent />
    </FluentProvider>
  )
}

export default App
