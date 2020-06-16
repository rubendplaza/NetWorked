import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            connections: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://next.json-generator.com/api/json/get/N1hbZK16u')
            .then(response => response.json())
            .then(users => this.setState({ connections: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { connections, searchField } = this.state;
        const filteredConnections = connections.filter(connection => {
            return (connection.name.first.toLowerCase().includes(searchField.toLowerCase()) || connection.name.last.toLowerCase().includes(searchField.toLowerCase()))
        });
        return !connections.length ? 
            (
                <div className='loadingContainer'>
                    <h1 className='loadingTag'>Loading...</h1>
                </div>
            )
            :
            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList connections={filteredConnections}/>
                    </Scroll>
                </div>
            );
    }
}

export default App;