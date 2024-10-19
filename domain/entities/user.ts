// src/domain/entities/user.ts
export class User {
    constructor(
        private readonly id: number,
        private name: string,
        private email: string,
        private password: string,
    ) { }

    updateName(newName: string): void {
        this.name = newName;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }

    getPassword(): string {
        return this.password;
    }
}
