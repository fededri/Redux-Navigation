import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {View, Text} from 'react-native';
import reducers from './reducers'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';
import ReduxThunk from 'redux-thunk'
import Router from './Router';

class App extends Component { 

    componentWillMount(){
        firebase.initializeApp({
             apiKey: "AIzaSyCuKQKkd77A5IqxqfC-2NyNC-3ulWz0-h0",
             authDomain: "testaudio-312dc.firebaseapp.com",
             databaseURL: "https://testaudio-312dc.firebaseio.com",
             projectId: "testaudio-312dc",
             storageBucket: "testaudio-312dc.appspot.com",
             messagingSenderId: "955201045122"
           });

         
     }


    render (){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return (
            <Provider store ={store} >
                <Router />
            </Provider>

        );
    }
}


export default App;