import { User } from "@prisma/client";

export class CreatePostDto {
  title: String;
  content?: String;
  published: boolean;
  author: User;
  authorId: Number;
}
