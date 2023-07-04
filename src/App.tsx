import { useState } from 'react';
import styles from './App.module.scss';
import Classnames from 'classnames';

function App() {
    const [count, setCount] = useState(0);

    return <div className={styles.root}>App</div>;
}

export default App;
