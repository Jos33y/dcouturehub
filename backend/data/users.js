import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Toby Shang',
        email: 'tobyshang@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kay Wise',
        email: 'kaywise@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users