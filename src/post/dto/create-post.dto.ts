import { User } from "@prisma/client";
export class CreatePostDto {
    title: string;
  
    content?: string;
  
    published?: Boolean;
  
    author: User;

    authorId: Number;
  }
  