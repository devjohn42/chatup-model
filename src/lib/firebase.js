import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'chatup-89b7d.firebaseapp.com',
  projectId: 'chatup-89b7d',
  storageBucket: 'chatup-89b7d.firebasestorage.app',
  messagingSenderId: '739923900207',
  appId: '1:739923900207:web:ccf795c30f5245fedc53da',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
