// src/domain/repositories/userRepository.ts

import { User } from '@/domain/entities/user';

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(id: number): Promise<void>;
}
