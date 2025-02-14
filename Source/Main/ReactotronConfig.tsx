import Reactotron from 'reactotron-react-native'

Reactotron.useReactNative();

Reactotron.configure({ name: 'Demo' })

const reactotron = Reactotron.configure({ host: '192.168.1.1' }).connect()
export default reactotron