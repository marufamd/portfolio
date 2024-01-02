import Footer from './components/Footer';
import TabSelector from './components/TabSelector';
import UserDisplay from './components/UserDisplay';
import { TABS, USER } from './util/config';

function App() {
	return (
		<>
			<UserDisplay name={USER.FIRST_NAME} icon={USER.AVATAR} />
			<TabSelector tabs={TABS} />
			<Footer name={`${USER.FIRST_NAME} ${USER.LAST_NAME}`}/>
		</>
	);
}

export default App;
