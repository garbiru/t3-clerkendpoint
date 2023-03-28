import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string(), externalId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          externalId: input.externalId,
          name: input.name,
        },
      });
    }),
});
