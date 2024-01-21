import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;
  user$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    // Initialize your variables and collections here if needed
  }

  signUpWithEmail(username: string, email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        return credential.user.updateProfile({
          displayName: username
        }).then(() => {
          const userId = credential.user.uid;
          const userEmail = credential.user.email;
  
          const userData = {
            username: username,
            email: userEmail,
          };
          console.log('Sign Up initiated:', username, email);
          return this.createUserInFirestore(userId, username, userEmail);
        });
      });
  }

  loginWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  createUserInFirestore(userId: string, username: string, email: string): Promise<void> {
    const userDocRef = this.firestore.collection('users').doc(userId);
    const userData = {
      username: username,
      email: email,
      // Add other user properties if needed
    };

    return userDocRef.set(userData);
  }
  getCurrentUsername(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      map(user => (user ? user.displayName : null))
    );
  }
  
  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

}
