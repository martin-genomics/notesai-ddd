'use client'
import { Flex, Text, Button, TextField, Box } from "@radix-ui/themes";
import { LockIcon, MailIcon, UserIcon } from 'lucide-react'

import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function UserForm() {
    const { handleSubmit, register } = useForm<{ name: string; email: string; password: string }>()

    const createUser = async (data: any) => {
        try {
            const res = await axios.post('/api/user', data);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box width={"350px"} style={{ border: '1px solid gray', padding: '40px', borderRadius: '5px' }}>
            <form onSubmit={handleSubmit(createUser)}>
                <Flex direction="column" gap="3">
                    <Text size={"6"}>Create Account</Text>

                    <TextField.Root {...register("name")} placeholder="Name" variant="soft" size="3">
                        <TextField.Slot>
                            <UserIcon />
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root {...register("email")} placeholder="Email" variant="soft" size="3">
                        <TextField.Slot>
                            <MailIcon />
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root {...register("password")} placeholder="Password" variant="soft" size="3">
                        <TextField.Slot>
                            <LockIcon />
                        </TextField.Slot>
                    </TextField.Root>

                    <Button type="submit" size="3">Create Account</Button>
                </Flex>

            </form>
        </Box>
    );
}
