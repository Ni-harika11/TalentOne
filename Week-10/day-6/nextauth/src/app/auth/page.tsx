import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { email: credentials?.email }; // Here you would usually check user against DB
        if (user) {
          return user; // Return user if valid
        } else {
          return null; // Reject if invalid
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login', // Define your custom login page
  },
  session: {
    strategy: 'jwt',
  }
};

