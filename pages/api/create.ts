import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {title, content} = req.body

    const session = await getServerSession(req, res, authOptions)
    
    if (!session) {
        res.status(401).json({ error: 'Unauthorized' })
        return
    }

    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    console.log(prismaUser)

    if (!prismaUser) {
        res.status(401).json({ error: 'Unauthorized'})
        return
    }

    try {
        await prisma.note.create({
            data: {
                title, 
                content,
                userId: prismaUser.id
            }
        })
        res.status(200).json({message: 'Note Created!'})
    } catch (error){
        console.log(error)
    }
}