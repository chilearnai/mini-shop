import { Injectable, inject } from '@angular/core';
import type { User } from '@angular/fire/auth';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import type { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  // 🔹 Войти через Google
  loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider).then((result) => result.user);
  }

  // 🔹 Войти по email + пароль
  login(email: string, password: string): Promise<User> {
    return signInWithEmailAndPassword(this.auth, email, password).then((res) => res.user);
  }

  // 🔹 Зарегистрировать нового юзера
  register(email: string, password: string): Promise<User> {
    return createUserWithEmailAndPassword(this.auth, email, password).then((res) => res.user);
  }

  // 🔹 Выйти
  logout(): Promise<void> {
    return signOut(this.auth);
  }

  // 🔹 Поток текущего пользователя (Observable)
  get user$(): Observable<User | null> {
    return authState(this.auth);
  }

  // 🔹 Текущий пользователь (синхронно)
  get currentUser(): User | null {
    return this.auth.currentUser;
  }
}
