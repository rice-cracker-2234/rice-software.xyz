import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth';
import prisma from '@/lib/prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_PROVIDER_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.OAUTH_PROVIDER_GOOGLE_CLIENT_SECRET!,
    }),
  ],
});
