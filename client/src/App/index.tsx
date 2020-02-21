import React from 'react';
import style from './style.css';
import List from 'src/List';

interface IAppProps {
}

const App: React.FC<IAppProps> = () => {
    return (
        <div className={style.root}>
            <h1>App ????!</h1>
            <List />
        </div>
    )
};

export default App;
