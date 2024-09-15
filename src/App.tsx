import Navbar from './Components/Navbar';
import ToggleThemeBtn from './Components/ToggleTheme';
import HomePage from './Pages/Home';

const App = () => {
    return (
        <>
            <Navbar />
            <HomePage />
            <ToggleThemeBtn />
        </>
    );
};

export default App;
