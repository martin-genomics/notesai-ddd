// src/infrastructure/persistence/prisma/userPrismaRepository.ts
import { PrismaClient } from '@prisma/client';
import { UserRepository } from '@/domain/repositories/userRepository';
import { User } from '@/domain/entities/user';

export class UserPrismaRepository implements UserRepository {
    findByEmail(email: string): Promise<User | null> {
        throw new Error('Method not implemented.');
    }
    update(user: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    private prisma = new PrismaClient();

    async save(user: User): Promise<void> {
        await this.prisma.user.create({
            data: {
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            },
        });
    }

    async findById(id: number): Promise<User | null> {
        const userRecord = await this.prisma.user.findUnique({ where: { id } });
        if (!userRecord) return null;
        return new User(userRecord.id, userRecord.name, userRecord.email, userRecord.password);
    }
}
