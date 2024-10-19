// src/pages/api/user.ts
import { CreateUserCommand } from '@/application/commands/createUserCommand';
import { UserPrismaRepository } from '@/infrastructure/persistance/prisma/userPrismaRepository';
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs'
import { AxiosError } from 'axios'

export async function POST(req: NextRequest) {

    const { name, email, password } = await req.json()
    const userRepository = new UserPrismaRepository();
    const createUser = new CreateUserCommand(userRepository);

    try {
        await createUser.execute(name, email, await hash(password, 11));
        return NextResponse.json({ message: 'User created' }, { status: 201 })

    } catch (error) {

        return NextResponse.json({ message: (error as Error).message }, { status: 500 })
    }

}
