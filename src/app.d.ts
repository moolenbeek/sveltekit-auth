// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { PrismaClient } from "@prisma/client";

declare global {
	namespace App {
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
	var __prisma: PrismaClient;

	declare namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type UserAttributes = {
			username: string;
			name: string;
		};
	}
}

export {};
