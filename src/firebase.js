import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCLwbb2Vmju5LFg3I1z-BJjXIBklCH_rUI',
	authDomain: 'covid-supply-request.firebaseapp.com',
	databaseURL: 'https://covid-supply-request.firebaseio.com',
	projectId: 'covid-supply-request',
	storageBucket: 'covid-supply-request.appspot.com',
	messagingSenderId: '524154730527',
	appId: '1:524154730527:web:e8d42fc2f7353753aa3d2a',
	measurementId: 'G-7EN1DPCVSS'
};

firebase.initializeApp(config);

export default firebase;
