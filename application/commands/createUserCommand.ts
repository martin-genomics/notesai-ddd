// src/application/commands/createUserCommand.ts
import { UserRepository } from '@/domain/repositories/userRepository';
import { User } from '@/domain/entities/user';

export class CreateUserCommand {
    constructor(private userRepository: UserRepository) { }

    async execute(name: string, email: string, password: string): Promise<void> {
        const user = new User(1, name, email, password);
        await this.userRepository.save(user);
    }
}
